const btn=document.getElementById('btn');
const hex=document.querySelector('.color');

function get_random_color() {
    function c() {
      var hex = Math.floor(Math.random()*256).toString(16);
      return ("0"+String(hex)).substr(-2); // pad with zero
    }
    function getRandomGradient() {
        return `linear-gradient(to right,${"#"+c()+c()+c()},${"#"+c()+c()+c()},${"#"+c()+c()+c()})`;
    }
    document.body.style.background=getRandomGradient();
    let a=document.body.style.background=getRandomGradient();
    let b = a.replace('linear-gradient(to right,','(');
    let d = a.replace('to right,','');
    btn.style.background =d;
    hex.textContent =b;
}