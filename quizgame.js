var readlineSync = require('readline-sync');



var Quiz = function(text, answer, id, point) 
{
	this.text = text 
	this.answer = answer
	this.id = id 
	this.point = point 
	this.total = 0
}; 



Quiz.prototype.askQuestion = function()   
{
	var user_input = readlineSync.question(this.text + this.point+ "points ");

	while (user_input.toLowerCase() !== this.answer) 

	{	this.total= this.total-this.point
		console.log("you are wrong, try again.")
		user_input = readlineSync.question(this.text + this.point+ "points ")
	}

	if (user_input.toLowerCase()=== this.answer) 
	{
		this.total= this.total+this.point
		console.log("you are right")
	}; 

}


var Collection = function ()
{
	this.list = [];
};

Collection.prototype.addingQuiz= function (quiz)
{
	this.list.push(quiz);
};


Collection.prototype.addingPoint = function()
{
	
	var sum  = 0 
	this.list.map(function(item) {
		sum +=item.total;
	});
	console.log(sum);
}; 





var q1 = new Quiz("What is the most difficult language in the world?", "chinese", 1, 10)
c1 = new Collection
c1.addingQuiz(q1)
c1.addingPoint()
q1.askQuestion()
c1.addingPoint()


var q2 = new Quiz("What is the easiest language in the world?", "english", 2, 25)

c1.addingQuiz(q2)
q2.askQuestion()
c1.addingPoint()

var q3 = new Quiz("What is the most beautiful language in the world?", "french", 2, 50)

c1.addingQuiz(q3)
q3.askQuestion()
c1.addingPoint()












