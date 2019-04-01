$( document ).ready(function() {
    // Smart contract variables
    const abi = '[{"constant":false,"inputs":[{"name":"_machineID","type":"string"},{"name":"_timestamp","type":"uint256"},{"name":"_mileage","type":"uint256"}],"name":"addEntry","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_machineID","type":"string"},{"indexed":true,"name":"_timestamp","type":"uint256"},{"indexed":false,"name":"_mileage","type":"uint256"}],"name":"NewMileageEntry","type":"event"},{"constant":true,"inputs":[{"name":"_machineID","type":"string"},{"name":"_index","type":"uint256"}],"name":"getEntrieOfMachine","outputs":[{"name":"timestamp","type":"uint256"},{"name":"mileage","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_machineID","type":"string"}],"name":"getLastEntrieOfMachine","outputs":[{"name":"index","type":"uint256"},{"name":"timestamp","type":"uint256"},{"name":"mileage","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}]';
    const contractAddress = '0x0985182941ac61f9d9fd50f0f7caa2c77a96e821';

    // Web 3 and smart contract instance
    const web3 = new Web3('ws://52.28.150.148:8544');
    var MileageStorage = new web3.eth.Contract(JSON.parse(abi),contractAddress);

    // Mileage variables
    var totalMileage = 0;
    var currentMileage = 0;

    // Starting value of the mileage to be counted
    const startingMileage = 130;

    // Initial token baöance
    const initialTokenBalance = 200;
    var currentTokenBalance = 200;
    var totalCost = 0;

    // Exchange Rate of Token <> EUR
    const tokenExchangeRate = 4;
    const tokenPerMileage = 1

    // Machine ID
    const machineid = "MACHINE_1";

    // Initial retrieval of current mileage from the smart contract
    MileageStorage.methods.getLastEntrieOfMachine(machineid).call()
      .then((value) => { 
       
        totalMileage = value.mileage/1000000000;
        currentMileage = totalMileage-startingMileage;
        totalCost = (tokenPerMileage*currentMileage)/tokenExchangeRate;
        currentTokenBalance = initialTokenBalance-tokenPerMileage*currentMileage;

        $('.machineid').text(machineid); 
        $('#cost_per_usage').text(tokenPerMileage);
        $('#token_per_eur').text(tokenExchangeRate);
        $('.mileage').text(parseFloat(currentMileage).toFixed(3));
        $('.token_balance').text(parseFloat(currentTokenBalance).toFixed(2)+"/"+initialTokenBalance);
        $('.eur_balance').text(parseFloat(currentTokenBalance/tokenExchangeRate).toFixed(2)+"/"+initialTokenBalance/tokenExchangeRate);
        $('.cost_usage').text(parseFloat(totalCost).toFixed(2));
      });

    // Subscription to events on the smart contracts (subscribed to new mileage entries)
    MileageStorage.events.NewMileageEntry({ fromBlock: 'latest' }, (error, event) => {
        var difference = event.returnValues._mileage/1000000000-totalMileage;
        totalMileage = event.returnValues._mileage/1000000000;
        currentMileage = currentMileage+difference;
        totalCost = totalCost + (tokenPerMileage*difference)/tokenExchangeRate;
        currentTokenBalance = currentTokenBalance-tokenPerMileage*difference;
        console.log(parseFloat(currentMileage).toFixed(3));
        $('.mileage').text(parseFloat(currentMileage).toFixed(3));
        $('.token_balance').text(parseFloat(currentTokenBalance).toFixed(2)+"/"+initialTokenBalance);
        $('.eur_balance').text(parseFloat(currentTokenBalance/tokenExchangeRate).toFixed(2)+"/"+initialTokenBalance/tokenExchangeRate);
        $('.cost_usage').text(parseFloat(totalCost).toFixed(2));
        LineChartData.push(3);
        console.log(LineChartData)

      })
  })