function getIt(){
  $('p').on('click',function (){

  })
}

function frameIt(){
  $('img').on('load', function(){
  //actions you want to happen
  $('img').append('#tasty')
})
}

function submitIt(){
  $('#typing').on('keydown', function() {
    window.alert('Your form is going to be submitted now.');
  if(key.which == 71){
      window.alert('Your form is going to be submitted now.');
  }
});
}
