var chocolateBars = ["snickers","hundred grand","kitkat","skittles"]
 function addElementToBeginningOfArray (array, name) {
  return [name, ...array]
 }
 function destructivelyAddElementToBeginningOfArray (array, name) {
   array.unshift(name)
   return array
 }
function addElementToEndOfArray (array, name) {
  return [...array, name]

}
function destructivelyAddElementToEndOfArray(array, name) {
  array.push(name)
  return array
}
function accessElementInArray (array,name) {
  return (array[2]);

}
function destructivelyRemoveElementFromBeginningOfArray(array, name) {
  array.shift(name)
  return array
}
function removeElementFromBeginningOfArray(array, name) {
  array= array.slice(1)
  return array
}
function destructivelyRemoveElementFromEndOfArray(array, name) {
  array.pop()
  return array
}
function removeElementFromEndOfArray (array, name) {
  array=array.slice(0,array.length-1)
  return array
}
