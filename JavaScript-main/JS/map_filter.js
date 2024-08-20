// const mynums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

// const newnums = mynums.filter( (num) => num>4 )
// console.log(newnums);

// here we don't need to write the return keyword because we are using arrow function

//=+==================================================================================

// Another method to use this through curly braces 
// as we know that if we use curly braces we have to write the return keyword 

const mynums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

// const newnums = mynums.filter( (num) => {
//     return num>4
// } )
// console.log(newnums);

//=+==================================================================================

// same thing by for each method but this is complex so we use the upper method
// const newNums = []

// mynums.forEach( (num) => {
//     if (num > 4) {
//     newNums.push(num)
// }
// })
// console.log(newNums) ;

//=+==================================================================================

const books = [
    {
        title: 'book one', genre: 'fiction', publish: 1986, edition: 2016
    },
    { 
        title: 'book two', genre: 'fiction', publish: 1990, edition: 2010 
    },
    {
        title: 'book three', genre: 'romance', publish: 2001, edition: 2015 
    },
    {
        title: 'book four', genre: 'thriller', publish: 1980, edition: 2000 
    },
    {
        title: 'book five', genre: 'romance', publish: 1995, edition: 2012
    }
];

let userbooks = books.filter( (bk) => (bk.genre === 'fiction') )
 userbooks = books.filter( (bk) => { 
    return bk.edition>=2000  && bk.genre === 'romance'
})
// console.log(userbooks);

//=+==================================================================================

//+++++++++++++++++  Filter  and Map ++++++++++++++++++++++++

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

// const newnums1 = numbers.map( ( num) => {return num + 10 })

const newnums1 = numbers
            .map( (num) => num + 10 )
            .map( (num) => num * 2 )
            .filter( (num) => num>=28)

            console.log(newnums1);

//=+==================================================================================

//+++++++++++++++++  Reduce function ++++++++++++++++++++++++

const Priyansh = [1, 2, 3]

// const Jain = Priyansh.reduce( function (accumulator , currentValue) {
//     // 6 output kaise aaya uske liye ye console kiya hai uska use nahi hai or kuch
//     console.log(`accumulator ${accumulator} , currentValue ${currentValue}`);
//     return accumulator + currentValue
// }, 0 )

// same thing by arrow function
const Jain = Priyansh.reduce( (accumulator , currentValue) => accumulator + currentValue ,0)
console.log(Jain);

let shoppingCart = [
    {
        name: 'apple',
        price: 100
    },
    {
        name: 'banana',
        price: 200
    },
    {
        name: 'orange',
        price: 300
    },
    {
        name: 'grapes',
        price: 400
    },
    {
        name: 'mango',
        price: 500
    }
]

let pricetoPay = shoppingCart.reduce( (accumulator, item) => accumulator + item.price , 0  )
console.log(pricetoPay);