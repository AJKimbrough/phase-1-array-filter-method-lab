// Code your solution here

const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
/*
function filter(array, cb){
    let newArray = []
    for(const driver of array){
        if(cb(driver)){
            newArray.push(driver)
        }
    }
    return newArray
}
*/

function findMatching(array, string){
    let newArray = []
    for(const driver of array){
        if(driver.toUpperCase() === string.toUpperCase()){
            newArray.push(driver)
            
        }
    }
    return newArray
}

function fuzzyMatch(array, string){
    let newArray = []
    for(const driver of array){
        if(driver.startsWith(string)){
            newArray.push(driver)
        }
    }
    return newArray
}

function matchName(array, string){
    let newArray = []
    for(const driver of array){
        if(driver.name === string){
            newArray.push(driver)
        }

    }
    return newArray
}




//console.log(findMatching(drivers, "Bobby"))
console.log(fuzzyMatch(drivers, "Sa"))



