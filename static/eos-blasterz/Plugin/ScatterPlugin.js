ScatterJS.plugins(new ScatterEOS());

var network_jungle = ScatterJS.Network.fromJson({ //정글넷
    blockchain:'eos',
    chainId:'e70aaab8997e1dfce58fbfac80cbbb8fecec7b99cf982a9444273cbc64c41473',
    host:'jungle2.cryptolions.io',
    port:80,
    protocol:'http'
});

var network_main = ScatterJS.Network.fromJson({ //메인넷
    blockchain:'eos',
    chainId:'aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906',
    host:'nodes.get-scatter.com',
    port:443,
    protocol:'https'
});

var network = network_main;

function RequestAccount(isTestMode)
{
    network = isTestMode ? network_jungle : network_main;
    ScatterJS.connect('EOS Blasterz').then(connected => {
        if(!connected){
            console.error('SCATTER NOT CONNECTED');
            gameInstance.SendMessage('NativeMgr', 'ShowNeedScatter', '');
            return false;
        }
        const scatter = ScatterJS.scatter;
        const requiredFields = { accounts:[network] };
        scatter.getIdentity(requiredFields).then(() => {

            // Always use the accounts you got back from Scatter. Never hardcode them even if you are prompting
            // the user for their account name beforehand. They could still give you a different account.
            const account = scatter.identity.accounts.find(x => x.blockchain === 'eos');
            console.log(account.name);

            gameInstance.SendMessage('NativeMgr', 'SetWalletType', 'SCATTER');
            gameInstance.SendMessage('NativeMgr', 'GetAccountInfo', account.name);

        }).catch(error => {
            // The user rejected this request, or doesn't have the appropriate requirements.
            console.error(error);
        });
    });
}

function RequestTransfer(memo, tokenAmount, to, walletAccount)
{
    ScatterJS.connect('EOS Blasterz').then(connected => {
        if(!connected){
            console.error('SCATTER NOT CONNECTED');
            gameInstance.SendMessage('NativeMgr', 'ShowNeedScatter', '');
            return false;
        }
        const scatter = ScatterJS.scatter;
        const requiredFields = { accounts:[network] };
        scatter.getIdentity(requiredFields).then(() => {

            // Always use the accounts you got back from Scatter. Never hardcode them even if you are prompting
            // the user for their account name beforehand. They could still give you a different account.
            const account = scatter.identity.accounts.find(x => x.blockchain === 'eos');
            if(account.name != walletAccount){
                gameInstance.SendMessage('NativeMgr', 'ShowNeedRestart', '');
                return false;
            }
            
            // // You can pass in any additional options you want into the eosjs reference.
            const eosOptions = { expireInSeconds:60 };

            console.log(tokenAmount);
            console.log(memo);

            // // Get a proxy reference to eosjs which you can use to sign transactions with a user's Scatter.
            const eos = scatter.eos(network, Eos, eosOptions);

            // // ----------------------------
            // // Now that we have an identity,
            // // an EOSIO account, and a reference
            // // to an eosjs object we can send a transaction.
            // // ----------------------------

            // // Never assume the account's permission/authority. Always take it from the returned account.
            const transactionOptions = { authorization:[`${account.name}@${account.authority}`] };

            eos.transfer(account.name, to, tokenAmount, memo, transactionOptions).then(trx => {
                // That's it!
                console.log(`Transaction ID: ${trx.transaction_id}`);
                gameInstance.SendMessage('NativeMgr', 'TransferCallBack', 'success');
            }).catch(error => {
                console.error(error);
                gameInstance.SendMessage('NativeMgr', 'TransferCallBack', 'fail');
            });

        }).catch(error => {
            // The user rejected this request, or doesn't have the appropriate requirements.
            console.error(error);
        });
    });
}


window.onunload = function()
{
    window.ScatterJS = null;
}


