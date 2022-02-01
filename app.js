
//Dataset
let dishes = [
    {
        "id": 1,
        "name": "Pizza",
        "cuisine": "Italian",
        "servings": 8,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 2,
        "name": "Spaghetti",
        "cuisine": "Italian",
        "servings": 2,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 3,
        "name": "Ravioli",
        "cuisine": "Italian",
        "servings": 2,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 4,
        "name": "Enchiladas",
        "cuisine": "Mexican",
        "servings": 6,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 5,
        "name": "Tacos",
        "cuisine": "Mexican",
        "servings": 4,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 6,
        "name": "Burrito Supreme",
        "cuisine": "Mexican",
        "servings": 1,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 7,
        "name": "Elote",
        "cuisine": "Mexican",
        "servings": 4,
        "ingredients": ["corn", "cheese"]
    },
    {
        "id": 8,
        "name": "Crepes",
        "cuisine": "French",
        "servings": 1,
        "ingredients": ["flour", "sugar"]
    },
    {
        "id": 9,
        "name": "Corned Beef & Cabbage",
        "cuisine": "Irish",
        "servings": 10,
        "ingredients": ["beef", "cabbage"]
    },
    {
        "id": 10,
        "name": "Beef Stew",
        "cuisine": "Irish",
        "servings": 8,
        "ingredients": ["beef", "tomato"]
    },
    {
        "id": 11,
        "name": "Lasagna",
        "cuisine": "Vegetarian",
        "servings": 8,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 12,
        "name": "Falafel",
        "cuisine": "Vegetarian",
        "servings": 1,
        "ingredients": ["chickpea", "parsley"]
    },
    {
        "id": 13,
        "name": "Chili",
        "cuisine": "Vegetarian",
        "servings": 13,
        "ingredients": ["tomato", "chickpea"]
    },
    {
        "id": 14,
        "name": "Goulash",
        "cuisine": "Hungarian",
        "servings": 15,
        "ingredients": ["beef", "tomato"]
    },

    
]

//Example function
function findMexicanFood(){
    let results = dishes.filter(function(el){
        if(el.cuisine === "Mexican"){
            return true;
        }
        else{
            return false;
        }})

    //Debug tip: Place a Breakpoint on the return AFTER the filter, then hover over "results" to see results of filter without having to step through the whole thing!

    return results;
}

let mexicanFood = findMexicanFood();
console.log('Mexican Foods: ', mexicanFood)



//1. Create a function that will return all dishes with the cuisine type of "vegetarian"
//Filter

function findVegetarianFood(){

    let results = dishes.filter(function(element){
        return element.cuisine === "Vegetarian";
    })
    return results;
}

let vegetarianFood = findVegetarianFood();
console.log('Vegetarian Foods: ', vegetarianFood)


//2. Create a function that will return all dishes with the cuisine type of "Italian" and a serving size greater than 5.
//Filter

function findBigPortionItalianFood(){
    let results = dishes.filter(function(element){
        return element.cuisine === "Italian" && element.servings > 5;
    })
    return results;
}

let bigPortionItalianFood = findBigPortionItalianFood();
console.log('Italian Foods Serving More than Five People: ', bigPortionItalianFood)


//3. Create a function that will return only dishes whose serving id number matches their serving count.
//Filter

function findIDMatchesServingCount(){
    let results = dishes.filter(function(element){
        return element.id === element.servings;
    })
    return results;
}

let idMatches = findIDMatchesServingCount();
console.log("Foods With an ID Matching Their Serving Count: ", idMatches)


//4. Create a function that will return only dishes whose serving count is even.
//Filter

function findEvenNumberedServings(){
    let results = dishes.filter(function(element){
        return element.servings % 2 === 0;
    })
    return results;
}

let evenNumServings = findEvenNumberedServings();
console.log("Foods With Even-Numbered Serving Sizes: ", evenNumServings)


//5. Create a function that will return dishes whose ingredients array is "tomato" and "cheese".
//Filter

