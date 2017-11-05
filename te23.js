
function start() {

  const total = [0, 1, 2, 3].reduce(function(sum, value) {
    console.log(value);
    return sum + value;
  }, 10);
  console.log(total);
  var p1 = Promise.resolve(3);
  var p2 = 1337;
  var p3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 200, 'foo');
});
  Promise.all([p1, p2, p3]).then(values => {
    console.log(values); // [3, 1337, "foo"]
});
  let date = getDate();

}

function getDate() {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, 200, 'foo');
  });
}
start();
function getArrayOfDates(){
  let arr= [];
  arr.push("test1");
  arr.push("tes3");
  var sequence = Promise.resolve();
  arr.forEach(function (element) {
    sequence = sequence.then(function () {
      return getDate(element);
    })
  });

  const total = [0, 1, 2, 3].reduce(function(sum, value) {
    return sum + value;
  }, 1);
}
