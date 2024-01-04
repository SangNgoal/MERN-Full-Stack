// if (condition) {
//     // code to execute
//     // if the condition is true
// }


// Case study

// Consider an e-commerce system where a user want to purchase an item. the sustem has to check if the item is in stock b4 proceeding with the purchase:

let instock = true


if (instock){

    console.log ("Item is in stock, proceed with your purchase")
}


// ------------------
// case study number 2

// suppose you are creating a website where user must be al least 18 years old to register. Here how you might use an if statement to check a user age


let userAge = 19

if (userAge >=18) 
{
    console.log ("You can enter the website")
}


// Else statement --------------------

// case 1 : 

// Suppose you're developing a website and you want to personalize a message for users based on wether they'sre logged in or not: 

let isLoggedIn = false

if(isLoggedIn){
    consle.log('Welcome back, user')
}
else {
    console.log ('please login')
}

// case 2:
// Imagine you're designing an onlinve voting system. In this system, users can only vote if they're registered. Here's how you might use an if-Else statement to check user status

let isRegistered = true

if (isRegistered) {
    console.log('you are eligible to vote')
} else {
    console.log ('you are not elgible to vote')
}