function findTomatoCheeseIngretientDishes(){
    let results = dishes.filter(function(element){
        return element.ingredients[0] == "tomato" && element.ingredients[1] == "cheese" || element.ingredients[1] == "tomato" && element.ingredients[0] == "cheese";
    })
    return results;
}

let cheesyTomatoMeals = findTomatoCheeseIngretientDishes();
console.log("Foods With Tomato and Cheese as Ingredients: ", cheesyTomatoMeals)


//6a. Create a function that will return an array of only the names of the cuisine types. Ie ['Pizza', 'Spaghetti', ...]
//Map

function getArrayOfDishNames(){
    let results = dishes.map(function(element){
        return element.name;
    })
    return results;
}

let allDishes = getArrayOfDishNames();
console.log("List of All Dishes: ", allDishes)


// *BONUS: (come back to this after finishing all)
//6b. Use the filter method to eliminate duplicates, leaving only distinct values in the array

// function getArrayOfCuisineTypes(){
//     let cuisines = dishes.map(function(element){
//         return element.cuisine;
//     })
//     let results = cuisines.filter(function(element){
//         return element.cuisine
//     })
//     return results;
// }

// let allCuisines = getArrayCuisineTypes();
// console.log("List of All Dishes: ", allDishes)

//7. Create a function that will append the cuisine type to the start of the dish's name. Ie, "Italian Pizza"
//Map 

function addTypeToName(){
    let copiedDishes = JSON.parse(JSON.stringify(dishes));
    let results = copiedDishes.map(function(element){
        element.name = element.cuisine + " " + element.name;
        return element;
    })
    return results;
}

let updatedNames = addTypeToName();
console.log("List of All Dishes with Updated Names: ", updatedNames)

//8. Create a function that will append the cuisine type to the start of the dish's name. Then, return only the Vegetarian dish objects. 
// So this function should return objects 11-13 with their names changed to "Vegetarian Lasagna", "Vegetarian Falafel", "Vegetarian Chili"
//Map, Filter

function specifyVegetarianDishes(){
    meals = addTypeToName();
    let results = meals.filter(function(element){
        return element.cuisine === "Vegetarian";
    })
    return results;
}

let vegetarianSpecifiedDishes = specifyVegetarianDishes();
console.log("List of All Vegetarian Dishes (With Vegetarian Status Specified): ", vegetarianSpecifiedDishes)

//BONUS
//9. Create a function that will return dishes whose ingredients array INCLUDES "chickpea".
//Hint: You do not want to check the array's indexes to find out what the array INCLUDES.
//Filter

function findDishesWithChickpeas(){
    let results = dishes.filter(function(el){
        return el.ingredients.includes("chickpea")
    })
    return results;
}

dishesWithChickpeas = findDishesWithChickpeas();
console.log("Dishes with Chickpeas as Ingredients: ", dishesWithChickpeas)

//10. Create a function that will return the total serving count of all dishes.
//Must use Reduce, not a loop.

function findTtotalServings(){
    let copiedDishes = JSON.parse(JSON.stringify(dishes));
    let serving = copiedDishes.map(function(element){
        return element.servings;
    })
    let results = serving.reduce(function(total, element){
        return total + element;
    })
    return results;
}

totalServingsInAllDishes = findTtotalServings();
console.log("Total Servings of All Dishes Combined: ", totalServingsInAllDishes)

//11. Create a function that will return an array of any objects that do not share a cuisine type with any other objects.

function findUniqueCuisines(){
    let uniqueCuisines = [];
    let copiedDishes = JSON.parse(JSON.stringify(dishes));
    let results = copiedDishes.map(function(element){
        return element.cuisine
    })
    for(i=0; i<results.length; i++){
        if (uniqueCuisines.includes(results[i])){
            uniqueCuisines.pop(results[i])
        }
        else{
            uniqueCuisines.push(results[i])
        }
    }
    let finalResults = dishes.filter(function(element){
        return uniqueCuisines.includes(element.cuisine)
    })
    return finalResults
}

uniqueCuisineDishes = findUniqueCuisines();
console.log("Dishes with Cuisines Not Shared by Other Dishes: ", uniqueCuisineDishes)