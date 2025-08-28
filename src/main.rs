use anyhow::Result;
use itertools::Itertools;
use minijinja::syntax::SyntaxConfig;
use minijinja::{Environment, Value, context, path_loader};
use serde::{Deserialize, Serialize};
use std::collections::BTreeMap;
use std::fs;
use std::path::PathBuf;
use syntect::easy::HighlightLines;
use syntect::highlighting::{Style, ThemeSet};
use syntect::html::{IncludeBackground, styled_line_to_highlighted_html};
use syntect::parsing::SyntaxSet;
use syntect::util::LinesWithEndings;
use walkdir::WalkDir;

#[derive(Debug, Deserialize, Serialize)]
struct Example {
    details: String,
    highlighted_html: String,
    javascripts: Vec<String>,
    raw_html: String,
    title: String,
}

#[derive(Debug, Deserialize, Serialize)]
struct Payload {
    examples: Vec<Example>,
    example_scripts: BTreeMap<String, Script>,
    // example_html: BTreeMap<String, Html>,
    // example_names: Vec<String>,
    misc_html: BTreeMap<String, Html>,
}

#[derive(Debug, Deserialize, Serialize)]
struct Html {
    raw: String,
    highlighted: String,
}

#[derive(Debug, Deserialize, Serialize)]
struct Script {
    raw: String,
    highlighted: String,
}

impl Payload {
    pub fn new() -> Result<Payload> {
        let mut payload = Payload {
            examples: vec![],
            example_scripts: BTreeMap::new(),
            misc_html: BTreeMap::new(),
        };
        // payload.load_example_html()?;
        payload.load_examples()?;
        payload.load_misc_html()?;
        payload.load_example_scripts()?;
        Ok(payload)
    }

    pub fn load_examples(&mut self) -> Result<()> {
        for dir in get_dirs(&PathBuf::from("build-input/examples"))?.iter() {
            let snippet_file = dir.join("snippet.html");
            let data = fs::read_to_string(snippet_file)?;
            let parts: Vec<_> = data.split("<!-- x -->").map(|x| x.trim()).collect();
            let initial_html = parts[0];
            let title = parts[1].to_string();
            let raw_html = initial_html
                .trim()
                .replace("<!-- prettier-ignore -->\n", "");
            let highlighted_html = highlight(&raw_html, "HTML")?;
            // TODO: Handle multiple scripts here when necessary.
            let javascripts = vec![parts[2].to_string()];
            let details = markdown::to_html(&parts[3].to_string());
            let e = Example {
                details,
                highlighted_html,
                javascripts,
                raw_html,
                title,
            };
            let _ = &self.examples.push(e);

            //     let name = file.file_name().unwrap().display().to_string();
            //     let base_name = file.file_stem().unwrap().display().to_string();
            //     self.example_names.push(base_name);
            //     let scrubbed = raw.trim().replace("<!-- prettier-ignore -->\n", "");
            //     let html = Html {
            //         raw,
            //         highlighted
            //     };
            //     self.example_html.insert(name.clone(), html);
        }

        Ok(())
    }

    // pub fn load_example_html(&mut self) -> Result<()> {
    //     for file in get_files(&PathBuf::from("build-input/example-html"), "html")?.iter() {
    //         let name = file.file_name().unwrap().display().to_string();
    //         let base_name = file.file_stem().unwrap().display().to_string();
    //         self.example_names.push(base_name);
    //         let raw = fs::read_to_string(file)?;
    //         let scrubbed = raw.trim().replace("<!-- prettier-ignore -->\n", "");
    //         let highlighted = highlight(&scrubbed, "HTML")?;
    //         let html = Html {
    //             raw,
    //             highlighted
    //         };
    //         self.example_html.insert(name.clone(), html);
    //     };
    //     Ok(())
    // }

    pub fn load_misc_html(&mut self) -> Result<()> {
        for file in get_files(&PathBuf::from("build-input/misc-html"), "html")?.iter() {
            let name = file.file_name().unwrap().display().to_string();
            let raw = fs::read_to_string(file)?;
            let scrubbed = raw.trim().replace("<!-- prettier-ignore -->\n", "");
            let highlighted = highlight(&scrubbed, "HTML")?;
            let html = Html { raw, highlighted };
            self.misc_html.insert(name.clone(), html);
        }
        Ok(())
    }

