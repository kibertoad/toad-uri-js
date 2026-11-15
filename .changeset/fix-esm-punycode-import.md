---
"toad-uri-js": patch
---

Fix the ESM build failing to load in Node.js with `ERR_UNSUPPORTED_DIR_IMPORT`: import `punycode/punycode.js` instead of the `punycode/` directory (#31)
