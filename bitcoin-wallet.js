/**
 * Bitcoin Wallet Generator
 * Copyright 2021 Jamiel Sharief.
 *
 * Licensed under The Apache License 2.0
 * The above copyright notice and this permission notice shall be included in all copies or substantial
 * portions of the Software.
 *
 * @copyright   Copyright (c) Jamiel Sharief
 * @license     https://opensource.org/licenses/Apache-2.0 Apache License 2.0
 */

var bitcoin = require('bitcoinjs-lib');

var args = process.argv.slice(2);
if (args.length == 0) {
    var keyPair = bitcoin.ECPair.makeRandom();
}
else {
    if (args[0].length < 32) {
        throw new Error('The seed must be at least 32 characters long');
    }
    var privateKey = bitcoin.crypto.sha256(args[0]);
    var keyPair = bitcoin.ECPair.fromPrivateKey(privateKey);
}

// I have tested adding the private key to blockchain.com using p2pkh
const { address } = bitcoin.payments.p2pkh({ pubkey: keyPair.publicKey });

var out = {
    bitcoinAddress: address,
    privateKey: keyPair.toWIF()
};

console.log(out); 
