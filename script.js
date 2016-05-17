
var kanye = { 
  //arrays within arrays and for MVP [1] is always the correct answer
  cities: ['newYork', 'chicago', 'austin', 'boulder', 'vegas', 'losAngeles', 'sanFran'],
  
  newYork: 
   [
  ['Which built-in method returns the calling string value converted to lower case?','toLowerCase()','toLower()','changeCase(case)'],
  ['Which built-in method returns the character at the specified index?','charAt()','characterAt()','getCharAt()'],
  ['Which of the following function of Number object returns a string value version of the current number?','toString()','toFixed()','toLocaleString()'],
  ['Which of the following function of String object returns the primitive value of the specified object?','valueOf()','toUpperCase()','toLocaleUpperCase()'],
  ['Which of the following function of Array object adds one or more elements to the end of an array and returns the new length of the array?','push()','pop()','join()'],
  ['Which of the following function of Array object sorts the elements of an array?','sort()','unshift()',' toSource()']
  ],
  
  chicago:
    [
  ['I want peeps to give me money yo...cause I do important sh**t....how can I create a web app that peeps can give me money?', '<form action="" method="post">','#','#'],
  ['#','#','#','#'],
  ['How can I make my stuff more discoverable on the web?','<Meta tags> <Alt tags>','#','#'],
  ['How can I get my fans to go to all my cool sites?','<Link tags / ahref tags>','#','#'],
  ['How can I make my pages more interactive or update dynamically?','document.getElementById("demo").innerHTML = "Hello JavaScript!";','#','#'],
  ['How can I display fans that gave me the most money:','in a table','#', '#']
  ],
  
  austin:
 [['Which CSS property is used to change the background color?','background-color','background','color'],
  ['Which of the following selectors matches the name of any element type?', 'The universal selector', 'The type selector', 'The descendant selector'],
  ['CSS can be applied in three ways, which is not an option?', 'in the footer of an html document', 'in the head between <style> tags', 'inline'],
  ['Which of the following is not a valid color code?', '#505050','grey','808080',],
  ['What does CSS actually stand for?', 'cascading style sheets', 'can\'t stop stylin', 'counting stacks stacking'],
  ['Block elements can be aligned by setting the left and right margins to "align"','true','false','"I am God\'s vessel"']],
 
  boulder:
  [
  ['Which variable is a string?','var a = "I do dope sh*t"','var a = 7','var a = 5.9',],
  ['Pick the equation that makes var c equal to 1','var c = a-b;','var c = 3,2;','var c = a/b;'],
  ['Which variable is incorrectly written?','var CouchesCouchesCouches','var couchescouchescouches','varcouchesCouchesCouches'],
  ['var myName = "Kanye West"; console.log(myName.length); What will show in console?','10','Kanye West','9'],
  ['var myName = "Kanye West"; console.log(myName.substring(3,5); What will show in the console?','Ye','West','Nye'],
  ['var kanye = 8 fucntion flashingLights(){var a = 2; var b = 3; return kanye+b;} What type of variable is kanye?','Global','International','Local']
  ],
  vegas:
   [
  ['What is the index number of the second element of the array? var numbers = [2,6,13,5,1,10];','1','0','3'],
  ['What will color.push("orange"); do to the array? colors = ["yellow", "red", "blue"];','adds "orange" to the end','adds "orange" to the beginning','replaces "yellow" and "red"'],
  ['Help fix the array; var rockStar = [Jimmy, Page, "guitar"];', 'var rockStar = ["Jimmy", "Page", "guitar"];','var rockStar = [Jimmy = Page = guitar];','var rockStar = ({Jimmy; Page} "guitar");'],
  ['Which is the correct syntax for a new array?', 'var cities = ["Chicago", "Denver", "Las Vegas"]; ','var cities = new Array("Chicago", "Denver", "Las Vegas");','neither'],
  ['What is the expected result for the length property for the array? var milesToVegas = [10, 500, 45, 36, 18]; miles.length;', '5', '4', '609'],
  ['What is the expected result for the code below? var oddNumbers = [1,3,5,7,9,11]; document.getElementById("demo").innerHTML = fruits.join(" - ");', '1 - 3 - 5 - 7 - 9 - 11 ', '-34', '1-3-5-7-9-11']
  ],
  losAngeles:
   [
  ['q1','1correct_a1','1_a2','1_a3'],
  ['q2','2correct_a1','2_a2','2_a3'],
  ['q3','3correct_a1','3_a2','3_a3'],
  ['q4','4correct_a1','4_a2','4_a3'],
  ['q5','5correct_a1','5_a2','5_a5'],
  ['q6','6correct_a1','6_a2','6_a3']
  ],
  sanFran:
   [
  ['Which of the following is a valid type of function javascript supports?','named function','anonymous function','Both of the above.'],
  ['Which built-in method returns the index within the calling String object of the first occurrence of the specified value?','getIndex()','indexOf()','None of the above.'],
  ['Which built-in method returns the calling string value converted to lower case?','toLowerCase()','toLower()','None of the above.'],
  ['Which of the following function of String object combines the text of two strings and returns a new string?','add()','merge()','concat()'],
  ['Which of the following function of String object extracts a section of a string and returns a new string?','slice()','split()','search()'],
  ['Which of the following function of Array object sorts the elements of an array?','sort()','toString()','unshift()']
  ],
  lyrics: 
  [
  ['How you gon\' be mad on vacation? Dutty winin \'round all these ______','Jamaicans','Fat Bacons','Mistakens'],
  ['Still ain\'t learn more no manners _____','Hold My Liquor','Send it Up','Hell of a Life'],
  ['I got a Jones like Norah for your sorror Bring more of them girls I\'ve seen in the ______','Aurora','Augusta','Guadalajara'],
  ['I just _____ a jet to fly over personal debt','copped','got','bought'],
  ['I miss the old Kanye, straight from the \'Go Kanye, _____ the soul Kanye, set on his goals Kanye I hate the new Kanye, the bad mood Kanye','Chop up','Back to','Tough in'],
  ['"She take my money when I\'m in need, Yeah she\'s a trifling friend indeed, Oh she\'s a gold digger way over town, _____','That dig\'s on me','She takes from me','Who loves on me']
  ]
  
}



