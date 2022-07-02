import React, { useEffect, useState } from 'react'
import Web3 from "web3";
import { loadContract } from '../utils/load-contract';

export default function Metamask() {
    const [balance, setBalance] = useState(null);
    const [account, setAccount] = useState(null)
    const [web3Api, setWeb3Api] = useState({
        Provider: null,
        web3Api: null,
        contract: null
    })
    useEffect(() => {
        const loadProvider = async () => {
            let Provider;
            // const contract = await loadContract("Funder", Provider)
            if (window.ethereum) {
                Provider = window.ethereum;
                try {
                    Provider.enable();
                }
                catch {
                    console.error("please install metamask")
                }
            }
            else if (window.web3) {
                Provider = window.web3.currentProvider;
            }

            else if (!process.env.production) {
                Provider = new Web3.providers.HttpProvider("http://localhost:7545")
            }
            setWeb3Api({
                web3: new Web3(Provider),
                Provider,
                // contract
            })
        }
        loadProvider();
    }, [])


    useEffect(() => {
        const getAccount = async () => {
            let accounts = await web3Api.web3.eth.getAccounts()
            setAccount(accounts[0])
        }
        web3Api.web3 && getAccount();
    }, [web3Api.web3])

    console.log(web3Api);


    // useEffect(() => {
    //     const loadBalance = async () => {
    //         const { contract, web3 } = web3Api;
    //         const balance = await web3Api.web3.eth.getBalance(contract.address);
    //         setBalance(web3.utils.fromWei(balance, "Ether"));
    //     }
    //     web3Api && loadContract();
    // }, [web3Api])

    return (

        <div className="container mb-3">
            <h3> Account Balance :{balance}ETH </h3>
            <p> Account : <b>{account ? account : "Not Connected"}</b> </p>
            <button type="button" className="btn-btn-primary" onClick={
                async () => {
                    let accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
                    console.log(accounts)

                }
            }> connect Metamask</button>
            <button className="mx-3" > Transfer ETH</button>
            <button>WithDraw</button>
        </div >

    )
}
