import React from 'react';

function About() {
  return (
    <div className="about">
      <h2>Welcome to EduTransfer DApp</h2>
      <p>
      EduTransfer is a user-friendly decentralized application (DApp) created specifically for those new to cryptocurrency. If you’re new to cryptocurrency, or if the idea of sending crypto makes you feel a bit uneasy, this DApp is for you. Our mission is to make cryptocurrency transactions accessible, safe, and stress-free by providing an educational platform that guides you through the process step-by-step.
      </p>
      
      <h3>Purpose of EduTransfer</h3>
      <p>
        The primary purpose of EduTransfer is to teach users how to securely send and receive Edu tokens (EDU) on the EduChain blockchain. We understand that sending cryptocurrency can be daunting, especially if you’re worried about making a mistake that could result in lost funds. That’s why EduTransfer includes features to ensure you can send Edu with confidence. If something goes wrong, our smart contract allows you to claim back your tokens, so your funds are never lost.
      </p>

      <h3>Key Features</h3>
      <ul>
        <li><strong>Send Edu:</strong> Learn how to send Edu tokens to any wallet address on the EduChain. We guide you through every step, ensuring that you understand the importance of using the correct network and double-checking addresses.</li>
        <li><strong>Claim Edu:</strong> In a typical cryptocurrency transaction, funds automatically appear in the receiver’s balance. However, EduTransfer uses a smart contract where the receiver needs to claim their tokens manually. This extra step is a safety feature and a learning opportunity, showing you how to interact with smart contracts.</li>
        <li><strong>Claim Back Edu:</strong> If your transaction didn’t go through as planned, don’t worry—your Edu is safe. Our smart contract allows you to claim back your tokens, offering peace of mind and a second chance to get it right.</li>
      </ul>

      <h3>Educational Mode</h3>
      <p>
        EduTransfer includes a unique "Learn Mode" designed to educate users about the blockchain and cryptocurrency transactions. When Learn Mode is enabled, additional tutorials and guidance appear for each function. You’ll learn about:
      </p>
      <ul>
        <li><strong>Blockchain Basics:</strong> What blockchain networks are and why choosing the correct network is critical.</li>
        <li><strong>Transaction Security:</strong> How to ensure that you’re sending to the right address and what to do if something goes wrong.</li>
        <li><strong>Using Smart Contracts:</strong> Understand how smart contracts work and how they ensure the security and transparency of your transactions.</li>
      </ul>

      <h3>Smart Contract Information</h3>
      <p>
        The heart of EduTransfer is a robust smart contract that manages all transactions. This contract is designed to handle multiple transactions simultaneously, storing all relevant details such as sender and receiver addresses, the amount of Edu transferred, and the transaction status. This ensures transparency, security, and the ability to track and claim back your tokens if needed.
      </p>
      <p>
        Additionally, the smart contract is protected by a feature known as <strong>ReentrancyGuard</strong>. This is a security mechanism that helps prevent reentrancy attacks, where a malicious user might try to exploit the contract by making recursive calls before the initial transaction is completed. By incorporating ReentrancyGuard, we ensure that your transactions are processed safely and securely, protecting your Edu tokens from potential threats.
      </p>
      <p>
        You can view the smart contract on the EduChain blockchain explorer: <a href="https://opencampus-codex.blockscout.com/address/0xFEc667D65b61Edc7f664766B50D3aC32420718Eb" target="_blank" rel="noopener noreferrer">EduTransfer Smart Contract</a>.
      </p>

      <h3>Who We Are</h3>
      <p>
        EduTransfer was created by Konstantinos Andreou, a passionate blockchain enthusiast dedicated to making cryptocurrency accessible to everyone. By combining educational resources with practical tools, EduTransfer aims to empower users to explore the world of crypto with confidence.
      </p>

      <h3>Get in Touch</h3>
      <p>
        We’re always here to help! If you have any questions, feedback, or just want to learn more about EduTransfer, feel free to reach out:
      </p>
      <p>LinkedIn: <a href="https://www.linkedin.com/in/andreou00/" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/andreou00/</a></p>
      <p>Telegram: <a href="https://t.me/andreou00" target="_blank" rel="noopener noreferrer">https://t.me/andreou00</a></p>
    </div>
  );
}

export default About;
