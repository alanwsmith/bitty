#![allow(warnings)]
use crate::support::config::*;
use crate::support::site::Site;
use anyhow::Result;
use chrono::DateTime;
use chrono::Local;
use tokio::sync::mpsc::Receiver;
use tower_livereload::Reloader;

pub struct Builder {
  pub config: Config,
}

impl Builder {
  pub fn new(config: Config) -> Builder {
    Builder { config }
  }

  pub fn generate_site(self) -> Result<()> {
    println!("generating site");
    Ok(())
  }
}

pub async fn run_builder(
  mut rx: Receiver<DateTime<Local>>,
  reloader: Reloader,
  config: Config,
) -> Result<()> {
  Ok(())
}
