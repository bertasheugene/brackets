module.exports = function check(str, bracketsConfig) {
  let combinations = [];
  for(let i = 0; i < bracketsConfig.length; i++)
  combinations.push(bracketsConfig[i][0] + bracketsConfig[i][1]);
  while (true)
  {
    if(str === '') return true;
    let founded = -1;
    for(let i = 0; i < combinations.length; i++ )
    {
      if(str.indexOf(combinations[i]) !== -1)
      {
        founded = i;
        break;
      }
    }
    if(founded === -1) return false;
    str = str.replace(combinations[founded], '');
  }
}
