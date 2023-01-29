// TODO #2
// Take in user input for the height
let userHeight = parseInt(prompt("Please enter the height of the pyramid."))
printPyramid(userHeight);
/*
 * printPyramid
 *
 * Prints to the console a pyramid of '#' characters of the specified height
 * For example, if height is 5, the console will look like this:
 *          ##
 *         ###
 *        ####
 *       #####
 *      ######
 */
function printPyramid(height) {
    console.log("Uh oh... the pyramid is under construction.");
    console.log("Check back soon, our developers are hard at work as we speak!");

    // TODO #1
    // print that pyramid!
    let n = height;
    let string = "";
    for (let i = 1; i <= n; i++) {
      // printing spaces
      for (let j = 0; j < n - i; j++) {
        string += " ";
      }
      // printing bricks
      for (let k = 0; k <= i; k++) {
        string += "#";
      }
      string += "\n";
    }
    console.log(string);

}
