// TODO #2
// Take in user input for the height
//let userHeight = parseInt(prompt("Please enter the height of the pyramid."))
//printPyramid(userHeight);
//const element = document.getElementById("activator");
//element.addEventListener("click", determineHeightAndThenDrawPyramid);
document.querySelector("#myHeight").addEventListener("input", determineHeightAndThenDrawPyramid);
document.querySelector("#brick").addEventListener("change", determineHeightAndThenDrawPyramid);

function determineHeightAndThenDrawPyramid() {
  document.getElementById("pyramid").innerHTML = "";
  height = parseInt(document.getElementById("myHeight").value);
  block = document.getElementById("brick").value;
  document.getElementById("size").innerHTML = height;
  printPyramid(height, block);
}

function printPyramid(height, char) {
  
  let n = height;
  
    for (let i = 1; i <= n; i++) {
      // printing spaces
      let string = "";
      for (let j = 0; j < n - i; j++) {
        string += ".";
      }
      // printing bricks
      for (let k = 0; k <= i; k++) {
        string += char;
      }
      let rowStr = string;
      console.log(string);
      const para = document.createElement("p");
      const node = document.createTextNode(rowStr);
      para.appendChild(node);
      
      const parent = document.getElementById("pyramid");
      const child = document.getElementById("construction");
      parent.insertBefore(para, child);
    }
  const elmnt = document.getElementById("construction");
  elmnt.remove();  
  
}

