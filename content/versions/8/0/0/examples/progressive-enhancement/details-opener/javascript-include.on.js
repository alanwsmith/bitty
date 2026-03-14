[! include 
  "versions/" + 
  json.config.versions.current.major|string + "/" +
  json.config.versions.current.minor|string + "/" +
  json.config.versions.current.patch|string + "/" +
  "_wrappers/vars.txt"
!]

[! include [vars.version_dir, "bits", "details-opener.js"]|join("/") ignore missing !]

