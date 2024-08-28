// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// Author: Konstantinos Andreou
//
// The EduTransfer contract aims to provide a secure and educational platform for beginners
// in the crypto space to learn how to transfer crypto safely between parties. It incorporates
// additional authentication mechanisms to prevent the loss of funds due to mistyped wallet addresses.
// Sender can claim back his crypto if the receiver dont claim it!


import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract EduTransfer is ReentrancyGuard {
    struct Transfer {
        address payable sender;
        address payable receiver;
        uint256 amount;
        bool claimed;
    }

    mapping(address => Transfer) private transfers;

    event EduSent(address indexed sender, address indexed receiver, uint256 amount);
    event EduClaimed(address indexed sender, address indexed receiver, uint256 amount);
    event EduClaimedBack(address indexed sender, uint256 amount);

    modifier onlySender(address senderAddr) {
        require(msg.sender == transfers[senderAddr].sender, "Only sender can call this function");
        _;
    }

    modifier notClaimed(address senderAddr) {
        require(!transfers[senderAddr].claimed, "Transfer has already been claimed");
        _;
    }

    // Edu functions
    function sendEdu(address payable receiver) external payable nonReentrant {
        require(msg.value > 0, "Must send a positive amount");
        require(transfers[msg.sender].amount == 0, "Existing transfer must be claimed first");

        transfers[msg.sender] = Transfer({
            sender: payable(msg.sender),
            receiver: receiver,
            amount: msg.value,
            claimed: false
        });

        emit EduSent(msg.sender, receiver, msg.value);
    }

    function claimEdu(address senderAddr) external nonReentrant notClaimed(senderAddr) {
        require(msg.sender == transfers[senderAddr].receiver, "You are not the intended receiver");

        transfers[senderAddr].claimed = true;
        uint256 amount = transfers[senderAddr].amount;

        // Reset the transfer data
        transfers[senderAddr] = Transfer({
            sender: payable(address(0)),
            receiver: payable(address(0)),
            amount: 0,
            claimed: true
        });

        payable(msg.sender).transfer(amount);

        emit EduClaimed(transfers[senderAddr].sender, msg.sender, amount);
    }

    function claimBackEdu() external nonReentrant onlySender(msg.sender) notClaimed(msg.sender) {
        uint256 amount = transfers[msg.sender].amount;

        // Reset the transfer data
        transfers[msg.sender] = Transfer({
            sender: payable(address(0)),
            receiver: payable(address(0)),
            amount: 0,
            claimed: true
        });

        payable(msg.sender).transfer(amount);

        emit EduClaimedBack(msg.sender, amount);
    }

    // Getter functions
    function getEduTransfer(address senderAddr) external view returns (address, address, uint256, bool) {
        Transfer memory transfer = transfers[senderAddr];
        return (transfer.sender, transfer.receiver, transfer.amount, transfer.claimed);
    }
}