/* console.log("numbers project");

const items = [...document.querySelectorAll(".number")];

const updateCount = (el) => {
  console.log(el);
  const value = el.dataset.value;
  let incriment = 1;
  let intialValue = 0;

  const incriCount = setInterval(()=>{
    intialValue += incriCount;
    if(intialValue <= value){
        
        el.textContent = `${intialValue}+`;
    }
    else{
        clearInterval(incriCount)
    }
  },1)
  
};

items.forEach((item) => {
  updateCount(item);
});
 */

const items = [...document.querySelectorAll(".number")];

const updateCount = (el) => {
  const value = parseInt(el.dataset.value);
  const incriment = Math.ceil(value / 1000);
  let intialValue = 0;

  const incriCount = setInterval(() => {
    intialValue += incriment;

    if (intialValue > value) {
        el.textContent = `${value}+`
        clearInterval(incriCount)
    } else {
      el.textContent = `${intialValue}+`;
    }
  }, 1);
};

items.forEach((item) => {
  updateCount(item);
});
