#![allow(warnings)]
use anyhow::Result;
use bitty_js_builder::support::builder::*;
use bitty_js_builder::support::config::*;
use bitty_js_builder::support::helpers::*;
use bitty_js_builder::support::server::*;
use bitty_js_builder::support::site::*;
use bitty_js_builder::support::watcher;
use bitty_js_builder::support::watcher::*;
use chrono::{DateTime, Local};
use minijinja::path_loader;
use std::path::PathBuf;
use tokio::sync::mpsc;
use tower_livereload::LiveReloadLayer;

#[tokio::main]
async fn main() -> Result<()> {
  clearscreen::clear()?;
  println!("Initializing site builder...");
  let config =
    Config::new(PathBuf::from("content"), PathBuf::from("docs"));
  let livereload = LiveReloadLayer::new();
  let reloader = livereload.reloader();
  let (watcher_tx, watcher_rx) =
    mpsc::channel::<DateTime<Local>>(32);
  let server_config = config.clone();
  let server_handle = tokio::spawn(async move {
    let _ = run_server(livereload, server_config).await;
  });
  let builder_config = config.clone();
  let builder_handle = tokio::spawn(async move {
    let _ = run_builder(watcher_rx, reloader, builder_config).await;
  });

  let watcher_config = config.clone();
  //  let watcher_handle = tokio::spawn(async {
  let _ = run_watcher(watcher_tx, watcher_config).await;
  // });

  server_handle.abort();
  builder_handle.abort();

  // let _ = run_builder(watcher_rx, reloader, builder_config).await;
  // println!("################ ERROR ##################");
  // println!("builder crashed");
  // println!("#########################################");
  // http_handle.abort();
  // watcher_handle.abort();

  Ok(())
}

// fn output_pages() -> Result<()> {
//     let mut env = helpers::get_env();
//     env.set_loader(path_loader("build-input/misc-html"));
//     Ok(())
// }
