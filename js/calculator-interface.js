$(document).ready(function(){
  $('#signup').submit(function(event){
    event.preventDefault();
    var birthday = $('#birthday').val();
    $('#results').text(birthDate);
  });
});
