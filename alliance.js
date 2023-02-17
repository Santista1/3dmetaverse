var feather = document.createElement('script');
feather.src = 'https://unpkg.com/@terra-money/feather.js/dist/bundle.js';
document.head.appendChild(feather);

var terra = document.createElement('script');
terra.src = 'https://unpkg.com/@terra-money/terra.js/dist/bundle.js';
document.head.appendChild(terra);

terra.onload = function () { (async () => {

  const gasPrices = await( await fetch("https://columbus-api.terra.dev/gas-prices", {redirect: "follow"} ) ).json();
  const gasPricesCoins = new Terra.Coins(gasPrices);
  const classic_lcd = new Terra.LCDClient({
    URL: "https://columbus-lcd.terra.dev/",
    chainID: "columbus-5",
    gasPrices: gasPricesCoins,
    gasAdjustment: "1.5",
    gas: 10000000,
    isClassic: true
  });

  const classic_validators = await classic_lcd.staking.validators({});

  var classic_validators_list = classic_validators[0];
  var validators_next_key = classic_validators[1].next_key

  while (validators_next_key) {
    const classic_validators_next = await classic_lcd.staking.validators(params = {'pagination.key': validators_next_key});
    classic_validators_list = classic_validators_list.concat(classic_validators_next[0]);
    validators_next_key = classic_validators_next[1].next_key
  };

  classic_validators_list = classic_validators_list.filter(function( obj ) {
    return obj.status == 'BOND_STATUS_BONDED';
  });


    classic_validators_list.sort(function(a, b) { return b.tokens.toString() - a.tokens.toString(); });
      console.log(classic_validators_list);

      var classic_validators_moniker=[];
      for(var i = 0; i < classic_validators_list.length; i++ ){ classic_validators_moniker.push( classic_validators_list[i].description.moniker ) };

      console.log(classic_validators_moniker);

})()};

//

//
//   var classic_validators_tokens=[];
//   for(var i = 0; i < classic_validators[0].length; i++ ){ classic_validators_tokens.push( classic_validators[0][i].tokens.toString() ) };
//
//   console.log(classic_validators_tokens);
//
// console.log( classic_validators_moniker );

feather.onload = function () { (async () => {


  // //Terra_______________________________________________________________________
  //
  // const terra_lcd = Feather.LCDClient.fromDefaultConfig('testnet');
  // const [terraBalance] = await terra_lcd.bank.balance( 'terra1thzch6f0aalccxa5xjwpntmlplzmxd7u34hjwg' );
  // console.log(terraBalance.toData()[0]);
  //
  // const terra_validators = await terra_lcd.staking.validators('pisco-1');
  // console.log(terra_validators);
  //
  // //Ordos_______________________________________________________________________
  //
  // const ordos_lcd = new Feather.LCDClient({ 'ordos-1': { chainID: 'ordos-1', lcd: 'https://ordos.terra.dev:1317', prefix: 'ordos' } });
  // const [ordosBalance] = await ordos_lcd.bank.balance( 'ordos1hazhfzdeswre7k0shyzw7yp8a4nrpgptgzwgsq' );
  // console.log(ordosBalance.toData()[0]);
  //
  // const ordos_validators = await ordos_lcd.staking.validators('ordos-1');
  // console.log(ordos_validators);
  //
  // const ordos_signingInfos = await ordos_lcd.slashing.signingInfos('ordos-1');
  // console.log(ordos_signingInfos);

})()};
