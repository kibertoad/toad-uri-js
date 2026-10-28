# Changesets

Every PR that changes what gets published to npm adds a changeset describing the change:

```sh
npx changeset
```

Pick the bump type (patch, minor or major) and write a one-line summary. It goes into
`CHANGELOG.md` when the release is cut.

On each push to `main`, the Release workflow collects pending changesets into a
"Release toad-uri-js" PR that bumps the version and updates the changelog. That PR has
auto-merge enabled, so GitHub merges it once its required checks pass, and the Release
workflow then publishes the new version to npm.
