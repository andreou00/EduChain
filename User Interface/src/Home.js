import React, { useState } from 'react';
import './Home.css'; // Assuming you're using Home.css for specific styles

function Home({ web3, account, contract, contractAddress, contractABI, learnMode }) {
  const [receiver, setReceiver] = useState('');
  const [amount, setAmount] = useState('');
  const [senderAddr, setSenderAddr] = useState('');
  const [activeTutorial, setActiveTutorial] = useState('');

  const handleSendEdu = async () => {
    try {
      await contract.methods.sendEdu(receiver).send({ from: account, value: web3.utils.toWei(amount, 'ether') });
      alert('Edu sent successfully!');
    } catch (error) {
      console.error(error);
      alert('Failed to send Edu');
    }
  };

  const handleClaimEdu = async () => {
    try {
      await contract.methods.claimEdu(senderAddr).send({ from: account });
      alert('Edu claimed successfully!');
    } catch (error) {
      console.error(error);
      alert('Failed to claim Edu');
    }
  };

  const handleClaimBackEdu = async () => {
    try {
      await contract.methods.claimBackEdu().send({ from: account });
      alert('Edu claimed back successfully!');
    } catch (error) {
      console.error(error);
      alert('Failed to claim back Edu');
    }
  };

  const renderTutorial = () => {
    switch (activeTutorial) {
      case 'sendEdu':
        return (
          <div className="tutorial">
            <h3>How to Send Edu</h3>
            <p>Sending Edu tokens involves transferring value across the blockchain. This is an essential skill for anyone using cryptocurrencies. Here’s a step-by-step guide:</p>
            
            <h4>Step 1: Understand Blockchain Networks</h4>
            <p>
              Blockchain networks are like different highways. When you send Edu, you need to make sure you’re on the right highway (EduChain). 
              If you use the wrong network, your transaction could get lost.
            </p>
            <img src={`${process.env.PUBLIC_URL}/images/blockchain_networks.jpg`} alt="Blockchain Networks" className="tutorial-image" />
  
            <h4>Step 2: Double-Check the Receiver’s Address</h4>
            <p>
              The receiver’s address is a unique identifier for the wallet you are sending Edu to. It’s a long string of letters and numbers that acts like a digital mailbox. 
              If even one character is wrong, your Edu might end up in the wrong mailbox. 
              You can find the receiver’s address in their wallet app—ask them to copy and share it with you directly to avoid errors.
            </p>
            <img src={`${process.env.PUBLIC_URL}/images/check_address.jpg`} alt="Check Receiver Address" className="tutorial-image" />
            <p>
              After verifying the receiver's address, type the amount of Edu you want to send and click "Send Edu."
            </p>  
            <h4>Step 3: Account for Transaction Fees</h4>
            <p>
              Every transaction on the blockchain costs a small fee, paid in Edu. This fee compensates the network validators for processing your transaction. 
              Make sure you have a bit more Edu than you plan to send to cover this fee.
            </p>
            <img src={`${process.env.PUBLIC_URL}/images/transaction_fee.png`} alt="Transaction Fee" className="tutorial-image" />
  
            <h4>Step 4: Confirm and Send</h4>
            <p>
              Once everything is correct, click “Send Edu”. Your transaction will be broadcasted to the network, and in a few moments, the receiver's address will be registered on the blockchain as the recipient of the Edu tokens. However, unlike typical transactions where the tokens automatically appear in the receiver's wallet, in this dApp, the receiver must manually claim the tokens to complete the transfer.
            </p>
          </div>
        );
      case 'claimEdu':
        return (
          <div className="tutorial">
            <h3>How to Claim Edu</h3>
            <p>
              Claiming Edu means accepting the tokens that someone else has sent to you. Normally in cryptocurrency transactions, 
              the funds would automatically appear in your wallet. However, in this dApp, you need to manually claim the funds using the sender’s address.
            </p>
  
            <h4>Step 1: Obtain the Sender’s Address</h4>
            <p>
              You’ll need the address of the person who sent you the Edu. This is unusual in most crypto transactions, where funds automatically appear in your balance, 
              but it’s necessary in this dApp to ensure extra security and to allow for the "claim back" feature.
            </p>
  
            <h4>Step 2: Verify the Transaction</h4>
            <p>
              Enter the sender’s address into the provided field and click “Claim Edu”. The dApp will verify that you are the intended recipient of the funds.
            </p>
  
            <h4>Step 3: Check Your Balance</h4>
            <p>
              After claiming, the Edu tokens should appear in your wallet. You can view your balance directly in your wallet app. 
              This process mimics real-world scenarios where claims might be needed, like in escrow services.
            </p>
          </div>
        );
      case 'claimBackEdu':
        return (
          <div className="tutorial">
            <h3>Failed to Send Edu? Don’t Worry, Your Crypto Is Safe!</h3>
            <p>
              If your transaction didn’t go through as planned, don’t panic. This dApp allows you to claim back your Edu tokens safely. 
              Let’s understand why the transaction might have failed and how to claim your tokens back.
            </p>
            <img src={`${process.env.PUBLIC_URL}/images/claim_back.png`} alt="Claim Back Edu" className="tutorial-image" />
  
            <h4>Step 1: Check the Receiver's Address</h4>
            <p>
              One common reason transactions fail is an incorrect receiver’s address. Double-check that you’ve entered the correct address. 
              If the address was wrong, the tokens wouldn’t reach the intended recipient, but they are still safely within the smart contract.
            </p>
  
            <h4>Step 2: Network Issues</h4>
            <p>
              Occasionally, network congestion or using the wrong network can prevent a transaction from being processed. 
              Ensure that you’re connected to EduChain and that the network is functioning smoothly.
            </p>
  
            <h4>Step 3: Claim Back Your Edu</h4>
            <p>
              If something went wrong, you can reclaim your Edu by clicking “Claim Back Edu”. This feature ensures that even if a mistake was made, 
              your funds remain secure and can be easily recovered.
            </p>
          </div>
        );
      default:
        return <p>Select an action to learn more.</p>;
    }
  };

  return (
    <main className="main-container">
      <div className="functions-container">
        <section className="card">
          <h2>Send Edu</h2>
          <input
            type="text"
            placeholder="Receiver address"
            value={receiver}
            onChange={(e) => setReceiver(e.target.value)}
          />
          <input
            type="text"
            placeholder="Amount in EDU"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <button className="action-button" onClick={handleSendEdu}>Send Edu</button>
          {learnMode && <button className="learn-button" onClick={() => setActiveTutorial('sendEdu')}>Learn How to Send</button>}
        </section>
        <section className="card">
          <h2>Claim Edu</h2>
          <input
            type="text"
            placeholder="Sender address"
            value={senderAddr}
            onChange={(e) => setSenderAddr(e.target.value)}
          />
          <button className="action-button" onClick={handleClaimEdu}>Claim Edu</button>
          {learnMode && <button className="learn-button" onClick={() => setActiveTutorial('claimEdu')}>Learn How to Claim</button>}
        </section>
        <section className="card">
          <h2>Claim Back Edu</h2>    
          <button className="action-button" onClick={handleClaimBackEdu}>Claim Back Edu</button>
          {learnMode && <button className="learn-button" onClick={() => setActiveTutorial('claimBackEdu')}>Learn Why It Failed</button>}
        </section>
      </div>

      {learnMode && (
        <section className="tutorial-section">
          {renderTutorial()}
        </section>
      )}
    </main>
  );  
}

export default Home;
