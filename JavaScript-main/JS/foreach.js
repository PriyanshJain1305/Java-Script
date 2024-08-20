const coding = ["py", "java", "ruby", "js", "html", "css"]

// coding.forEach(function(val){
//     console.log(val);
// })

//one more method to do it is arrow function

coding.forEach( (val) => {
    //console.log(val);
})

function printMe(item) {
 //console.log(item);
    
}

//coding.forEach(printMe)

coding.forEach( (item , index , arr) => {
    //console.log(item , index , arr);
})


const MyCoding = [
    {
        languagename : "Javascript",
        level : "Beginner",
        extensionname : "jy file"
    },
    {
        languagename : "python",
        level : "proplayer",
        extensionname : "py file"
    },
    {
        languagename : "java",
        level : "proplayer",
        extensionname : "java file"
    }
]

MyCoding.forEach( (item) => {
    // console.log(item.languagename , item.level , item.extensionname);
    console.log(item.languagename);
})