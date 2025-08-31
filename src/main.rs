#![allow(warnings)]
use anyhow::Result;
use bitty_js_builder::support::helpers;
use bitty_js_builder::support::server::*;
use chrono::{DateTime, Local};
use minijinja::path_loader;
use std::path::PathBuf;
use tokio::sync::mpsc;
use tower_livereload::LiveReloadLayer;

#[derive(Debug, Default)]
struct Site {
    // input_root: PathBuf,
    output_root: PathBuf,
}

impl Site {
    fn new(output_root: PathBuf) -> Site {
        Site { output_root }
    }
    // fn new(input_root: PathBuf, output_root: PathBuf) -> Site {
    //     Site {
    //         input_root,
    //         output_root,
    //     }
    // }
    // fn pages_dir(&self) -> PathBuf {
    //     self_json::from.input_root.join("pages")
    // }
}

#[tokio::main]
async fn main() -> Result<()> {
    clearscreen::clear()?;
    println!("Initializing site builder...");
    let site = Site::new(PathBuf::from("docs"));
    let livereload = LiveReloadLayer::new();
    let reloader = livereload.reloader();
    let (watcher_tx, watcher_rx) = mpsc::channel::<DateTime<Local>>(32);

    let http_handle = tokio::spawn(async move {
        let _ = run_server(&site.output_root, livereload).await;
    });

    // let site = Site::new(PathBuf::from("build-input"), PathBuf::from("docs"));
    // dbg!(site);
    // println!("asdf");

    Ok(())
}

// fn output_pages() -> Result<()> {
//     let mut env = helpers::get_env();
//     env.set_loader(path_loader("build-input/misc-html"));
//     Ok(())
// }
