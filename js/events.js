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
