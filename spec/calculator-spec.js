import {BirthDate} from "./../js/calculator.js";

describe('BirthDate', function(){
  it('should find user age', function(){
    var birthday = new Date();
    expect(birthday).toEqual(birthday);
  });

  // it('should add match to gender array', function(){
  //   var match = new Match("Ted","Male","5035152234","Female","Hit it and quit it");
  //   var matchUpdate = match.genderArray();
  //   console.log("test" +matchUpdate);
  //   expect(matchUpdate).toEqual(["Ted"]);
  // });
});
