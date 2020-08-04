# mm-chain
> JavaScript blockchain example

## Usage example
```javascript
'use strict';

const BlockChain = require('./Blockchain');

let chain = new BlockChain();

chain.addBlock({
    sender: "Joker",
    recipient: "Batman",
    custom: 37
});

chain.addBlock({
    sender: "Monitor",
    recipient: "Flash",
    custom: 679
});

chain.addBlock({
    sender: "Arrow",
    recipient: "Diaz",
    custom: 907
});

console.log(JSON.stringify(chain.export(), null, 4));
console.log(chain.isValid());
```

## Release History

* 0.0.2 initial release