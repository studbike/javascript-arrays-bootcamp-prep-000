var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]


function addElementToBeginningOfArray(array, element){
  return [element, ...arr]
}

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element)
}

function addElementToEndOfArray(array, element){
  return [...array, element]
}

function destructivelyAddElementToEndOfArray(array, element){
  return array.push(element)
}
