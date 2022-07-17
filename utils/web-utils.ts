/*
 * @Description: 
 * @Version: 0.0.1
 * @Autor: linteng
 * @Date: 2022-04-23 17:36:39
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-07-17 18:16:14
 */
import Web3 from "web3";
import abi from './eth.json';
import greeter from '@artifacts/Greeter.json'

class Web3Utils {
  web3: any;
  accouts: any;
  constructor(){
    this._init()  
  }
  async _init() {
    await this.connect();
  }
  async connect() {
    if(typeof window !== "undefined") {
      if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        // const web3 = new Web3("http://localhost:7545");
        // const web3 = new Web3("https://bsc-dataseed.binance.org/");
        // const web3 = new Web3("https://ropsten.etherscan.io/");
        // var web3 = new Web3(Web3.givenProvider || 'ttp://localhost:7545');
  
        const accouts = await window.ethereum.request({ method: 'eth_requestAccounts' })
        try {
          this.web3 = web3;
          this.accouts = accouts;
          return { code: 0, data: {web3, accouts} };
        } catch (error) {
          return { code: 500, error };
        }
      } else if (window.web3) {
        // Use Mist/MetaMask's provider.
        return { code: 0, data: {web3: window.web3} };
      }
    }
  }
  async getBalance(currentAccount: string){
    const balance = await this.web3.eth.getBalance(currentAccount)
    return this.web3.utils.fromWei(balance, 'ether');
  }
  async getContract() {
    const networkId: 5777 = await this.web3.eth.net.getId();
    const myContract = new this.web3.eth.Contract(greeter.abi, greeter.networks[networkId].address);
    console.log({myContract})
    return myContract
  }
  async getAccounts() {
    return await this.web3.eth.getAccounts()
  }

  // async getPastEvents(){
  //   const past = await myContract.getPastEvents('Transfer', {
  //     filter: {_from: currentAccount},
  //     // fromBlock: 230813,
  //     // toBlock: 'latest'
  //   });
  // }

}

export default new Web3Utils();
