//homework EXTRA CARBONARA RECIPE 
console.log("\nThis is homework Extra")
//recipe is for 4 people

//ingredients
let spaghetti = 400;
let guanciale = 250;
let freshEggYolk = 6;
let gratedPecorinoRomanoCheese = 50;
let rawBlackPepper = 4;

// mix egg yolk with cheese
let sauce = freshEggYolk + gratedPecorinoRomanoCheese; //6 + 50

console.log("The first sauce mix is = ",sauce); // 56

let sauceFinal;
//add small amount of pepper to sauce mixture
sauceFinal = sauce + rawBlackPepper; // 56 + 4 = 60

console.log("The final carbonara sauce is = ",sauceFinal);

//cooking the noodles with the guanciale
let cookingPan = guanciale + spaghetti;

//serving the dish
let carbonara;
carbonara = cookingPan + sauceFinal ;

console.log("Carbonara is ready to serve!=", carbonara);