# import-from-fallback

[![Build status](https://img.shields.io/travis/imcuttle/import-from-fallback/master.svg?style=flat-square)](https://travis-ci.org/imcuttle/import-from-fallback)
[![Test coverage](https://img.shields.io/codecov/c/github/imcuttle/import-from-fallback.svg?style=flat-square)](https://codecov.io/github/imcuttle/import-from-fallback?branch=master)
[![NPM version](https://img.shields.io/npm/v/import-from-fallback.svg?style=flat-square)](https://www.npmjs.com/package/import-from-fallback)
[![NPM Downloads](https://img.shields.io/npm/dm/import-from-fallback.svg?style=flat-square&maxAge=43200)](https://www.npmjs.com/package/import-from-fallback)
[![Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://prettier.io/)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg?style=flat-square)](https://conventionalcommits.org)

> Import a module like with `require()` but from some fallback directories

## Installation

```bash
npm install import-from-fallback
# or use yarn
yarn add import-from-fallback
```

## Usage

```javascript
const importFromFallback = require('import-from-fallback')
const requireLocal = (id) => importFromFallback([process.cwd(), __dirname], id)

requireLocal('react') // Find react from `process.cwd()` or `__dirname`

requireLocal('not_found') // Throw MODULE_NOT_FOUND error

importFromFallback.silent([process.cwd(), __dirname], 'not_found') // Return undefined
```

## Related

## Contributing

- Fork it!
- Create your new branch:  
  `git checkout -b feature-new` or `git checkout -b fix-which-bug`
- Start your magic work now
- Make sure npm test passes
- Commit your changes:  
  `git commit -am 'feat: some description (close #123)'` or `git commit -am 'fix: some description (fix #123)'`
- Push to the branch: `git push`
- Submit a pull request :)

## Authors

This library is written and maintained by imcuttle, <a href="mailto:imcuttle@163.com">imcuttle@163.com</a>.

## License

MIT - [imcuttle](https://github.com/imcuttle) 🐟
