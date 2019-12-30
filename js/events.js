function getIt(){
  $('p').on('click',function (){
    window.alert("Hey!")
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
  if(key.which == 71){
      window.alert('Your form is going to be submitted now.');
  }
});
}
