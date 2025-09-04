use std::path::PathBuf;

#[derive(Clone, Debug, Default)]
pub struct Site {
  pub content_root: PathBuf,
  pub output_root: PathBuf,
}

impl Site {
  pub fn new(
    content_root: PathBuf,
    output_root: PathBuf,
  ) -> Site {
    Site {
      content_root,
      output_root,
    }
  }
}
