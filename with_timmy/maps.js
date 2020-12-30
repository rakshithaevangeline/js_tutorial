// 1. Given an array of food items I want to order, use this table
//    and tell me how much my order costs.
//
//    Chicken wings - $1
//    Chicken bucket - $5
//    Pasta - $3
//    Prawn ghee roast - $7
//    Butter chicken - $12
//    Caviar - $55
//    Pizza - $11
//    Udupi fish fry - $99
//
//        calculateCost(["Chicken wings", "Pasta", "Caviar"])
//
//    that should return 59 (1 + 3 + 55)



// Using an instance of Map Object Type.
let menu = new Map();
menu
  .set("chickenWings", 1)
  .set("pasta", 3)
  .set("chickenBucket", 5)
  .set("gheeRoast", 7)
  .set("butterChicken", 12)
  .set("caviar", 55)
  .set("pizza", 11)
  .set("udupiFishFry", 99);

// Using an instance of Object TYpe
// let menu = {
//   "chickenWings": 1,
//   "pasta": 3,
//   "chickenBucket": 5,
//   "gheeRoast": 7,
//   "butterChicken": 12,
//   "caviar": 55,
//   "pizza": 11,
//   "udupiFishFry": 99
// };

function calculateCost(menuItemNames) {
  // Obtains an array of the cost(values) of each menu item(key) from the Object/Map instance
  let menuItemValues = menuItemNames.map((menuItemName) => {
    return menu.get(menuItemName);
  });
  
// Add the cost(values) of each menu item(key) using reduce function.
  return menuItemValues.reduce((a, b) => { return a + b });
}


console.log(calculateCost(["pasta","gheeRoast", "caviar"]));
console.log(calculateCost(["pasta","gheeRoast", "butterChicken"]));
console.log(calculateCost(["pasta","pasta"]));
