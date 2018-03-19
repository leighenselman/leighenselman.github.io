// When the screen size is less than or equal to 800px then show the hamburger menu
  //if the user clicks on the hamberger menu
    //show navigation list
  //ELSE
    //leave as is

$('.hamburger').on('click', function(event){
  $('nav').slideToggle('slow');
  console.log('hello');
});

//For the Gallery page create a variable to count which click we are on

//When user clicks on 'next' button, we are going to increment the counter variable by '1'
  //IF counter variable is less <10, increment by 1
  //ELSE start back at 0

//When user clicks on 'previous' button, we are going to decrease the counter variable by '1'
    //IF counter variable is less <=10, decrease by 1
    //ELSE start back at 3

//For the Contact Us page
//When user clicks on 'send' button, send information from form to email provided
