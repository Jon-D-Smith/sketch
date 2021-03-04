console.log('Hello')

let rows =64;

window.addEventListener('load', (e) => {

  const board = document.getElementById('drawing-board');
  board.style.cssText =`grid-template-rows:repeat(${rows}, 1fr);grid-template-columns:repeat(${rows}, 1fr);   gap:0px 0px; `
  
   
    console.log("The page has loaded");
    for(let i = 0; i < (rows*rows); i++){
        let cell = document.createElement('div');
        cell.setAttribute('id', `${i}`);
        cell.classList.add('cell');
        board.appendChild(cell);
        
    }

    const cells = document.querySelectorAll('.cell');
    
    cells.forEach((cell) => {
        cell.addEventListener('mouseover', () => {
          let randomNum1 = Math.floor(Math.random() * 256);
          let randomNum2 = Math.floor(Math.random() * 256);
          let randomNum3 = Math.floor(Math.random() * 256);
          // cell.classList.add('painted')
          cell.style.cssText = `background-color: rgb(${randomNum1},${randomNum2},${randomNum3});`
        });
      });

})




