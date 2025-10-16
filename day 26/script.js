let cart = ["shoes", "pants", "kurta", "glasses", "belt"];
cart.push("watch");
 console.log(cart);


// cart.pop();
// console.log(cart);

//  cart.unshift("watch");
//  console.log(cart);

// 

 console.log(cart.includes("watch"));


console.log(cart.indexOf("glasses"));
//            0        1       2        3       4      5        6        7        8       9        10        11
// let friends = ["ram", "sham", "ghanshyam", "mohan", "sohan", "rohan", "suresh", "mahesh", "rajesh", "vikash", "vijay", "ajay"];


// let friends = ["ram", "sham", "ghanshyam", "mohan", ];
// friends.forEach(name => console.log("hi " + name));


 let priceInINR = [5000, 10000, 20000, 30000, 40000];

let priceInUSD = priceInINR.map(price => price / 80);
console.log(priceInUSD);
 console.log(priceInINR);

 let friends = ["ram", "sham", "ghanshyam", "mohan", ];
let friendsInUpperCase = friends.map(name => name.toUpperCase());
console.log(friendsInUpperCase);
 console.log(friends);


let numbers = [18,22,33,42,5,62,71,8,9,10];
let adults = numbers.filter(num => num >= 18);
console.log(adults);

let itemPrices = [100,200,300,400,500,600,700,800,900];
let total = itemPrices.reduce((sum, price) => sum + price, 0);
console.log(total);
console.log(itemPrices);



function greet()
{
    console.log("message");
}
greet();


// function add(a,b)
// {
//     console.log(a+b);
// }
// add(10,20);


function multiply(a,b)
{
    return a+b;
}
console.log(multiply(10,20));   


alert("hello");

