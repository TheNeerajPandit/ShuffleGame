const form = document.querySelector("form");
const startGame = document.querySelector("#startGame");
// const buttons = document.getElementsByClassName("btn");
const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
const btn4 = document.querySelector("#btn4");
const btn5 = document.querySelector("#btn5");
const btn6 = document.querySelector("#btn6");
const btn7 = document.querySelector("#btn7");
const btn8 = document.querySelector("#btn8");
const btn9 = document.querySelector("#btn9");
const btn10 = document.querySelector("#btn10");
const btn11 = document.querySelector("#btn11");
const btn12 = document.querySelector("#btn12");
const btn13 = document.querySelector("#btn13");
const btn14 = document.querySelector("#btn14");
const btn15 = document.querySelector("#btn15");
const btn16 = document.querySelector("#btn16");
const btn17 = document.querySelector("#btn71");
const btn18 = document.querySelector("#btn18");
const btn19 = document.querySelector("#btn19");
const btn20 = document.querySelector("#btn20");
buttons = [
  btn1,
  btn2,
  btn3,
  btn4,
  btn5,
  btn6,
  btn7,
  btn8,
  btn9,
  btn10,
  btn11,
  btn12,
  btn13,
  btn14,
  btn15,
  btn16,
  btn17,
  btn18,
  btn19,
  btn20,
];

//WorkFlow of Game
const clickOrder = () => {
  let i = 0;
  form.addEventListener("click", (e) => {
    const right = new Audio("./includes/audio/buttonPressed.mp3");
    const wrong = new Audio("./includes/audio/error.mp3");
    if (e.target === buttons[i]) {
      e.target.classList.add("clicked");
      right.play();
      return i++;
    } else {
      wrong.play();
    }
  });
};
clickOrder();


//Shuffle Game
startGame.addEventListener("click", (e) => {
  const shuffleNumbers = () => {
    let i = 0;
    const random = setInterval(() => {
      for (let i = form.children.length; i >= 0; i--) {
        form.appendChild(form.children[(Math.random() * i) | 0]);
      }
      const shuffleAudio = new Audio("./includes/audio/shuffle.mp3");
      shuffleAudio.play();
    }, 2200);
  };
  shuffleNumbers();
});

// btn1.addEventListener('click',e=>{
//     btn1.classList.add('clicked');
// });

// btn2.addEventListener('click',e=>{
//     btn2.classList.add('clicked');
// });

// btn3.addEventListener('click',e=>{
//     btn3.classList.add('clicked');
// });

// btn4.addEventListener('click',e=>{
//     btn4.classList.add('clicked');
// });

// btn5.addEventListener('click',e=>{
//     btn5.classList.add('clicked');
// });

// -------------fuck this------------
// const array = Array.from(form.children);
// array.forEach((element) => {
//   element.addEventListener("click", (e) =>{
//     const attributes = e.target
//                         .getAttributeNames()
//                         .map(name => element.getAttribute(name));

// // console.log(attributes[4]);
// let i=1;
// for(i=1; i<=20;i++){
// if(attributes[1]===`btn${i}`){
//     element.classList.add("clicked");
//       e.preventDefault();
//       const audioButton = new Audio("./includes/audio/buttonPressed.mp3");
//       audioButton.play();
//     console.log(attributes[1], 'Good', i);
//     i++;
// }
// }

// });
// });
// -------------fuck this------------

// const array = Array.from(form.children);
// array.forEach((element) => {
//   element.addEventListener("click", (e) => {
//     if (e.target) {
//   element.classList.add("clicked");
//   e.preventDefault();
//   const audioButton = new Audio("./includes/audio/buttonPressed.mp3");
//   audioButton.play();
//     }
//   });
// });
