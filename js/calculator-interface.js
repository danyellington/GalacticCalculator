$(document).ready(function(){
  $('#signup').submit(function(event){
    event.preventDefault();
    var name = $('#name').val();
    var number = $('#number').val();
    var preference = $('#preference').val();
    var description = $('#description').val();
    var match = $('#name', '#number', '#preference', '#description');
    $('#signup').hide();
    $('#results').show(genderArray);
  });
});
