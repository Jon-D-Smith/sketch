console.log('Hello')

let rows = 16;

window.addEventListener('load', (e) => {

  const board = document.getElementById('drawing-board');
  
  
   
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
          cell.classList.add('painted')
        });
      });

})




