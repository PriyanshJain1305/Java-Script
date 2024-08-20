const arr = [1,2,3,4,5]
for (const num of arr) {
   // console.log(num);
     
}

const greeting = "hello world!"
for (const greet of greeting) {
    if (greet == "w") {
        // console.log(greet);
      break
        
    }
    //console.log(`Each char is ${greet}`);
    
}

//MAP +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// forof loop for map
const map = new Map()
map.set('name', 'John')
map.set('age', 30)
map.set('city', 'New York')
map.set('IN', 'India')
map.set('USA', 'United States of America')
 console.log(map.get('name'));
 console.log(map);

 for (const [key , value] of map) {0
    console.log(key , ':-' , value);
 }

 // forof is not used for objects for objects for in is used 

//  const myobject = {
//     'game1' : "NFS",
//     'game2' : "PUBJ",
//     'game3' : "FIFA",
//     'game4' : "Mortal Kombat",
//  }

//  for (const [key , value] of myobject) {
//     console.log(key , ":-" , value);
//  }

//=+==================================================================================

//for in used for object 
 const myobject = {
    game1 : "NFS", 
    game2 : "PUBJ",
    game3 : "FIFA",
    game4 : "Mortal Kombat"
 }

for (const key in myobject) {
   console.log(`${key}  is for ${myobject[key]}`);
}

// for in used for Array
const programming = ["py", "java", "ruby", "js", "html", "css"]

for (const key in programming) {
   console.log(programming[key])
}

// for map forin lop not used for map
const map1 = new Map()
map.set('name', 'John')
map.set('age', 30)
map.set('city', 'New York')
map.set('IN', 'India')
map.set('USA', 'United States of America')

for (const key in map1) {
   console.log(key);
}