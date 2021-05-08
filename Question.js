class Question {

  constructor() {
    this.title = createElement('h1')

    this.input1 = createInput("Enter Your Name Here....");

    this.input2 = createInput("Enter Correct Option No..");

    this.button = createButton('Submit');

    this.button2 = createButton('Next Quiz');

    this.question2 = createElement('h3');

    this.option5 = createElement('h4');

    this.option6 = createElement('h4');

    this.option7 = createElement('h4');

    this.option8 = createElement('h4');

    this.question = createElement('h3');

    this.option1 = createElement('h4');

    this.option2 = createElement('h4');

    this.option3 = createElement('h4');

    this.option4 = createElement('h4');
  }

  hide(){
    this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
  }

  display(){
    this.button2.hide();

    this.title.html("MyQuiz Game");
    this.title.position(350, 0);

    this.question.html("Question:- What is Height of Mount Everest? " );
    this.question.position(150, 80);

    this.option1.html("1: 7501 m" );
    this.option1.position(150, 100);

    this.option2.html("2: 8648 m" );
    this.option2.position(150, 120);

    this.option3.html("3: 8908 m" );
    this.option3.position(150, 140);

    this.option4.html("4: 8848 m" );
    this.option4.position(150, 160);
    

    this.input1.position(150, 230);
    this.input2.position(350, 230);
    this.button.position(290, 300);
    this.button2.position(350,300);

    this.button.mousePressed(()=>{
      this.title.hide();
      this.input1.hide();
      this.input2.hide();
      this.button.hide();

      contestant.name = this.input1.value();

      contestant.answer = this.input2.value();

      contestantCount+=1;

      contestant.index = contestantCount;

      contestant.update();

      contestant.updateCount(contestantCount);

    });
    this.button2.mousePressed(()=>{
      this.option1.hide();
      this.option2.hide();
      this.option3.hide();
      this.option4.hide();
      this.question.hide();

      this.question2.html("Question:- Where is Pyramid of Giza situated ?");
      this.question2.position(150,80);

      this.option5.html("1: Giza");
      this.option5.position(150,100);

      this.option6.html("2: Paris");
      this.option6.position(150,120);

      this.option7.html("3: America");
      this.option7.position(150,140);

      this.option8.html("4: America");
      this.option8.position(150,160);



      
    })
  }
}
