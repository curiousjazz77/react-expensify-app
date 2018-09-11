# react-indecision-app
Udemy course project


## Steps to get started
1. Run yarn install. By running this, the project should begin downloading the packages specified in package.json and assemble your `node_modules` folder
2. To run things on localhost:
    - yarn run serve 
        - this will make sure the new serve script (live-server public/) in package.json runs.
    - yarn run build
        - this will run the equivalent defined in the scripts section of package.json: babel src/<script here> --out-file=public/scripts/app.js --presets=env,react --watch