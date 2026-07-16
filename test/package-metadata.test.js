const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");

const packagesDirectory = path.join(__dirname, "..", "packages");

for (const directoryName of fs.readdirSync(packagesDirectory)) {
  const packageDirectory = path.join(packagesDirectory, directoryName);
  const manifest = require(path.join(packageDirectory, "package.json"));
  const source = fs.readFileSync(path.join(packageDirectory, manifest.main), "utf8");
  const runtimePackages = [...source.matchAll(/require\(["']([^"']+)["']\)/g)]
    .map(([, packageName]) => packageName)
    .filter((packageName) => !packageName.startsWith("."));

  test(`${manifest.name} owns its runtime dependencies`, () => {
    for (const packageName of runtimePackages) {
      assert.ok(
        manifest.dependencies?.[packageName],
        `${packageName} is loaded at runtime and must be a dependency, not a peer dependency`,
      );
    }
  });

  test(`${manifest.name} does not declare dependencies twice`, () => {
    const dependencies = new Set(Object.keys(manifest.dependencies || {}));
    const peerDependencies = Object.keys(manifest.peerDependencies || {});
    const duplicates = peerDependencies.filter((packageName) => dependencies.has(packageName));

    assert.deepEqual(duplicates, []);
  });
}
