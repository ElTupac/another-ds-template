//  This is the prePublish build for the package, generates a package.json file at the dist folder.
const fs = require("fs");
const path = require("path");

const packageRaw = fs.readFileSync("package.json");

const {
  version,
  name,
  description,
  author,
  license,
  dependencies,
  peerDependencies,
  devDependencies,
} = JSON.parse(packageRaw);
console.log("\x1b[32m%s\x1b[0m", `Publishing ${name} @ ${version}`);

const packageJson = {
  name,
  version,
  description,
  author,
  license,
  peerDependencies,
  devDependencies,
  dependencies,
  main: "index.js",
};

fs.writeFile(
  path.join(__dirname, "/dist/package.json"),
  JSON.stringify(packageJson),
  (err) => {
    if (err) console.error(err);
    else console.log(packageJson);
  }
);
