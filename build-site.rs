#!/usr/bin/env cargo -q -Zscript

---
[dependencies]
anyhow = "1.0.98"
minijinja = { version = "2.9.0", features = ["custom_syntax", "loader"] }
---

use anyhow::Result;
use minijinja::{Environment, Value, context};
use minijinja::syntax::SyntaxConfig;
use std::fs;

fn main() -> Result<()> {
    output_content()?;
    Ok(())
}

fn output_content() -> Result<()> {
    let index_input = fs::read_to_string("build-input/index.html")?;
    let mut env = get_env();
    env.add_template_owned(
        "template", index_input
    )?;
    let jinja = env.get_template("template")?;
    let output = jinja.render(context!())?;
    println!("{}", output);
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

