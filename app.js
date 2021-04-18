alert('Welcome to our humble page');


var baskLeague = prompt('please, what kind of basket league you are interested in. nba or ELB')


var NBA = '<img src="https://theundefeated.com/wp-content/uploads/2017/06/nbalogo.jpg?w=1024">';


var ELB = '<img src="https://www.euroleague.net/rs/73mvliaerbwhaa3m/a180d37b-8f1c-4d7f-869b-955efab3716f/99d/filename/eb-logo-white-horizontal.png">';

var basketT = function() {
if (baskLeague == 'NBA') {
  document.write('<img src="https://theundefeated.com/wp-content/uploads/2017/06/nbalogo.jpg?w=1024">');
} else if (baskLeague == 'ELB') { document.write('<img src="https://www.euroleague.net/rs/73mvliaerbwhaa3m/a180d37b-8f1c-4d7f-869b-955efab3716f/99d/filename/eb-logo-white-horizontal.png">'); }
console.log('NBA IS THE BEST')
}

basketT ( );


// ask about who is the best player among these three players. Curry, James and  Harden. 

var bestP = prompt('who is the best player in the world?')

// identifying the names with images 

var curry = '<img src="https://images-na.ssl-images-amazon.com/images/I/91hSkMAZUVL._AC_SL1500_.jpg">';
var james = '<img src="https://www.thesun.co.uk/wp-content/uploads/2020/10/41c988e9-5996-4aa1-ba3e-a77c85f2680c.jpg">';
var harden = '<img src="https://cdn.theathletic.com/app/uploads/2020/12/22080527/GettyImages-1271839100-2-1024x715.jpg">';


// Validator
var userChoose='' ;

function bestPp () {
while (bestP !== 'curry' && bestP !== 'james' && bestP !== 'harden') {
  bestP = prompt('Please enter the name curry or james or harden');
}

if (bestP == 'curry' && bestP == 'Curry') {
  userChoose = '<img src="https://images-na.ssl-images-amazon.com/images/I/91hSkMAZUVL._AC_SL1500_.jpg">';
} else if (bestP == 'james' || bestP == 'James') {
  userChoose = '<img src="https://www.thesun.co.uk/wp-content/uploads/2020/10/41c988e9-5996-4aa1-ba3e-a77c85f2680c.jpg">';
} else if (bestP == 'harden') {
  userChoose = '<img src="https://cdn.theathletic.com/app/uploads/2020/12/22080527/GettyImages-1271839100-2-1024x715.jpg">';
}
console.log('Curry is the best play')
}

bestPp () ;

var bestP = prompt('How many image do you want???');

for (var i = 1; i <= bestP ; i++) {
document.write(userChoose);}




