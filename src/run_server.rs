use anyhow::Result;
use anyhow::anyhow;
use axum::Router;
use axum::response::Html;
use axum::routing::get;
use port_check::free_local_port_in_range;
use std::path::PathBuf;
use std::process::Command;
use tower_http::services::ServeDir;
use tower_livereload::LiveReloadLayer;

pub async fn run_server(doc_root: &PathBuf, livereload: LiveReloadLayer) -> Result<()> {
    let port = find_port()?;
    launch_browser(port.into())?;
    println!("Starting web server on port: {}", port);
    let service = ServeDir::new(doc_root)
        .append_index_html_on_directories(true)
        .not_found_service(get(|| missing_page()));
    let app = Router::new().fallback_service(service).layer(livereload);
    let listener = tokio::net::TcpListener::bind(format!("127.0.0.1:{}", port))
        .await
        .unwrap();
    axum::serve(listener, app).await.unwrap();
    Ok(())
}

fn find_port() -> Result<u16> {
    free_local_port_in_range(5444..=6000).ok_or(anyhow!("Could not find port"))
}

async fn missing_page() -> Html<&'static str> {
    Html(
        r#"<!DOCTYPE html>
<html lang="en">
<head><style>body { background: black; color: white;}</style></head>
<body>Page Not Found</body>
</html>"#,
    )
}

fn launch_browser(port: usize) -> Result<()> {
    if !cfg!(debug_assertions) {
        let args: Vec<String> = vec![format!("http://localhost:{}", port)];
        Command::new("open").args(args).output()?;
    }
    Ok(())
}
