export const contractABI = [
    {
      "anonymous": false,
      "inputs": [
        { "indexed": true, "internalType": "address", "name": "sender", "type": "address" },
        { "indexed": true, "internalType": "address", "name": "receiver", "type": "address" },
        { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }
      ],
      "name": "EduClaimed",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        { "indexed": true, "internalType": "address", "name": "sender", "type": "address" },
        { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }
      ],
      "name": "EduClaimedBack",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        { "indexed": true, "internalType": "address", "name": "sender", "type": "address" },
        { "indexed": true, "internalType": "address", "name": "receiver", "type": "address" },
        { "indexed": false, "internalType": "uint256", "name": "amount", "type": "uint256" }
      ],
      "name": "EduSent",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "claimBackEdu",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [{ "internalType": "address", "name": "senderAddr", "type": "address" }],
      "name": "claimEdu",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [{ "internalType": "address", "name": "senderAddr", "type": "address" }],
      "name": "getEduTransfer",
      "outputs": [
        { "internalType": "address", "name": "", "type": "address" },
        { "internalType": "address", "name": "", "type": "address" },
        { "internalType": "uint256", "name": "", "type": "uint256" },
        { "internalType": "bool", "name": "", "type": "bool" }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [{ "internalType": "address payable", "name": "receiver", "type": "address" }],
      "name": "sendEdu",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    }
  ];
  
  export const contractAddress = "0xFEc667D65b61Edc7f664766B50D3aC32420718Eb"; // Replace with your contract address
  