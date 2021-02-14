// Your code here
const mapToNegativize = function (sourceArray) {
    return sourceArray.map(int => {
        return int*-1 
    })
}

const mapToNoChange = function(array){
    return array.map(item => {
        return item
    })
}

const mapToDouble = function(array){
    return array.map(num => {
        return num*2
    })
}

const mapToSquare = function(array){
    return array.map(num => {
        return num * num
    })
}

const reduceToTotal = function(array, startingPoint=0){
    let total = startingPoint
    for (let i = 0; i < array.length; i++){
        total = total + array[i]
    }  
    return total
}

const reduceToAllTrue = function(array){
    let result = true
    for(let i = 0; i < array.length; i++){
        if (array[i] === false){
            result = false
        }
    }
    return result
}

const reduceToAnyTrue = function(array){
    let result = false
    for(let i = 0; i < array.length; i++){
        if(array[i] === true){
            result = true
        }
    }
    return result
}