    pub fn load_example_scripts(&mut self) -> Result<()> {
        for file in get_files(&PathBuf::from("docs/scripts"), "js")?.iter() {
            let name = file.file_name().unwrap().display().to_string();
            let raw = fs::read_to_string(file)?;
            let scrubbed = raw.trim().replace("// deno-fmt-ignore-file\n", "");
            let highlighted = highlight(&scrubbed, "JavaScript")?;
            let script = Script { raw, highlighted };
            self.example_scripts.insert(name.clone(), script);
        }
        Ok(())
    }
}

fn main() -> Result<()> {
    copy_dir(
        &PathBuf::from("build-input/scripts"),
        &PathBuf::from("docs/scripts"),
    )?;
    output_content()?;
    println!("done");
    Ok(())
}

fn output_content() -> Result<()> {
    let payload = Payload::new()?;
    let data = Value::from_serialize(payload);
    // let index_input = fs::read_to_string("build-input/index.html")?;
    let mut env = get_env();
    // env.add_template_owned(
    //     "template", index_input
    // )?;
    env.set_lstrip_blocks(true);
    env.set_trim_blocks(true);
    env.set_loader(path_loader("build-input/misc-html"));

    // for (name, tmpl) in env.templates() {
    //     println!("{}", tmpl.render(context!{ name => "World" }).unwrap());
    // }

    let jinja = env.get_template("index.html")?;
    let output = jinja.render(context!(data))?;
    fs::write("docs/index.html", output)?;
    Ok(())
}

fn get_env() -> Environment<'static> {
    let mut env = Environment::new();
    env.set_syntax(
        SyntaxConfig::builder()
            .block_delimiters("[!", "!]")
            .variable_delimiters("[@", "@]")
            .comment_delimiters("[#", "#]")
            .build()
            .unwrap(),
    );
    env
}

pub fn get_dirs(dir: &PathBuf) -> Result<Vec<PathBuf>> {
    Ok(fs::read_dir(dir)
        .unwrap()
        .into_iter()
        .filter(|p| {
            if p.as_ref().unwrap().path().is_dir() {
                true
            } else {
                false
            }
        })
        .filter_map(|p| match p.as_ref().unwrap().path().strip_prefix(".") {
            Ok(_) => None,
            Err(_) => Some(p.as_ref().unwrap().path()),
        })
        .sorted()
        .collect())
}

pub fn get_files(dir: &PathBuf, extension: &str) -> Result<Vec<PathBuf>> {
    Ok(fs::read_dir(dir)
        .unwrap()
        .into_iter()
        .filter(|p| {
            if p.as_ref().unwrap().path().is_file() {
                true
            } else {
                false
            }
        })
        .filter(|p| match p.as_ref().unwrap().path().extension() {
            Some(ext) => ext == extension,
            None => false,
        })
        .filter_map(|p| match p.as_ref().unwrap().path().strip_prefix(".") {
            Ok(_) => None,
            Err(_) => Some(p.as_ref().unwrap().path()),
        })
        .collect())
}

fn highlight(code: &str, language: &str) -> Result<String> {
    let mut the_lines = vec![];
    let ps = SyntaxSet::load_defaults_newlines();
    let ts = ThemeSet::load_defaults();
    let syntax = ps.find_syntax_by_name(language).unwrap();
    let mut h = HighlightLines::new(syntax, &ts.themes["base16-ocean.dark"]);
    for line in LinesWithEndings::from(code) {
        let ranges: Vec<(Style, &str)> = h.highlight_line(line.trim_end(), &ps).unwrap();
        let highlighted_line = styled_line_to_highlighted_html(&ranges[..], IncludeBackground::No);
        let mut spanned_line = String::from(r#"<span class="codeLine">"#);
        spanned_line.push_str(&highlighted_line.unwrap());
        spanned_line.push_str("</span>");
        the_lines.push(spanned_line);
    }
    Ok(the_lines.join("\n"))
}

fn copy_dir(source_dir: &PathBuf, dest_dir: &PathBuf) -> Result<()> {
    for entry in WalkDir::new(source_dir) {
        let source_path = entry?.into_path();
        let dest_path = dest_dir.join(source_path.strip_prefix(source_dir).unwrap());
        if source_path.is_dir() {
            fs::create_dir_all(dest_path)?;
        } else {
            let data = std::fs::read(source_path)?;
            std::fs::write(dest_path, &data)?;
        }
    }
    Ok(())
}
