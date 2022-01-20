const canvas = document.getElementById('myCanvas');
marketCoins = 0

if (canvas.getContext) {
  const ctx = canvas.getContext('2d');
  ctx.fillText("Market Coins: " + marketCoins, 50, 50)   
  console.log("blah");
}