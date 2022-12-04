require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give narrow frown ski strike rival noble assume guess civil army gentle'; 
let testAccounts = [
"0x53c747609d4dd14dd7dcdcd3dcf161973d7bb47e9fb5637a394ca64ca0404718",
"0xedc2b21385a2a126e73b7752043c3cefa6200c1ae7f0d32e310ec44cae5d48cd",
"0x2d9f6e7c6f436b1122aea616ad21cf67d17a3c529a5cd96b58fc5b981d42b60d",
"0xad9b93a8313ce44f4faf29ecbda0c6442c335c8a5ca144bf0b9b2d1b00a488d2",
"0x525ac279becae24761e4ec4b0a73b268f4082485d6d57c8203a5aef03af5f009",
"0x371bf4289dfb5f20a213374bdbf023d956ee6cfdcce2b92dc42d26d90c65a39f",
"0x971f39fa982e7c98630806afc2239fb7bdc55f73a15ddbe2805dd71d611cde62",
"0xf7bbcfe139f8a23f7f30554a46d098bd835e7e45135d49d1969cb3c736564b4d",
"0x7e75e9ba97cd81521e8883a621b16cf276d4d14f644dbaf7b7446c636f2edbe3",
"0x30080a383cdb986a3e35ef4ecd3e2888f7de0409e89aeed3b824442de50c2e77"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

