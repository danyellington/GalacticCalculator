$(document).ready(function(){

  $('#age').submit(function(event){
    var age = $('#age').val();
    $('#results').text(age);
    event.preventDefault();
  });
});
