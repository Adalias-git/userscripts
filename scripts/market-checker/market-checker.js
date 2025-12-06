/*
  Market Checker by Adalias [https://pokefarm.com/user/Adalias]
  (attempts to) Use the API to pull current prices of many items (eg. unowned Mega Stones)
*/
 const api = new PFQAPI();
 api.ready.then(() => {...});

/* TODO Get API Key */
/* Load some sort of saved list of items lib/persistent-config looks promising*/
/* Allow a method to add an item to the list - button on Market Item Page? */
/* Check Market For List - may be 10/minute limited - may need to be once per day scheduled */
