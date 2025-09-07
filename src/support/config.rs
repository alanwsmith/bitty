use std::path::PathBuf;

#[derive(Clone, Debug)]
pub struct Config {
  pub input_dir: PathBuf,
  pub output_dir: PathBuf,
}

impl Config {
  pub fn new(
    input_dir: PathBuf,
    output_dir: PathBuf,
  ) -> Config {
    Config {
      input_dir,
      output_dir,
    }
  }
}
