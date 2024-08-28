import React, { useState } from 'react';
import Web3 from 'web3';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import './App.css';
import { contractABI, contractAddress } from './contractABI';

function App() {
  const [account, setAccount] = useState('');
  const [web3, setWeb3] = useState(null);
  const [contract, setContract] = useState(null);
  const [learnMode, setLearnMode] = useState(false);

  const eduChainId = '0xA045C'; // 656476 in hexadecimal

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const web3Instance = new Web3(window.ethereum);
        setWeb3(web3Instance);
        await checkNetwork(web3Instance);
        const contractInstance = new web3Instance.eth.Contract(contractABI, contractAddress);
        setContract(contractInstance);
        setAccount(accounts[0]);
      } catch (error) {
        console.error('User denied account access or error occurred', error);
      }
    } else {
      console.error('No Ethereum provider detected');
      alert('Please install MetaMask!');
    }
  };

  const disconnectWallet = () => {
    setAccount('');
    setWeb3(null);
    setContract(null);
    alert('Wallet disconnected');
  };

  const checkNetwork = async (web3Instance) => {
    const chainId = await web3Instance.eth.getChainId();
    if (chainId !== parseInt(eduChainId, 16)) {
      try {
        await window.ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: eduChainId }],
        });
        alert('Network switched to Open Campus Codex Sepolia');
      } catch (switchError) {
        if (switchError.code === 4902) {
          try {
            await window.ethereum.request({
              method: 'wallet_addEthereumChain',
              params: [{
                chainId: eduChainId,
                chainName: 'Open Campus Codex Sepolia',
                rpcUrls: ['https://open-campus-codex-sepolia.drpc.org'],
                blockExplorerUrls: ['https://opencampus-codex.blockscout.com'],
                nativeCurrency: {
                  name: 'EduToken',
                  symbol: 'EDU',
                  decimals: 18,
                },
              }],
            });
            alert('Network added and switched to Open Campus Codex Sepolia');
          } catch (addError) {
            console.error('Failed to add network', addError);
            alert('Failed to add the Open Campus Codex Sepolia network. Please try manually adding it.');
          }
        } else {
          console.error('Failed to switch to the network', switchError);
          alert('Failed to switch to the Open Campus Codex Sepolia network. Please switch manually.');
        }
      }
    }
  };

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <div className="logo-container">
            <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="EduTransfer Logo" className="logo" />
            <h1>EduTransfer DApp</h1>
          </div>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <div className="learn-mode-toggle">
              <label className="learn-mode-label">Learn Mode</label>
              <input 
                type="checkbox" 
                id="learnModeSwitch" 
                checked={learnMode} 
                onChange={() => setLearnMode(!learnMode)} 
              />
              <label className="switch" htmlFor="learnModeSwitch"></label>
            </div>
          </nav>
          {account ? (
            <div>
              <p>Connected account: {account}</p>
              <button className="disconnect-button" onClick={disconnectWallet}>Disconnect Wallet</button>
            </div>
          ) : (
            <button className="connect-button" onClick={connectWallet}>Connect Wallet</button>
          )}
        </header>
        <Routes>
          <Route 
            exact 
            path="/" 
            element={
              <Home 
                web3={web3} 
                account={account} 
                contract={contract} 
                contractAddress={contractAddress} 
                contractABI={contractABI}
                learnMode={learnMode} 
              />} 
          />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
