// task 1 returning 1st letter of each element in array with .map()

const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale',
 'octopus', 'rabbit', 'lion', 'dog'];

const secretMessage = animals.map(function(element){
return element[0]
});
console.log(secretMessage.join(''));

// task 1A returning results of element in array divided by 100 using .map()

// arrow function
const bigNumbers = [100, 200, 300, 400, 500];
const smallNumbers = bigNumbers.map(num => num/100 );
console.log(smallNumbers)


// Task 2

const randomNumbers = [375, 200, 3.14, 7, 13, 852];
const smallNumbers = randomNumbers.filter(num => num < 250)

// TASK 2A filtering words sizes are >7 with .filter()

const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];
const longFavoriteWords = favoriteWords.filter(word => word.length > 7);

// TASK 3  finding the index of an element in an array using .findIndex()

const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey',
'salamander', 'elephant'];

const foundAnimal = animals.findIndex( animal => animal === 'elephant' );

const startsWithS = animals.findIndex( animal => animal[0] === 's' );

console.log(foundAnimal )


// TASK 4 summing the words in array with .reduce()

const newNumbers = [1, 3, 5, 7];
const newSum = newNumbers.reduce((accumulator, currentValue) => {
  console.log('The value of accumulator: ', accumulator);
  console.log('The value of currentValue: ', currentValue);
  return accumulator + currentValue
}, 10);
console.log(newSum)

// TASK 5 returning some words < 6

const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];
console.log(words.some((word) => {
  return word.length < 6;
}));



const interestingWords = words.filter( word => word.length > 5 );

 console.log(interestingWords.every((word) => { return word.length > 5} ));

//  TASK 6 reversing a string

function reverseString(str) {
    var splitString = str.split(""); // var splitString = "hello".split("");
    // ["h", "e", "l", "l", "o"]
    var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
    // ["o", "l", "l", "e", "h"]
    var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
    // "olleh"
    return joinArray; // "olleh"
}

reverseString("hello");

// TASK 7 replace the first letter of each str and make all the other characters lower case.

function capitalizeName(name){
  let arrName = name.toLowerCase().split(' ')
  let capitalizeFullName = arrName.map(function(element){
    return element.replace(element.charAt(0), element.charAt(0).toUpperCase())
  });
  return capitalizeFullName.join(' ');
};

console.log(capitalizeName('ikenna fraNklin johN mike'));

// task 8 take a walk challenge

public class TakeATenMinuteWalk {

    public static boolean isValid(char[] walk) {
        if (walk.length != 10) {
            return false;
        }

        int x = 0;
        int y = 0;

        for (Character c : walk) {
            switch (c) {
                case 'n':
                    y++;
                    break;
                case 's':
                    y--;
                    break;
                case 'e':
                    x--;
                    break;
                case 'w':
                    x++;
                    break;
                default :
                    break;
            }
        }

        return x == 0 && y == 0;
    }
}
