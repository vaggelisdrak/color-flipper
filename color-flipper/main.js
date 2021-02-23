const btn=document.getElementById('btn');
const hex=document.querySelector('.color');

function get_random_color() {
    function c() {
      var hex = Math.floor(Math.random()*256).toString(16);
      return ("0"+String(hex)).substr(-2); // pad with zero
    }
    document.body.style.backgroundColor="#"+c()+c()+c();
    let a=document.body.style.backgroundColor="#"+c()+c()+c();
    btn.style.background =a;
    hex.textContent = a;
  }