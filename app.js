//alert 

alert('Welcome to our humble page');

// typing your favo team

var baskLeague = prompt('please, what kind of basket league you are interested in. nba or ELB')

//NBA stands for National Basketball Associate 

var NBA = '<img src="https://theundefeated.com/wp-content/uploads/2017/06/nbalogo.jpg?w=1024">';

//ELB stands for Europe League basketball

var ELB = '<img src="https://www.euroleague.net/rs/73mvliaerbwhaa3m/a180d37b-8f1c-4d7f-869b-955efab3716f/99d/filename/eb-logo-white-horizontal.png">';

if (baskLeague == 'NBA') {
  document.write('<img src="https://theundefeated.com/wp-content/uploads/2017/06/nbalogo.jpg?w=1024">');
} else if (baskLeague == 'ELB') { document.write('<img src="https://www.euroleague.net/rs/73mvliaerbwhaa3m/a180d37b-8f1c-4d7f-869b-955efab3716f/99d/filename/eb-logo-white-horizontal.png">') ; }

