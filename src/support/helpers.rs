#![allow(warnings)]
use anyhow::Result;
use minijinja::syntax::SyntaxConfig;
use minijinja::{Environment, Value, context, path_loader};
use std::fs;
use std::path::PathBuf;
use walkdir::WalkDir;

pub fn get_env() -> Environment<'static> {
    let mut env = Environment::new();
    env.set_syntax(
        SyntaxConfig::builder()
            .block_delimiters("[!", "!]")
            .variable_delimiters("[@", "@]")
            .comment_delimiters("[#", "#]")
            .build()
            .unwrap(),
    );
    env.set_lstrip_blocks(true);
    env.set_trim_blocks(true);
    env
}
