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
  $(document).on('keydown', function(key) {
  if(key.which == 71){
      window.alert("Your form is going to be submitted now.");
  }
});
}
