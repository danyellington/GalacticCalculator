export class Match{
  constructor(name, gender, phone, preference, description) {
    this.name = name;
    this.gender = gender;
    this.phone = phone;
    this.preference = preference;
    this.description = description;
  }

genderArray() {
  let maleArray = [];
  let femaleArray = [];
  {
  if (this.gender === "male") {
    maleArray.push(match);
  } else if (this.gender === "female") {
    femaleArray.push(match);
  }
}
}




prefence(){
  if (this.preference === "Man") {
    return maleArray;
  }else {
    return femaleArray;
  }
}
}
