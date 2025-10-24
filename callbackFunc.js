function showdata(name, amt) {
    console.log('Hello' + name + '\n Your are saving' + amt);
}

functiongetData(Callback) {
    const prompt = require('prompt-sync')();
    var name = prompt("Welcome!\n what is your name? ");
    var amt = prompt ("Enter the amount you wish to save.");
    callback(name,amt);         //callback === showData
}

getData(showData);