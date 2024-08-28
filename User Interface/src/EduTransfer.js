import { ethers } from 'ethers';
import { contractABI, contractAddress } from './contractABI';

export const getEduTransfer = async (provider, senderAddr) => {
  const contract = new ethers.Contract(contractAddress, contractABI, provider);
  return await contract.getEduTransfer(senderAddr);
};

export const sendEdu = async (signer, receiver, amount) => {
  const contract = new ethers.Contract(contractAddress, contractABI, signer);
  const tx = await contract.sendEdu(receiver, { value: ethers.utils.parseEther(amount) });
  await tx.wait();
};

export const claimEdu = async (signer, senderAddr) => {
  const contract = new ethers.Contract(contractAddress, contractABI, signer);
  const tx = await contract.claimEdu(senderAddr);
  await tx.wait();
};

export const claimBackEdu = async (signer) => {
  const contract = new ethers.Contract(contractAddress, contractABI, signer);
  const tx = await contract.claimBackEdu();
  await tx.wait();
};
