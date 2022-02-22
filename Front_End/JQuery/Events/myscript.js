//api.jquery.com

//Clicks
// $('h1').click(function(){
//   console.log("There was a click.");
// })

$('li').click(function() {
  //this keyword will refer to the target item you are clicking
  $(this).text("I was changed!!")
})

$('li').click(function() {
  console.log('any li was clicked');
})

//Key Press
$('input').eq(0).keypress(function(event) {
  if (event.which === 13) {
    $('h3').toggleClass('turnBlue')
  }
})

//.on Method
//Acts like oneventlistener from vanilla JS
$('h1').on('mouseenter', function() {
  $(this).toggleClass('turnBlue');
})

//Events and animations
$('input').eq(1).on('click',function() {
  $('.container').slideUp(3000)
})
