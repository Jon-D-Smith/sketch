console.log('Hello')

      const slider = document.getElementById("gridRange");
      const output = document.getElementById("gridValue");
      let rows =slider.value;

      const board = document.getElementById('drawing-board');
      board.style.cssText =`grid-template-rows:repeat(${rows}, 1fr);grid-template-columns:repeat(${rows}, 1fr);   gap:0px 0px; `

      //Set cells based on default amount

      for(let i = 0; i < (rows*rows); i++){
        let cell = document.createElement('div');
        cell.setAttribute('id', `${i}`);
        cell.classList.add('cell');
        board.appendChild(cell);
        
    }
//Painting functionality
    let cells = document.querySelectorAll('.cell');
    
    cells.forEach((cell) => {
        cell.addEventListener('mouseover', () => {
          let randomNum1 = Math.floor(Math.random() * 256);
          let randomNum2 = Math.floor(Math.random() * 256);
          let randomNum3 = Math.floor(Math.random() * 256);
          // cell.classList.add('painted')
          cell.style.cssText = `background-color: rgb(${randomNum1},${randomNum2},${randomNum3});`
        });
      });

      //Function to Remove Children from the Board 
      function removeAllChildNodes(parent) {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }
      //Change the board
      slider.addEventListener("mouseup", function(e){
        
        rows = slider.value
        console.log(rows)
        removeAllChildNodes(board);
        for(let i = 0; i < (rows*rows); i++){
          let cell = document.createElement('div');
          cell.setAttribute('id', `${i}`);
          cell.classList.add('cell');
          board.appendChild(cell);
          
      }
      board.style.cssText =`grid-template-rows:repeat(${rows}, 1fr);grid-template-columns:repeat(${rows}, 1fr);   gap:0px 0px; `
      cells = document.querySelectorAll('.cell');
    
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

        //Set Board Size
      slider.oninput = function() {
        output.innerHTML = this.value;
      }

       //Clear button functionality
       const clearBtn = document.getElementById("clearBtn");
       clearBtn.addEventListener("click", function(e){
         console.log(e.target);
         cells.forEach((cell) => {
           cell.style.cssText = "";
         })
       })


      
      


