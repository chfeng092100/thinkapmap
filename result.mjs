function whichAPtoTake(choice) {
  if (choice == 'STEM'){
    return ['CALCULUS BC', 'STATS', 'PHYSICS']
  }
  else if (choice == 'Social Science') {
    return ['PSYCHOLOGY', 'US HISTORY', 'MICROECONOMICS']
  }
  else if (choice == 'Pre-Med track') {
    return ['BIOLOGY', 'PSYCHOLOGY', 'STATS']
  }
  else if (choice == 'Pre-Law track') {
    return ['US HISTORY', 'MICROECONOMICS', 'STATS']
  }
  else if (choice == 'Undecided') {
    return ['MICROECONOMICS', 'PSYCHOLOGY', 'STATS']
  }
}

function howManyAP(school, current) {
  var total;
  var temp;
  if (school == 'IVY LEAGUE') {
    total = 15
  }
  else if (school == 'Top 20') {
    total = 12
  }
  else if (school == 'Top 50') {
    total = 8
  }
  else if (school == 'State Universities') {
    total = 1
  }
  else if (school == "I don't care") {
    total = 1
  }

  if (current == 'less than 3') {
    temp = 2
  }
  else if (current == '4-6') {
    temp = 5
  }
  else if (current == '7-10') {
    temp = 8
  }
  else if (current == 'more than 10') {
    temp = 11
  }
  else if (current == 'None (My school does not offer)') {
    temp = 0
  }

  var result = total - temp;
  if (result > 0){
    return result.toString()
  }
  else {
    return "1"
  }
}

function calcChance(school, gpa, score, ap) {
  var total;
  var temp1;
  var temp2;
  var temp3;

  if (school == 'IVY LEAGUE') {
    total = 60
  }
  else if (school == 'Top 20') {
    total = 70
  }
  else if (school == 'Top 50') {
    total = 80
  }
  else if (school == 'State Universities') {
    total = 90
  }
  else if (school == "I don't care") {
    total = 90
  }

  if (gpa == '4.0') {
    temp1 = 3
  }
  else if (gpa == '3.75+') {
    temp1 = 5
  }
  else if (gpa == '3.5+') {
    temp1 = 7
  }
  else if (gpa == "3.0+") {
    temp1 = 10
  }
  else if (gpa == "2.5+") {
    temp1 = 20     
  }

  if (score == 'SAT 1550+ / ACT 35-36') {
    temp2 = 3
  }
  else if (score == 'SAT 1500+ / ACT 34-35') {
    temp2 = 5
  }
  else if (score == 'SAT 1400+ / ACT 31-33') {
    temp2 = 7
  }
  else if (score == "SAT 1250+ / ACT 26-30") {
    temp2 = 10
  }
  else if (score == "SAT less than 1250 / ACT less than 26") {
    temp2 = 20
  }

  if (ap == 'less than 3') {
    temp3 = 2 + Math.random(10)/10
  }
  else if (ap == '4-6') {
    temp3 = 5 + Math.random(10)/10
  }
  else if (ap == '7-10') {
    temp3 = 8 + Math.random(10)/10
  }
  else if (ap == 'more than 10') {
    temp3 = 11 + Math.random(10)/10
  }
  else if (ap == 'None (My school does not offer)') {
    temp3 = 0
  }

  return (total - temp1 - temp2 + temp3).toString()
  

}

endgame = () => {
  const rc1 = document.getElementById("rc1");
  const rc2 = document.getElementById("rc2");
  const rc3 = document.getElementById("rc3");
  const answers = localStorage.getItem("userAnswer").split(',');
  //const answerData = localStorage.getItem('userAnswerData')
  var apToTake;
  var numAP;
  let rcAP = []
  var chance;

  // fill in the result page with choices by the user
  chance = calcChance(answers[1], answers[2], answers[3], answers[4])
  rc1.innerText = "Your chance of getting into " + answers[1] + " universities is " + chance + ' %';
  numAP = howManyAP(answers[1], answers[4])
  console.log(numAP)
  rc2.innerText =
    "The chance will increase if you take " + numAP
     +
    " more AP exams by 2023";
  apToTake = whichAPtoTake(answers[5]);
  rc3.innerText = "The recommanded AP exams are: [" + apToTake[0] + "] [" + apToTake[1] + "] [" + apToTake[2] + "]";
};

endgame();
