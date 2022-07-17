// /*
//  * @Description: 
//  * @Version: 0.0.1
//  * @Autor: linteng
//  * @Date: 2022-04-22 23:43:47
//  * @LastEditors: Please set LastEditors
//  * @LastEditTime: 2022-04-22 23:43:48
//  */
// /*
//  * @Description: 
//  * @Version: 0.0.1
//  * @Autor: linteng
//  * @Date: 2022-04-17 20:06:05
//  * @LastEditors: Please set LastEditors
//  * @LastEditTime: 2022-04-20 23:45:24
//  */
// /*
//  * @Description: 
//  * @Version: 0.0.1
//  * @Autor: linteng
//  * @Date: 2022-04-05 18:23:37
//  * @LastEditors: Please set LastEditors
//  * @LastEditTime: 2022-04-17 20:00:44
//  */
// import Web3 from 'web3';
// import bigNumber from 'bignumber.js';
// import nft from '../artifacts/NFT.json';
// const contractAbi = [{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"guy","type":"address"},{"name":"wad","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"src","type":"address"},{"name":"dst","type":"address"},{"name":"wad","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"wad","type":"uint256"}],"name":"withdraw","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"dst","type":"address"},{"name":"wad","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[],"name":"deposit","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"payable":true,"stateMutability":"payable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":true,"name":"guy","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":true,"name":"dst","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"dst","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"src","type":"address"},{"indexed":false,"name":"wad","type":"uint256"}],"name":"Withdrawal","type":"event"}]
// // bsc合约地址
// var contractAddress = "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c";
// // var contractAddress = "0x72F2a5ac88266541C320747Fc5672C2Aa6F44881";

// // 账号
// // var currentAccount = "0x8c43488fd107cb5c9b6A4f27D9950bB96c386b59";
// var currentAccount = "0xC9Fdbf8c0457b0eA6ef694879F0A9ba82f80D35F";

// async function onClick() {
//   if (typeof web3 !== 'undefined') {
//       // web3 = new Web3(web3.currentProvider);
//       // web3 = new Web3("http://localhost:7545");
//       web3 = new Web3("https://bsc-dataseed.binance.org/");
//       // web3 = new Web3("https://mainnet.infura.io/v3/2b107a84e2644ecd82bd3fba273df1f6");
//   } else {
//       // web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));
//       web3 = new Web3(new Web3.providers.HttpProvider("https://mainnet.infura.io/yourAddress"));
//   }
  
//   const networkId = await web3.eth.net.getId();
//   // 定义合约
//   var myContract = new web3.eth.Contract(contractAbi, contractAddress);
  
//   // 查询bnb余额
//   const bnbBalance = await web3.eth.getBalance(currentAccount);

//   const past = await myContract.getPastEvents('Transfer', {
//     filter: {_from: currentAccount},
//     // fromBlock: 230813,
//     // toBlock: 'latest'
//   });
//   const block = await web3.eth.getBlock(17027612)

  
//   // 查看某个账号的代币余额
//   // const balance = await myContract.methods.balanceOf(contractAddress).call({from: currentAccount});


//   console.log({bnbBalance, past, myContract, block})
// }

// export default onClick

export {}