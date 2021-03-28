# Bitcoin Wallet Generator

Securely generate a [Bitcoin](https://bitcoin.org/en/) wallet from the command line.

The objective of this project is securley and transparently generate bitcoin addresses from the command line using a dependable process. Initially I was going to do this in PHP, then bash, but then I settled to use the `bitcoinlib-js` library, since this is regularly maintained and used in trusted projects.

Under the hood `bitcoinlib-js` uses the [randombytes](https://github.com/crypto-browserify/randombyte) package, which in turn uses [crypto.randomBytes](https://nodejs.org/api/crypto.html#crypto_crypto_randombytes_size_callback) and generates cryptographically strong pseudo-random data.

## Installation

Download the source and install the dependencies.

```bash
$ git clone https://github.com/jamielsharief/bitcoin-wallet
$ cd bitcoin-wallet
$ npm install
```

## Usage

To generate an address, this uses the folloing command

```bash
$ node bitcoin-wallet.js
{
  bitcoinAddress: '1K9qSpG2fMVNjimxPkogAiFsvxKrCGmfKG',
  privateKey: 'L4Yh7cL9H1e66PF37izz82pU5gpcsLk3fToKwwZKN2bUzZDjnjpn'
}
```

You can also pass your own randomly generated string. A base64 string should be at least 44 characters and a hex string should to be at least 64 characters to get 256bits of entropy.

```bash
$ node bitcoin-wallet.js 'Wl0Psa38fcnjmR8d270kUoryiEkhZLPv7rjMafV98ic='
```

To generate seed from the command line

```bash
$ node bitcoin-wallet.js "$(openssl rand -hex 32)"
$ node bitcoin-wallet.js "$(openssl rand -base64 32)"
```

## Global Setup

You can install this command gloablly

```bash
$ npm install -g .
```

Then run the command from anywhere

```bash
$ bitcoin-wallet
```

## Resources

- [How Bitcoin Wallets Work](https://www.youtube.com/watch?v=GSTiKjnBaes)
- [How to create Bitcoin Address](https://en.bitcoin.it/wiki/Technical_background_of_version_1_Bitcoin_addresses)
- [Encrypting/Descrypting crypto private keys](https://github.com/bitcoinjs/bip38)
