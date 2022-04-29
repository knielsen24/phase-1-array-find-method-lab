// code your solution here
const record = [
    { year: "2018", result: "N/A"},
    { year: "2017", result: "N/A"},
    { year: "2016", result: "N/A"},
    { year: "2015", result: "W"},
    { year: "2014", result: "N/A"},
    { year: "2013", result: "L"},
    { year: "2012", result: "N/A"},
    { year: "2011", result: "N/A"},
    { year: "2010", result: "N/A"},
    { year: "2009", result: "N/A"},
    { year: "2008", result: "N/A"},
    { year: "2007", result: "N/A"},
    { year: "2006", result: "N/A"},
    { year: "2005", result: "N/A"},
    { year: "2004", result: "N/A"},
    { year: "2003", result: "N/A"},
    { year: "2002", result: "N/A"},
    { year: "2001", result: "N/A"},
    { year: "2000", result: "N/A"},
    { year: "1999", result: "N/A"},
    { year: "1998", result: "W"},
    { year: "1997", result: "W"},
    { year: "1996", result: "N/A"},
    { year: "1995", result: "N/A"},
    { year: "1994", result: "N/A"},
    { year: "1993", result: "N/A"},
    { year: "1992", result: "N/A"},
    { year: "1991", result: "N/A"},
    { year: "1990", result: "N/A"},
    { year: "1989", result: "L"},
    { year: "1988", result: "N/A"},
    { year: "1987", result: "L"},
    { year: "1986", result: "L"},
    { year: "1985", result: "N/A"},
    { year: "1984", result: "N/A"},
    { year: "1983", result: "N/A"},
    { year: "1982", result: "N/A"},
    { year: "1981", result: "N/A"},
    { year: "1980", result: "N/A"},
    { year: "1979", result: "N/A"},
    { year: "1978", result: "N/A"},
    { year: "1977", result: "N/A"},
    { year: "1976", result: "L"},
    { year: "1975", result: "N/A"},
    { year: "1974", result: "N/A"},
    { year: "1973", result: "N/A"},
    { year: "1972", result: "N/A"},
    { year: "1971", result: "N/A"},
    { year: "1970", result: "N/A"},
    { year: "1969", result: "N/A"},
    { year: "1968", result: "N/A"},
    { year: "1967", result: "N/A"},
    { year: "1966", result: "N/A"},
    { year: "1965", result: "N/A"},
    { year: "1964", result: "N/A"},
    { year: "1963", result: "N/A"},
    { year: "1962", result: "N/A"},
    { year: "1961", result: "N/A"},
    { year: "1960", result: "N/A"}
  ]

const sadReality =  [ { result: "N/A" }, { result: "N/A" }, { result: "N/A" } ]
  
function superbowlWin(array) {
    const win = array.find(yearOfWin => yearOfWin.result === "W")
    if (win) return win.year
}

// console.log(superbowlWin(record))
console.log(superbowlWin(sadReality))

// let findWin = record.find(superbowlWin);

// console.log(findWin);


// function superbowlWin(array) {
//     //let newArray = []
//     if (array.result === "W") {
//         //console.log(array.year)
//         return array.year
//         //newArray = array.push(array.year)
//     }
// }






// function superbowlWin2(myArray) {
//     const winOrLoss = myArray.result
//     if (winOrLoss === "W") {
//         console.log(myArray.year)
//         return myArray.year
//     }
// }    

//console.log(superbowlWin2(record))



// console.log(superbowlWin(record))



// *** Console.log in function returns correct year
// *** console.log when invoked returns undefined

// function superbowlWin(myArray) {
//     let yearOfWin = null
//     const winOrLoss = myArray.result
//     if (winOrLoss === "W") {
//         //console.log(myArray.year)
//         yearOfWin = myArray.year
//     }
//     return yearOfWin
// }







// function superbowlWin(myArray) {
//     for (element of myArray) {
//         const winOrLoss = myArray.result
//         if (winOrLoss === "W") {
//             console.log(myArray.year)
//             return myArray.year
//         }
//     }
// }

//console.log(superbowlWin(record))
// it should use find() to test each Object to see if the result = "W"



//console.log(superbowlWin(record))
// console.log(record.find())

// function superbowlWin(myArray) {
//     for (element of myArray) {
//         const winOrLoss = element.result;
//         if (myArray.find(winOrLoss) === "W") {
//             //console.log(element.year)
//             return element.year;
//         }
//     }
// }





// function superbowlWin(winOrLoss) {
//     for (const array of winOrLoss) {
//         if (array.key === "w") {
//             return array.key;
//         } 
//     }    
// }

// const superbowlWin = (array) => {
//    if (array.element === "w") {
//        return array;
//    }
// }

// const objKeys = Object.keys(record)
// const objValues = Object.values(record)
// const objEntries = Object.entries(record)

// function superbowlWin (array) {
//     const winOrLoss = array.result
//     if (winOrLoss === "W") { 
//        return array.year
//     }
    
// }









