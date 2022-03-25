const algosdk = require('algosdk');


async function deploymarketplace() {

    try {
        

        // Connect your client
        const algodToken = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';
        const algodServer = 'http://localhost';
        const algodPort = 4001;
        let algodClient = new algosdk.Algodv2(algodToken, algodServer, algodPort);
        let params = await algodClient.getTransactionParams().do();


 
    }
    catch (err) {
        console.log("err", err);
    }
    process.exit();
};

deploymarketplace();

