'use strict';

const SHA256 = require('crypto-js/sha256');

module.exports = class Block {

    constructor(index, timestamp, data, previousHash) {

        if(!previousHash) {

            previousHash = null;
        }

        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.previousHash = previousHash;
        this.hash = this.getHash();

        this.referrer = 0;
    }

    proofOfWork(difficulty) {
        let f_ = null;

        while(f_ !== (0).toString().repeat(difficulty)) {

            f_ = this.getHash().substring(0, difficulty);

            this.referrer++;
            this.hash = this.getHash();
        }
    }

    getHash() {

        return SHA256(this.index + this.referrer + this.previousHash + this.timestamp + JSON.stringify(this.data)).toString();
    }

    getData() {

        return {
            index: this.index,
            timestamp: this.timestamp,
            data: this.data,
            previousHash: this.previousHash,
            hash: this.hash,
            referrer: this.referrer
        };
    }
}