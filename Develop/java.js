var setDate = document.querySelector('.now');
var current = moment().format('llll'); 
console.log(current);
var hour = moment().format('LT');

var future = moment('2016-03-12 08:00:00').add(1, 'hours').format('LLL');
console.log(future);

// var a = moment('2016-01-01'); 
// var b = a.clone().add(1, 'week'); 
// a.format();
// console.log(a);
// console.log(b);