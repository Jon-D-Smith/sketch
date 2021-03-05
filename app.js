
const slider = document.getElementById("gridRange");
const output = document.getElementById("gridValue");
let rows =slider.value;
let cells = document.querySelectorAll('.cell');
const board = document.getElementById('drawing-board');
const clearBtn = document.getElementById("clearBtn");
board.style.cssText =`grid-template-rows:repeat(${rows}, 1fr);grid-template-columns:repeat(${rows}, 1fr);   gap:0px 0px; `

    //Function to set the Grid Size
      const setGrid = function(){
        for(let i = 0; i < (rows*rows); i++){
          let cell = document.createElement('div');
          cell.setAttribute('id', `${i}`);
          cell.classList.add('cell');
          board.appendChild(cell);
          
      }
      }
    //function to set the coloring functionality
      const setColors = function(){
            //Painting functionality
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
      }

      //Function to Remove Children from the Board 
      function removeAllChildNodes(parent) {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }
      //Setting the initial grid on load
      window.addEventListener('load',() => {
        setGrid()
        setColors()
      })
      //Change the board
      slider.addEventListener("mouseup", function(e){        
        rows = slider.value
        removeAllChildNodes(board);
        setGrid()
        board.style.cssText =`grid-template-rows:repeat(${rows}, 1fr);grid-template-columns:repeat(${rows}, 1fr);   gap:0px 0px; `
        cells = document.querySelectorAll('.cell');
        setColors()
        })
        //Set Board Size based on slider value
      slider.oninput = function() {
        output.innerHTML = this.value;
      }
       //Clear button functionality -- Reset the board      
       clearBtn.addEventListener("click", function(e){
         cells.forEach((cell) => {
           cell.style.cssText = "";
         })
       })
