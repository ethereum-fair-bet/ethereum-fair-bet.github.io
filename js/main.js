function bet01() {
    var abi = [{
        "constant": false,
        "inputs": [],
        "name": "withdrawRefund",
        "outputs": [],
        "payable": false,
        "type": "function"
    }, {
        "constant": false,
        "inputs": [],
        "name": "bet",
        "outputs": [],
        "payable": true,
        "type": "function"
    }, {"inputs": [], "payable": false, "type": "constructor"}];
    var contract = web3.eth.contract(abi).at("0x4f649bb223b479184056537a0cd532a0fe835306");
    var transaction = {value: web3.toWei(1, 'ether')};
    console.log(contract.bet(transaction, function (transactionHash, err) {
        console.log(err);
        if (!err)
            console.log(transactionHash);
    }));
    alert('hello!');
}
