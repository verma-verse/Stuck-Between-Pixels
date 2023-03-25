import { useState } from "react";
import { ethers } from 'ethers';

const MetaMask = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [defaultAccount, setDefaultAccount] = useState(null);
  const [userBalance, setUserBalance] = useState(null);

  const connectWallet = () => {
    if (window.ethereum) {
      window.ethereum.request({ method: 'eth_requestAccounts' })
        .then(result => {
          accountChanged(result[0]);
        })
        .catch(error => {
          if (error.code === 4001) {
            setErrorMessage("Connect request rejected.");
          } else {
            setErrorMessage(error.message);
          }
        })
    } else {
      setErrorMessage("Please install MetaMask.");
    }
  }
  

  const accountChanged = (accountName) => {
    setDefaultAccount(accountName);
    getUserBalance(accountName);
  }

  const getUserBalance = (accountAddress) => {
    window.ethereum.request({ method: 'eth_getBalance', params: [String(accountAddress), "latest"] })
      .then(balance => {
        setUserBalance(ethers.utils.formatEther(balance));
      })
  }

  return (
    <div className="w-full min-h-screen bg-center bg-no-repeat bg-cover" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80')" }}>
      <div className="max-w-5xl px-4 pt-20 mx-auto sm:px-6 lg:px-8">
        <h1 className="mb-6 text-3xl font-bold text-center text-white sm:text-4xl lg:text-5xl">Meta Connect</h1>
        <div className="p-6 bg-white rounded-lg shadow-lg">
          <button className="w-full px-4 py-2 mb-4 font-bold text-white bg-blue-500 rounded-md hover:bg-blue-700" onClick={connectWallet}>
            Connect Wallet
          </button>
          {defaultAccount &&
            <div className="mt-4">
              <p className="mb-2 font-medium text-gray-700">Address:</p>
              <p className="px-3 py-2 text-gray-800 bg-gray-100 rounded-lg">{defaultAccount}</p>
              {userBalance &&
                <div className="mt-4">
                  <p className="mb-2 font-medium text-gray-700">Balance:</p>
                  <p className="px-3 py-2 text-gray-800 bg-gray-100 rounded-lg">{userBalance} ETH</p>
                </div>
              }
            </div>
          }
          {errorMessage &&
            <p className="mt-4 text-red-500">{errorMessage}</p>
          }
        </div>
      </div>
    </div>
  )
}

export default MetaMask;
