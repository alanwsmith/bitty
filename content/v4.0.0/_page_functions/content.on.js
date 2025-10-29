window.bittyFunctions = {
  [! for file in files !] 
    [!- if file.folder == version_dir + "/_page_functions/functions" !]
      [! include file.folder + "/" + file.name !]
    [! endif !]
  [!- endfor !]
}

