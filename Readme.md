# mm-chain
> JavaScript blockchain example

## Usage example
### test.js
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

### output
``` json
[
    {
        "index": 0,
        "timestamp": "16:16:29 04/Aug/2020",
        "data": null,
        "previousHash": "0",
        "hash": "65045ee6815de81e87a3aac267fc3040f2c6ad3590f327c9480f96bf9558c13c",
        "referrer": 0
    },
    {
        "index": 1,
        "timestamp": "16:16:29 04/Aug/2020",
        "data": {
            "sender": "Joker",
            "recipient": "Batman",
            "custom": 37
        },
        "previousHash": "65045ee6815de81e87a3aac267fc3040f2c6ad3590f327c9480f96bf9558c13c",
        "hash": "52be8b575a80c68e8931eed933a9d7bb35776240b7b5893f49133d453f32ee99",
        "referrer": 44396
    },
    {
        "index": 2,
        "timestamp": "16:16:30 04/Aug/2020",
        "data": {
            "sender": "Monitor",
            "recipient": "Flash",
            "custom": 679
        },
        "previousHash": "52be8b575a80c68e8931eed933a9d7bb35776240b7b5893f49133d453f32ee99",
        "hash": "c097445682b8719020d99c9a3fca401d0edc4d0745a25f6e0c191b63c43e3fd0",
        "referrer": 18661
    },
    {
        "index": 3,
        "timestamp": "16:16:31 04/Aug/2020",
        "data": {
            "sender": "Arrow",
            "recipient": "Diaz",
            "custom": 907
        },
        "previousHash": "c097445682b8719020d99c9a3fca401d0edc4d0745a25f6e0c191b63c43e3fd0",
        "hash": "86bde52a16b7cd314762f643c399cfa0c12e6558d881f1ce72e92dd7d793cab9",
        "referrer": 13556
    }
]
true
```

## Release History

* 0.0.2 initial release