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
        "timestamp": "16:07:37 04/Aug/2020",
        "data": null,
        "previousHash": "0",
        "hash": "fb707223f1f551959308e4e18919aee861e0893dd13b791da6053cd1a73c4f22",
        "nonce": 0
    },
    {
        "index": 1,
        "timestamp": "16:07:37 04/Aug/2020",
        "data": {
            "sender": "Joker",
            "recipient": "Batman",
            "custom": 37
        },
        "previousHash": "fb707223f1f551959308e4e18919aee861e0893dd13b791da6053cd1a73c4f22",
        "hash": "f0cbe6e83e89f4a1944131259c431b84a886654085efc857d1871bb71c126905",
        "nonce": 9835
    },
    {
        "index": 2,
        "timestamp": "16:07:37 04/Aug/2020",
        "data": {
            "sender": "Monitor",
            "recipient": "Flash",
            "custom": 679
        },
        "previousHash": "f0cbe6e83e89f4a1944131259c431b84a886654085efc857d1871bb71c126905",
        "hash": "0672a417e8109091714a2001c68753a4455f2c08f44743d0e4e3f7be6ca098d4",
        "nonce": 50179
    },
    {
        "index": 3,
        "timestamp": "16:07:38 04/Aug/2020",
        "data": {
            "sender": "Arrow",
            "recipient": "Diaz",
            "custom": 907
        },
        "previousHash": "0672a417e8109091714a2001c68753a4455f2c08f44743d0e4e3f7be6ca098d4",
        "hash": "ed7a42e2f94e7b11d7fccdc7c70ce74a0b0834f3de93e605e66886638831da5f",
        "nonce": 87545
    }
]
true
```

## Release History

* 0.0.2 initial release