var correctAnswer = 0;  
var badAnswer = 0;
var questionsUsed = [];
  

//function that takes in user selection and compares it to the right answer. If correct - money tally - else - wrong tally
function checkAnswer(level, questionNumber){
  //this will give you an array and then you have to see if it's checked 
  var kanyeInput = document.getElementsByName('answers');
  //loop to find checekd
  for (i=0; i< kanyeInput.length; i++) {
     if (kanyeInput[i].checked){
         if (i==0){
           console.log("a correct answer!");
           correctAnswer++;
           //are they at end of level or not
           gameEndCheck(level, questionNumber);
         } else { console.log("a wrong answer!");
                badAnswer++;
                 gameEndCheck(level, questionNumber);
                }
     }
 } }

 //this is a fucntion named gameEndCheck - it takes in the parameters numLevel and numQuestion and returns nothing. 
  function gameEndCheck(numLevel, numQuestion){
    
       if(badAnswer >= 2){
           content = "<h3>You lose!</h3>";
           document.getElementById('quiz').innerHTML = content;
           
       }
 	   else if(correctAnswer + badAnswer < 4){
         numQuestion++
         buildPage(numLevel, numQuestion);                       
                                         }
      else{
        numLevel++;
        numQuestion = 1;
          correctAnswer = 0;
          badAnswer = 0;
          questionsUsed = [];
          changeCity(numLevel);
         buildPage(numLevel, numQuestion)
          };
  }//gameEndCheck End
  
  
function changeCity(level){
    if (level == 1){
        document.getElementById('body').style.backgroundImage = 'url("chicago.jpg")';
        document.getElementById('city').innerHTML = "Chicago";
    }
    if (level == 2){
        document.getElementById('body').style.backgroundImage = 'url("austin.jpg")';
        document.getElementById('city').innerHTML = "Austin";
        
    }
    if (level == 3){
        document.getElementById('body').style.backgroundImage = 'url("boulder.jpg")';
        document.getElementById('city').innerHTML = "Boulder";
        
    }
    if (level == 4){
        document.getElementById('body').style.backgroundImage = 'url("vegas.jpg")';
        document.getElementById('city').innerHTML = "Vegas";
        
    }
    if (level == 5){
        document.getElementById('body').style.backgroundImage = 'url("la.jpg")';
        document.getElementById('city').innerHTML = "Los Angeles";
        
    }
    if (level == 6){
        document.getElementById('body').style.backgroundImage = 'url("sanfran.jpg")';
        document.getElementById('city').innerHTML = "San Francisco";
        
    }
}

  
function generateRandomNum(qArray){
    //console.log("This is the array passed to random number generator: ", qArray);
  var randomNum = Math.floor(Math.random() * (qArray.length));
      //console.log("Random number", randomNum);
    return randomNum;
  }
 

function checkNum(qArray){
//var isRandom = true;
var isMatch = false;
var randomNumber = generateRandomNum(qArray);
 //return randomNumber;
    
    while (!isMatch){
    if (questionsUsed.length < 1){
        isMatch = true;
    } else {
        for(i=0;i<questionsUsed.length;i++){
    	if(questionsUsed[i] == randomNumber){
        console.log(questionsUsed[i]," was equal to ", randomNumber);
        randomNumber = generateRandomNum(qArray);
        break;
        } 
       
       if(i == (questionsUsed.length-1)) {
            isMatch = true;
        } 
    } 
        
    }
    }
    return randomNumber


}




function buildPage(levelnum,qnum) {
  console.log("level: ", levelnum,qnum);
  var levelName = kanye.cities[levelnum];
    console.log(levelName);
  var levelQArray = kanye[levelName];

  
  var randomQNum = checkNum(levelQArray);
    console.log("Here's my random number inside the buildPage ",randomQNum);
var newQ = levelQArray[randomQNum][0];
    

questionsUsed.push(randomQNum);
console.log(newQ);

  
var content = '';

content += '<h3>';
content += newQ;
content += '</h3><br/><hr/><h3>';
content += 'Possible Answers</h3>';
content += '<br/><h4>';
content += levelQArray[randomQNum][1];
content += '</h4><input class="form-control" type="radio" id="a1" name="answers"/>';
content += '<br/><h4>';
content += levelQArray[randomQNum][2];
content += '</h4><input class="form-control" id="a2" type="radio" name="answers"/>';
content += '<br/><h4>';
content += levelQArray[randomQNum][3];
content += '</h4><input class="form-control" id="a3" type="radio" name="answers"/>';
content += '<br/>';
content += '<button class="btn btn-success center-block" onclick="checkAnswer('+levelnum+','+qnum+')">Submit</button>';
document.getElementById('quiz').innerHTML = content;
}


    

    
    
    
    
    
    
buildPage(0,1);