//WHEN user clicks on .button
  //dropdown menu appears

//WHEN user clicks on.button again
  //dropdown menu slides up and disapears

  $('#openDropdown').on('click', function(){
    $('#dropdownMenu').slideToggle(300);
  });

//WHEN user clicks on how can i reach you
    //show answer 2 and hide answer 1
    //change background color to yellow

//WHEN user clicks on what are your hours?
    //show answer 1 and hide answer 2
    //change background color to yellow

  $('#question2').on('click', function(){
    $('#answer1').slideUp();
    $('#answer2').slideDown();
    $('#question2').addClass('active');
    $('#question1').removeClass('active');
  });

  $('#question1').on('click', function(){
    $('#answer1').slideDown();
    $('#answer2').slideUp();
    $('#question1').addClass('active');
    $('#question2').removeClass('active');
  });

  //WHEN user clicks on show only yellow
      //hide blue circles
      //show yellow circles

  //WHEN user clicks on show only blue
      //show blue circles
      //hide yellow circles

  $('#showYellowCircles').on('click', function(){
    $('.blue').hide();
    $('.yellow').show();
  });

  $('#showBlueCircles').on('click', function(){
    $('.blue').show();
    $('.yellow').hide();
  });
