import {Match} from "./../js/valentine.js";

describe('Match', function(){
  it('should add Match to array', function(){
    var match = new Match("Ted","Male","5035152234","Female","Hit it and quit it");
    expect(match.name).toEqual("Ted");
  });
});
