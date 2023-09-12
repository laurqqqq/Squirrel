const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval = null;
let originalText = ""; // Variable to store the original text

document.querySelector("h1").onmouseover = event => {  
  let iteration = 0;
  
  clearInterval(interval);

  // Store the original text
  originalText = event.target.innerText;
  
  interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if(index < iteration) {
          return event.target.dataset.value[index];
        }
      
        return letters[Math.floor(Math.random() * 26)]
      })
      .join("");
    
    if(iteration >= event.target.dataset.value.length){ 
      clearInterval(interval);
      
      // Append "new string" to the modified text with a different color and no space
      event.target.innerHTML += '<span style="color: green;">S</span>';
    }
    
    iteration += 1 / 3;
  }, 30);
}
