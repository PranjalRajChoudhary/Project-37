class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
    question.hide();
    //write code to change the background color here
     background("yellow");
    //write code to show a heading for showing the result of Quiz
    textSize(30);
     text("Result of the Quiz",350,30);
    //call getContestantInfo( ) here
     Contestant.getPlayerInfo();

    //write condition to check if contestantInfo is not undefined
    if(allContestants !== undefined){
      fill("blue");
      textSize(20);
     var note = text("Note : Contestants who gave the right answer are highlighted in green Colour",
      150,250);

    //write code to add a note here

    //write code to highlight contest who answered correctly
    for(var plr in allContestants){
     var coranswer = "4";
     if(coranswer === allContestants[plr].answer){
       fill("green");
       text(allContestants[plr].name + " : "+ allContestants[plr].answer,200,300);
     }
     else if(coranswer !== allContestants[plr].answer){
       fill("red");
       text(allContestants[plr].name + " : "+ allContestants[plr].answer,200,350);
      }
     
    }
  }
  }
}
