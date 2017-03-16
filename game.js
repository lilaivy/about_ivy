'use strict';

 var answerKey = [];

 var correct = 0;// indert correct = + 1 to count the correct answers
 var userName = prompt ('Hey There!  What\'s your name, huckleberry?');
 console.log('User name:' + userName);


 var wannaPlay = prompt('So you think you know me?', 'Yes or No').toLowerCase();

 if (wannaPlay === 'yes' || wannaPlay === 'y') {  //ask user to play the game
   confirm('Prove it!');
   console.log('User answer to game invite: ' + wannaPlay);
 } else {
   confirm("Play this game to learn some fun Ivy facts!");
   console.log('User answer to game invite: ' + wannaPlay);
 }

//Provide instructions for quiz
 confirm('For each of the following five questions, ask yourself: Is it true that Ivy . . .');  //<i>this text in CSS


 function firstFunction() {

   var question1 = prompt('Has a theory that cilantro is the most polarizing of foods?', 'Yes or No').toLowerCase();

   if (question1 === 'yes' || question1 === 'y') {
     alert('Indeed!  Ivy has mounting evidence that all humans are either "cilantro sluts" or "soap tasters".');
     correct += 1;
     console.log('User answer to question 1: ' + question1);
     console.log(correct);
   } else {
     alert('While candy corn is a close 2nd, cilantro, according to Ivy, is 100% divisive.');
     console.log('User answer to question 1: ' + question1);
     console.log(correct);
   }
   answerKey.push(question1);
 }


//start game


 function secondFunction() {
   var question2 = prompt('Left the country unannounced to trek with sherpas and teach English to children in Nepal.', 'Yes or No').toLowerCase();

   if (question2 === 'yes' || question2 === 'y') {
     alert("I wish! It wasn't Nepal, it was Belieze.  And I wasn't treking with Sherpas, I was farming with Mayans.  The unannounced part was right, though!");
     console.log('User answer to question 2: ' + question2);
     console.log(correct);
   } else {
     alert("It wasn't Nepal, it was Belieze.  And I wasn't treking with Sherpas, I was farming with Mayans.  The unannounced part was right, though!");
     console.log('User answer to question 2: ' + question2);
     correct += 1;
     console.log(correct);
   }
   answerKey.push(question2);
 }


 function thirdFunction() {
   var question3 = prompt('Once complimented Beck, unknowingly, on his "Dope shoestrings!".',"Yes or No").toLowerCase();
   if (question3 === 'yes' || question3 === 'y') {
     alert("Tragically, this is a fact.");
     correct += 1;
     console.log('User answer to question 3: ' + question3);
   } else {
     alert('Nothing would make Ivy happier than if this were not true.');
     console.log('User answer to question 3: ' + question3);
   }
   answerKey.push(question3);
 }

 function fourthFunction() {
   var question4 = prompt('Ended a cross country road trip in Portland and never left.', 'Yes or No').toLowerCase();
   if (question4 === 'yes' || question4 === 'y') {
     alert('It\'s mostly true.  I had to return to NYC to tie up some loose ends first.');
     console.log('User answer to question 4: ' + question4);
     correct += 1;
   }
   else {
     alert("Sort of. I had to return to NYC to tie up some loose ends first.");
     console.log('User answer to question 4: ' + question4);
     correct += 1;
   }
   answerKey.push(question4);
 }

 function fifthFunction() {
   var question5 = prompt('Once won $700 in a fierce game of BINGO.', 'Yes or No').toLowerCase();
   if (question5 === 'yes' || question5 === 'y') {
     alert('Damn straight!');
     console.log('User answer to question 5: ' + question5);
     correct += 1;
   } else {
     alert('She suuuure did!');
     console.log('User answer to question 5: ' + question5);
     correct += 1;           //Is it possibile to alert with an image?
   }
   answerKey.push(question5);
 }

 
 
   alert('Thanks for playing!  Click OK to see how well you know Ivy'); //end user game

   if (correct < 4) {   //Anounce user score
     alert(userName + ', you need to up your Ivy knowledge. You got ' + correct + ' out of 7 correct!');
     console.log(correct);
   } else {
     alert(userName + ', you got ' + correct + ' out of 7 correct. You are a bonefide Ivy expert!');
     console.log(correct);
   }
 }

 firstFunction();
 secondFunction();
 thirdFunction();
 fourthFunction();
 fifthFunction();
 


var answerlist = document.querySelectorAll("li");           //worked on this with Chris
for (var i = 0; i < answerlist.length; i++){
 answerlist[i].textContent = answerlist[i].textContent + answerKey[i];

};