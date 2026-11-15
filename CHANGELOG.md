# toad-uri-js

## 5.0.3

### Patch Changes

- ac22cdd: Fix the ESM build failing to load in Node.js with `ERR_UNSUPPORTED_DIR_IMPORT`: import `punycode/punycode.js` instead of the `punycode/` directory (#31)

## 5.0.2

### Patch Changes

- 0becf97: Fix an infinite loop in `removeDotSegments` on paths containing U+2028, U+2029 or `\r` (CVE-2026-93690). It was reachable directly and through `normalize()` and `resolve()` with `{ iri: true }`. Also stop `parse()` dropping everything after a raw U+2028 or U+2029 in a fragment or a URN NSS.
