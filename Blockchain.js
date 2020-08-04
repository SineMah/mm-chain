'use strict';

const Block = require('./Block');
const Dates = require('./Dates');

module.exports = class Blockchain {

    constructor(difficulty) {
        let dates = new Dates();

        dates.register();

        if(!difficulty || typeof difficulty !== 'number') {

            this.difficulty = 4;
        }else {

            this.difficulty = difficulty;
        }

        this.blockchain = [this.initBlock()];
    }

    initBlock() {

        return new Block(0, new Date().tinyDateFormat('hh:mm:ss dd/MM/YYYY'), null, '0');
    }

    getLatestBlock() {

        return this.blockchain[this.blockchain.length - 1];
    }

    addBlock(data) {
        let block = new Block(this.blockchain.length, new Date().tinyDateFormat('hh:mm:ss dd/MM/YYYY'), data);

        block.previousHash = this.getLatestBlock().hash;
        block.proofOfWork(this.difficulty);       

        this.blockchain.push(block);
    }

    isValid() {

        for(let i = 1; i < this.blockchain.length; i++) {
            const currentBlock = this.blockchain[i];
            const prevBlock= this.blockchain[i - 1];

            if(currentBlock.hash !== currentBlock.getHash()) {

                return false;
            }

            if(currentBlock.previousHash !== prevBlock.hash) {

                return false;
            }
        }

        return true;
    }

    export() {

        return this.blockchain.map(el => el.getData());
    }
}