document.getElementById("startBtn").addEventListener("click", function() {
  var haqq, can;
  var təxmin, sayğac = 0;
  var rəqəm = Math.floor((Math.random() * 10) + 1);
  can = Number(prompt('Neçə dəfəyə biləcəksiniz?'));
  haqq = can;
  console.log(rəqəm);

  while (haqq > 0) {
      haqq--;
      sayğac++;
      təxmin = Number(prompt('Bir rəqəm yazın.'));
      if (rəqəm === təxmin) {
          console.log(`Təbriklər ${sayğac} dəfəyə bildiniz.`);
          console.log(`Xal: ${100 - (100 / can) * (sayğac - 1)}`);
          break;
      } else if (rəqəm > təxmin) {
          console.log('Yuxarı');
      } else {
          console.log('Aşağı');
      }
      if (haqq === 0) {
          console.log('Haqqınız qurtardı. Rəqəm :' + rəqəm);
      }
  }
});
