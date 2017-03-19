// 'use strict';

// var answerKey = [];

// var correct = 0;// indert correct = + 1 to count the correct answers


// var wannaPlay = prompt('So you think you know me?', 'Yes or No').toLowerCase();

// if (wannaPlay === 'yes' || wannaPlay === 'y') {  //ask user to play the game
//   confirm('Prove it!');
// } else {
//   confirm('Play this game to learn some fun Ivy facts!');

// }

// //Provide instructions for quiz
// confirm('For each of the following five questions, ask yourself: Is it true that Ivy . . .');  //<i>this text in CSS


// function firstFunction() {

//   var question1 = prompt('Has a theory that cilantro is the most polarizing of foods?', 'Yes or No').toLowerCase();

//   if (question1 === 'yes' || question1 === 'y') {
//     alert('Indeed!  Ivy has mounting evidence that all humans are either "cilantro sluts" or "soap tasters".');
//     correct += 1;
//   } else {
//     alert('While candy corn is a close 2nd, cilantro, according to Ivy, is 100% divisive.');
//   }
//   answerKey.push(question1);
// }


// //start game


// function secondFunction() {
//   var question2 = prompt('Left the country unannounced to trek with sherpas and teach English to children in Nepal.', 'Yes or No').toLowerCase();

//   if (question2 === 'yes' || question2 === 'y') {
//     alert('I wish! It wasn\'t Nepal, it was Belieze.  And I wasn\'t treking with Sherpas, I was farming with Mayans.  The unannounced part was right, though!');
//   } else {
//     alert('It wasn\'t Nepal, it was Belieze.  And I wasn\'t treking with Sherpas, I was farming with Mayans.  The unannounced part was right, though!');
//     correct += 1;
//   }
//   answerKey.push(question2);
// }


// function thirdFunction() {
//   var question3 = prompt('Once complimented Beck, unknowingly, on his "Dope shoestrings!".','Yes or No').toLowerCase();
//   if (question3 === 'yes' || question3 === 'y') {
//     alert('Tragically, this is a fact.');
//     correct += 1;
//   } else {
//     alert('Nothing would make Ivy happier than if this were not true.');
//   }
//   answerKey.push(question3);
// }

// function fourthFunction() {
//   var question4 = prompt('Ended a cross country road trip in Portland and never left.', 'Yes or No').toLowerCase();
//   if (question4 === 'yes' || question4 === 'y') {
//     alert('It\'s mostly true.  I had to return to NYC to tie up some loose ends first.');
//     correct += 1;
//   }
//   else {
//     alert('Sort of. I had to return to NYC to tie up some loose ends first.');
//     correct += 1;
//   }
//   answerKey.push(question4);
// }

// function fifthFunction() {
//   var question5 = prompt('Once won $700 in a fierce game of BINGO.', 'Yes or No').toLowerCase();
//   if (question5 === 'yes' || question5 === 'y') {
//     alert('Damn straight!');
//     correct += 1;
//   } else {
//     alert('She suuuure did!');
//     correct += 1;           //Is it possibile to alert with an image?
//   }
//   answerKey.push(question5);
// }



// alert('Thanks for playing!  Click OK to see how well you know Ivy'); //end user game

// if (correct < 4) {   //Anounce user score
//   alert(userName + ', you need to up your Ivy knowledge. You got ' + correct + ' out of 5 correct!');
// } else {
//   alert(userName + ', you got ' + correct + ' out of 5 correct. You are a bonefide Ivy expert!');
// }


// firstFunction();
// secondFunction();
// thirdFunction();
// fourthFunction();
// fifthFunction();



// var answerlist = document.querySelectorAll('li');           //worked on this with Chris
// for (var i = 0; i < answerlist.length; i++){
//   answerlist[i].textContent = answerlist[i].textContent + answerKey[i];

// };