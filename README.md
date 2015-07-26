# Ironhack

# Ironhack Projects for Javascript (July 2015) 

1. Shopping Cart 
Iteration 1

Our store is going to have 5 different items like our first shopping cart.

apple: 10€ / $10
orange: 5€ / $5
grapes: 15€ / $15
banana: 20€ / $20
watermelon: 50€ / $50
Trust me, the prices are steep but it will be the best watermelon you’ve ever had. Base this exercise off of our previous shopping cart, and translate it into JavaScript.

Create a shopping cart “class” and an item “class” with the same attributes as our original shopping cart. The shopping cart should be contain an empty list of items when we initialize, with the ability to add items to the cart. An item is the same as before, with name and price attributes. Construct the add item function for the shopping cart in a way so that it outputs “Adding item to the cart at a price of item price” every time we call it.

Remember we can’t create methods like we did in Ruby, but we can add functions to our JavaScript classes by saying:

ShoppingCart.prototype.*method* = function (){
    //do stuff
}
Iteration 2

Let's create a total function now. Remember that in JavaScript that functions are values. Don’t forget this when calling total. Keep in mind that when we actually call the function, we have to say total(), since parentheses aren’t optional for function calls.

Also, if there are more than 5 items in the cart as before, make sure our user gets a 10% discount.

Iteration 3

Let’s create item based discounts.

Apples are going to be buy one, get one free.
If we have more than 5 oranges to the cart, we can add another 5 at 50% off each.
Iteration 4 - Challenge mode

Hmm it looks like some of the bananas aren’t as ripe as we originally thought...Lets create a function for the ShoppingCart that allows us to remove items if we want.

I should be able to call the function like this:

joshsCart.removeItem(“Banana”, 3)
If I don’t pass a number to the function, I want to remove all of the items.

If the amount selected to be removed is greater than what is currently in the cart, just remove all items of that type from the cart.


2. Quiz Game 
Let’s create a quiz game in JavaScript!

This is about as simple as it sounds, let's create a command line game in Node that asks the user questions, and allows the user to answer.

First Iteration

Create the basic quiz. Create a “question” class. Each question should have the text for the question (obviously), an answer, and an ID in the form of an integer. Create the Quiz class to move the user from question to question. Quiz the user with the questions, and if they provide the correct answer allow them to move on to the next question. If the user incorrectly answers, notify the user and repeat the same question again.

Second Iteration

Add a new field to the Question class, with a point value. If the user answers a question correctly, add to a new “total” variable. Keep track of the total points accumulated throughout the quiz, and display it to the user while asking the question. If a user incorrectly answers the question, make sure to subtract the quizzes point value from the total before repeating.
