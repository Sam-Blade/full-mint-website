import React from 'react';

const NavBar = ({accounts, setAccounts}) => {
    const isConnected = Boolean(accounts[0]);

    async function connectAccount() {
        if (window.ethereum) {
            const accounts = await window.ethereum.request.request({
                method: "eth_requestAccounts" ,
            
            });
            setAccounts(accounts);
        }
    }

    return (
        <div>
         {/*Left Side - Social Media Icons */}

        <div>Facebook</div>
        <div>Twitter</div>
        <div>Email</div>

        {/*Right Side - Sections and Connect */}
        <div>About</div>
        <div>Mint</div>
        <div>Coming-Soon</div>

        {/*Connect*/}
        {isConnected ? (
            <p>Connected</p>
        ) : (
            <button onClick={connectAccount}>Connect</button>
        )}
        </div>
    );
};