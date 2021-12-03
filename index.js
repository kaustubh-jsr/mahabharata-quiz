let readline = require('readline-sync');

let score = 0;

let userName = readline.question('Hey! What should I call you? ');
let interested = readline.question(`Welcome ${userName}! Let us see how well do you know the longest epic 'The Mahabharata'. Are you ready (type in yes or no)? `);

function playGame(){
  console.log('Only enter the alphabet corresponding to the choice. (a/b/c/d)\n');
  let level1 = [
    ['Q. Who among these is also referred to as \'Narayana\' in the epic?\na.Arjuna\nb.Bhishma\nc.Krishna\nd.Balarama\n','c'],
    ['Q.Which of the following is the author of the Mahabharata?\na.Ved Vyas\nb.Durvasa\nc.Surdas\nd.Valmiki\n','a'],
    ['Q. Who is the eldest Kaurava prince who laid claim to the throne of Hastinapur?\na.Yuddhishthir\nb.Dushasan\nc.Arjuna\nd.Duryodhan\n','d']
  ];
  

  for(let q of level1){
    let ans = readline.question(q[0]);
    if(ans === q[1]){
      console.log('Correct');
      score += 1;
    }else{
      console.log(`Incorrect! the correct choice is ${q[1]}`);
    }
    console.log(`Score : ${score}`);
    console.log('-------------------');
  }


  console.log(`Score after level 1: ${score}`);
  if(score === level1.length){
    console.log(`Congrats ${userName}, you have jumped to level 2`);
    console.log('Buckle up! Here\'s your first question of level 2: ');
  }else{
    console.log(`Hard Luck ${userName}! Try again next time.`);
    return;
  }



  
  let level2 = [
    ['Q. Who among the following is the mother of Bhishma?\na.Saraswati\nb.Ganga\nc.Sindhu\nd.Yamuna\n','b'],
    ['Q. Name of Karna\'s foster mother ?\na.Radha\nb.Kunti\nc.Gandhari\nd.Satyavati\n','a'],
    ['Q. The first commander in chief of the Kaurav Army was: \na.Duryodhana\nb.Drona\nc.Karna\nd.Bhishma\n','d']
  ];

  for(let q of level2){
    let ans = readline.question(q[0]);
    if(ans === q[1]){
      console.log('Correct');
      score += 1;
    }else{
      console.log(`Incorrect! the correct choice is ${q[1]}`);
    }
    console.log(`Score : ${score}`);
    console.log('-------------------');
  }

  console.log(`Score after level 2: ${score}`);
  if(score === level1.length+level2.length){
    console.log(`Congrats ${userName}, you have jumped to level 3`);
    console.log('Buckle up! Here\'s your first question of level 3: ');
  }else{
    console.log(`Hard Luck ${userName}! Try again next time.`);
    return;
  }


  let level3 = [['Q. Who was the biological father of Dhritrashtra? \na.Drona\nb.Vichitravirya\nc.Chitrangada\nd.Krishna Dwaipayana\n','d'],
  ['Q. What was the ratio of the size of the Kaurava to the Pandava Army? \na.11:7\nb.20:1\nc.9:7\nd.11:9\n','a'],
  ['Q.The last commander of the Kaurava Army was : \na.Duryodhana\nb.Shalya\nc.Kritvarma\nd.Ashwatthama\n','d']
  ];

  for(let q of level3){
    let ans = readline.question(q[0]);
    if(ans === q[1]){
      console.log('Correct');
      score += 1;
    }else{
      console.log(`Incorrect! the correct choice is ${q[1]}`);
    }
    console.log(`Score : ${score}`);
    console.log('-------------------');
  }

  console.log(`Score after level 3: ${score}`);
  if(score === level1.length+level2.length+level3.length){
    console.log(`Fantastic job ${userName}, you do know the ins and outs of the epic, or are probably really lucky!`);
  }else{
    console.log(`Well done ${userName}! You did a good job reaching this far. Although you could still use some reading on the epic.`);
  }
  return;

}


if(interested === 'no'){
  console.log("There's always a next time. See you soon!");
}else{
  console.log('Cool! Welcome, then to the game. The game has three levels: \n Level 1 : Basic (3 questions) \n Level 2 : Intermediate (3 questions) \n Level 3: Advanced (3 questions) \n You proceed to the next level only if you answer all previous level questions correctly. \n And yes the difficulty increases at each level. All the best :)');
  let startGame = readline.question('Press enter to begin :');
  playGame();
}



