# workinHard

[![Node.js CI](https://github.com/jshemas/workinHard/workflows/Node.js%20CI/badge.svg?branch=master)](https://github.com/jshemas/workinHard/actions?query=branch%3Amaster)
[![Known Vulnerabilities](https://snyk.io/test/github/jshemas/workinHard/badge.svg)](https://snyk.io/test/github/jshemas/workinHard)

workinHard is a node.js app that makes you /look/ more productive!
Just run the app, hammer away at the keyboard, then press enter and code will appear!

Note: This is a clone of http://hackertyper.com/

## Installation

```bash
npm install -g workin-hard
```

OR

If you are running `npm 5.2.0` or higher, you can try out workinHard without polluting global namespace.
Try this with:

```bash
npx workin-hard
```

## Usage

To run:

```bash
workin-hard
```

To exit:

```bash
ctrl + c
```

## Changing the Code File

Use the first variable as your code type:

```bash
workin-hard --code
workin-hard --css
workin-hard --html
workin-hard --jackryan
workin-hard --js
workin-hard --node
workin-hard --react
```

Note: If you don't pass in a code type, it will default to `code` from Jack Ryan: Shadow Recruit.
