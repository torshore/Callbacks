// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
  arr.forEach(found);
}

  // for (var i = 0; i < arr.length; i++)
  //   if (arr[i] === "Waldo") {
  //     found(i);


function actionWhenFound(value,index) {
  if (value === "Waldo")
  console.log("Found Waldo at index: " + index);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);
//receiver                                      //callback


// arr.forEach(function callback(currentValue, index, array) {
//     //your iterator
// }[, thisArg]);