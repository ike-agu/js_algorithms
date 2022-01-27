const menu = {
    _courses: {
       appetizers: [],
        mains: [],
         desserts: [],
    },
     get appetizers() {
      return this._courses.appetizers;
  },
     get mains() {
      return this._courses.mains;
  },
     get desserts() {
      return this._courses.desserts;
  },

     set appetizers(appetizers) {
       return this._courses.appetizers = appetizers
  },
     set appetizers(mains) {
       return this._courses.mains = mains
  },
     set appetizers(desserts) {
       return this._courses.desserts = desserts
  },

  get courses(){
    return{
      appetizers:this.appetizers,
      mains:this.mains,
      desserts:this.desserts,
    }
  },
  addDishToCourse (courseName, dishName, dishPrice ){
    const dish = {
      name: dishName,
      price: dishPrice,
    }
    return this._courses[courseName].push(dish);
  },

getRandomDishFromCourse(courseName){
  const dishes = this._courses[courseName];
  const randomIndex = Math.floor(Math.random()* dishes.length)
  return dishes[randomIndex]
},

generateRandomMeal(){
  const appetizer = this.getRandomDishFromCourse('appetizers')
  const main = this.getRandomDishFromCourse('mains')
  const dessert = this.getRandomDishFromCourse('desserts')
  const totalPrice = appetizer.price + main.price + dessert.price;
  return `Your meal is ${appetizer.name}, ${main.name}, and ${dessert.name}, and the total price is ${totalPrice}`;
}
};

menu.addDishToCourse('appetizers','salad', 5,45);
menu.addDishToCourse('appetizers','wings', 3,25);
menu.addDishToCourse('appetizers','chips', 2,00);

menu.addDishToCourse('mains','steak', 10,45);
menu.addDishToCourse('mains','pasta', 8,30);
menu.addDishToCourse('mains','porkbelly', 11,00);

menu.addDishToCourse('desserts','mango juice', 1,45);
menu.addDishToCourse('mains','ice cream', 2,30);
menu.addDishToCourse('mains','milkshake', 1,00);

const meal = menu.generateRandomMeal();
console.log(meal)
