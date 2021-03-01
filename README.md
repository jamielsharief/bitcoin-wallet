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

If you prefer to use your own seed, you can pass the data which must be at least 32 characters long.

```bash
$ node bitcoin-wallet.js 'AULKGe8sM6hE1PDBRcjR9ZezERW3R7Oh`
```

You can also pass random bytes directly

```bash
$ node bitcoin-wallet.js "$(head -c 32 </dev/urandom)"
```

## Resources

- [How Bitcoin Wallets Work](https://www.youtube.com/watch?v=GSTiKjnBaes)
- [Encrypting/Descrypting crypto private keys](https://github.com/bitcoinjs/bip38)
