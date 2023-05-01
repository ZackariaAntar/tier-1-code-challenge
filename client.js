/*
You’ve been given an index.html file and this starter js file.

0. Source this file into the index.html file. You should see a console log when this is done correctly.
  -- There is no JS to write for this step.
*/

console.log('Step 0 complete! client.js loaded!');

// Write your code here!

// 1. Start with the number 29 and set that equal to a variable named ‘highScore’;
let highScore = 29; // created a variable called highScore and set its value to 29.
console.log(highScore); // testing the value of highScore.
// 2. Make a new empty array called myScrabbleTiles.
let myScrabbleTiles = []; // created an empty array named myScrabbleTiles.
console.log(myScrabbleTiles); // testing that myScrabbleTiles is actually an empty array.
// 3. Put these 6 tile objects into myScrabbleTiles:
/*
  { tile: 'N', score: 1 }
  { tile: 'K', score: 5 }
  { tile: 'Z', score: 10 }
  { tile: 'X', score: 8 }
  { tile: 'D', score: 2 }
  { tile: 'A', score: 1 }
*/
myScrabbleTiles.push({ tile: 'N', score: 1 }) // adding objects to the myScrabbleTiles array in lines 27-32
myScrabbleTiles.push({ tile: 'K', score: 5 })
myScrabbleTiles.push({ tile: 'Z', score: 10 })
myScrabbleTiles.push({ tile: 'X', score: 8 })
myScrabbleTiles.push({ tile: 'D', score: 2 })
myScrabbleTiles.push({ tile: 'A', score: 1 })
console.log(myScrabbleTiles); // testing that the objects were added to myScrabbleTiles.
// 4. Remove the last tile from myScrabbleTiles.
myScrabbleTiles.pop({ tile: "A", score: 1 }); // removing { tile: "A", score: 1 } from myScrabbleTiles.
console.log(myScrabbleTiles); // testing that { tile: "A", score: 1 } was removed from myScrabbleTiles.

// 5. Add the following new tile to myScrabbleTiles:
/*
  { tile: 'F', score : 4 }
*/
myScrabbleTiles.push({ tile: "F", score: 4 }); // adding { tile: "F", score: 4 } to myScrabbleTiles.
console.log(myScrabbleTiles); // testing that  { tile: "F", score: 4 } was added to myScrabbleTiles.
// 6. Complete this function. It needs to be given an array of tile objects. The function will use a for-loop and return the sum of all the scores in the given array.
function sumTiles(anArray) { // function that sums the values from the scores property of the objects stored in the myScrabbleTiles array.
  let total = 0; // created a variable total and set its value to 0.
  for (tiles of anArray){ // for of loop that iterates through the objects in the myScrabbleTiles array.
    total += tiles.score // adds the values of the scores properties to total, for each object in the myScrabbleTile array.

  }return total; // return the total of all tile scores.

}


// 7. Use the function above to get the total score for myScrabbleTiles and assign the value to a variable called "myScore".
let myScore = sumTiles(myScrabbleTiles); // created variable called myScore and set its value to the result of the sumTiles function.

console.log(myScore); // testing that myScore is set to the correct value.

// 8. Check whether or not your score is higher than the highScore.
// 8-1 If your score is higher, change highScore to the new high score.
if (myScore > highScore){
	// conditional statement that checks if the myScore value is higher than the value of highScore.
	console.log("Congrats, you've got the new highest score."); // if myScore is higher than highScore, log "Congrats, you've got the new highest score." and reassign myScore as the value of highScore.
	highScore = myScore;
}
console.log(highScore);// testing that highScore was reassigned to the value of myScore. 
// DONE!