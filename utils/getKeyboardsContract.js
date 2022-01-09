import { ethers } from "ethers";

import abi from "../utils/Keyboards.json"

const contractAddress = '0xD24365a2Fb5d8Ef3fb8b5933609C0544123e3D49'
const contractABI = abi.abi;

export default function getKeyboardsContract(ethereum) {
  if(ethereum) {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    return new ethers.Contract(contractAddress, contractABI, signer);
  } else {
    return undefined;
  }
}
