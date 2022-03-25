const algosdk = require('algosdk');



async function deploymarketplace() {

    try {
        const senderSeed = "garage bright wisdom old fan mesh pull acquire clever pear era flight horror memory nerve ten hospital scorpion cricket erosion leader better hockey ability throw";



        // Connect your client
        const algodToken = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';
        const algodServer = 'http://localhost';
        const algodPort = 4001;
        let algodClient = new algosdk.Algodv2(algodToken, algodServer, algodPort);
        let params = await algodClient.getTransactionParams().do();

        let senderAccount = algosdk.mnemonicToSecretKey(senderSeed);

        let receiver = "ZCN7MOTRJNJHA6DS67SR742WKXWZM2J6GBVVEFOENKE33XE4ZMFM2PSOAQ"

        let sender = senderAccount.addr;

        let closeRemainderTo = undefined;
        let note = undefined;

        let txnPayment = algosdk.makePaymentTxnWithSuggestedParams(sender, receiver, 1, closeRemainderTo, note, params);

     	let signedTxn = txnPayment.signTxn(senderAccount.sk);
   
   
        // Submit the transaction
        let tx = (await algodClient.sendRawTransaction(signedTxn).do());

        let confirmedTxn = await algosdk.waitForConfirmation(algodClient, tx.txId, 4);
        //Get the completed Transaction
        console.log("Transaction " + tx.txId + " confirmed in round " + confirmedTxn["confirmed-round"]);
 
    }
    catch (err) {
        console.log("err", err);
    }
    process.exit();
};

deploymarketplace();

