#!/usr/bin/env cargo -q -Zscript

---
[dependencies]
anyhow = "1.0.98"
minijinja = { version = "2.9.0", features = ["custom_syntax", "loader"] }
serde = {version = "1.0.219", features = ["derive"] }
syntect = { version = "5.2.0"}
---


use anyhow::Result;
use minijinja::{Environment, Value, context};
use minijinja::syntax::SyntaxConfig;
use serde::{Deserialize, Serialize};
use std::fs;
use std::path::PathBuf;
use std::collections::BTreeMap;
use syntect::easy::HighlightLines;
use syntect::highlighting::{Style, ThemeSet};
use syntect::html::{styled_line_to_highlighted_html, IncludeBackground};
use syntect::parsing::SyntaxSet;
use syntect::util::LinesWithEndings;



#[derive(Debug, Deserialize, Serialize)]
struct Payload {
    snippets: BTreeMap<String, Snippet>
}

#[derive(Debug, Deserialize, Serialize)]
struct Snippet {
    html: String,
    highlighted: String,
}

impl Payload {
    pub fn new() -> Result<Payload> {
        let mut payload = Payload {
            snippets: BTreeMap::new()
        };
        payload.load_html_snippets()?;
        Ok(payload)
    }

    pub fn load_html_snippets(&mut self) -> Result<()> {
        for file in get_files_in_dir(&PathBuf::from("build-input/html-snippets"))?.iter() {
            let name = file.file_name().unwrap().display().to_string();
            let html = fs::read_to_string(file)?;
            let highlighted = highlight(&html, "HTML")?;
            let snippet = Snippet {
                html,
                highlighted
            };
            self.snippets.insert(name.clone(), snippet);
        };
        Ok(())
    }
}

fn main() -> Result<()> {
    output_content()?;
    println!("done");
    Ok(())
}

fn output_content() -> Result<()> {
    let payload = Payload::new()?;
    let data = Value::from_serialize(payload);
    let index_input = fs::read_to_string("build-input/index.html")?;
    let mut env = get_env();
    env.add_template_owned(
        "template", index_input
    )?;
    let jinja = env.get_template("template")?;
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

pub fn get_files_in_dir(dir: &PathBuf) -> Result<Vec<PathBuf>> {
    let files = fs::read_dir(dir)?
        .into_iter()
        .filter(|p| {
            if p.as_ref().unwrap().path().is_file() {
                true
            } else {
                false
            }
        })
        .map(|p| p.as_ref().unwrap().path())
        .filter(|p| {
            !p.file_name().unwrap().to_str().unwrap().starts_with(".")
        })
        .collect();
    Ok(files)
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
