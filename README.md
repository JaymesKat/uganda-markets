# uganda-markets

[![travis-build](https://img.shields.io/travis/jaymeskat/uganda-markets)](https://travis-ci.org/JaymesKat/uganda-markets)

# Description

This package lets you to access information on markets distributed across Uganda

## Table of Contents

- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
- [Contributions](#contributions)
- [License](#license)

---

## Requirements
In order to run this project, ensure that you have installed;
- Node 8 and aboce
- NPM 

## Installation

Install the package using npm
```
npm install uganda-markets
```

## Usage

### Import library

```
    const marketsLib = require('uganda-markets')

```

### Getting All Markets

```
    marketsLib.all();

```


#### Getting Random Market
    
```
    marketsLib.random();

```

#### Search for market by name

```
    const name = 'market name'
    marketsLib.search(name);

```

#### Retrieve market by ID
    

```
    const id = 1;
    marketsLib.selectOne(id);

```
Market ids can be accessed after  viewing all markets


## Contributions
I welcome comments for improvements on this package. Please document this by creating an issue


## License
This package is free software distributed under the terms of the MIT license.
