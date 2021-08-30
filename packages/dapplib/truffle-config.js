require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope kite bone tooth tissue return noble social hope arctic metal genre'; 
let testAccounts = [
"0x3ba2d19530258a3a0620ab6bda027f48549783f176fbc94bb7300c25e9296a60",
"0xce94ff6ad3aa37bf6f8afa984294948c1967b26b848366362179fd18186d4c6d",
"0xa34b890350ff6e438709d6b14f9eb3896d6d4a17339a574ff23969dae9f29d95",
"0x0bcf439bf71774f6e2a75b903c60a833cbccfb235d991eed9702e23a947cd745",
"0x537ab1c8f95c53a162f1c2b816a1042aea18e9b25965e7ae182d3c89235d584e",
"0x1f7e5ac10d53ca40cc171b695e81ca557bba6eeb88222c9d5154a5a1a39fa181",
"0xaa888a43d4a57293a613708152240409fd8920efe06609338abe5a23ad5b7d8c",
"0xb7b6c97aac5c544c0b6051e73df17db7f642106e86c9267d7e97964e4ec4c988",
"0xd8abc3fad0b85ccc4e07506afcdca0d77a50dc15ec3a531c23c5dac8dcb51b89",
"0x670c1883936a37b184517d6fba3b99a154bd17be0837dfc9a56d5b1c1e50709f"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


