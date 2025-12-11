## Make and Deploy a New Version

### Create the New Folder and Files 

- Duplicate the latest version folder. 

- Change the folder files name to the new version 
number. 

- Delete the `.js` file in the new folder. 
(the `.dev.js` is where work is done)

- Update the `package.json` file to use the new
version number. 

- Update the `version` variable inside the `bitty-#-#-#`
file if necessary. 

### Make Your Changes

- Update the variables on the site to point
to the right place. 

- Do whatever updates to the js file. 

### Deploy

- TODO: Make notes on doing a `package.json`
set to `bitty-dev` to smoke test the 
deploy before pushing the main on live. 

- Update the `version` number/string 
in the folder/file name if necessary
(e.g. if working on `bitty.#.#.#-rc#.dev.js` and it 
become the actual release change it to
just `bitty.#.#.#-rc#.js`.)

- Make the minified `.js` version of the file
(i.e. the version from `.dev.js` and drop it 
in the folder.)

- Update the `version` string in the
`package.json` file if necessary to make
the folder/file name. 

- Publish to npm 

        npm publish --access public

  NOTE: You may have to do this if you've
  been logged out:

        npm login


- Switch site variables to point to 
unpkg site instead of relative file copy. 

- Check the localhost version of the
site works

- Push the site. 
