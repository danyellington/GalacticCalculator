import {Match} from "./../js/valentine.js";

describe('Match', function(){
  it('should find match user', function(){
    var match = new Match("Ted","Male","5035152234","Female","Hit it and quit it");
    expect(match.name).toEqual("Ted");
  });

  it('should add match to gender array', function(){
    var match = new Match("Ted","Male","5035152234","Female","Hit it and quit it");
    var matchUpdate = match.genderArray();
    console.log("test" +matchUpdate);
    expect(matchUpdate).toEqual(["Ted"]);
  });
});
