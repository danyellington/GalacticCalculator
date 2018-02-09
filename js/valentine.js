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
  if (this.gender == "Male") {
    maleArray.push(this.name);
    return maleArray;
  } else if (this.gender == "female") {
    femaleArray.push(this.name);
    return femaleArray;
  }
}

preference(){
  if (this.preference === "Man") {
    return maleArray;
  }else {
    return femaleArray;
  }
}
}
