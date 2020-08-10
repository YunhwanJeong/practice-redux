const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const number = document.getElementById("number");

let count = 0;

number.innerText = count;

const handleCount = ({ target }) => {
  if (target === plus) {
    number.innerText = count += 1;
  } else if (target === minus) {
    number.innerText = count -= 1;
  }
};

plus.addEventListener('click', handleCount);
minus.addEventListener('click', handleCount);