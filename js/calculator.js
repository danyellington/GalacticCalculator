export class BirthDate{
  constructor(birthDate) {
    this.birthDate = birthDate;
  }
  // function getAge(dateString){
  //   let today = new Date();
  //     var birthDate = new Date(dateString);
  //     var age = today.getFullYear() - birthDate.getFullYear();
  //     var m = today.getMonth() - birthDate.getMonth();
  //     var d = today.getDay() - birthDate.getDay();
  //     if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
  //         age--;
  //     }
  //     return age;
  // }

//   function(dateString) {
//   var birthday = +new Date(dateString);
//   return ~~((Date.now() - birthday) / (31557600000));
// }


// function age() {
//   const birthday = new Date(document.getElementById("birthday").val());
//   let today = (new Date().getTime());
//   let age = today - (birthday.getTime());
//
// }

function ageInSeconds() {
this.birthDate * 365 = ageInDays;
let ageInHours = ageIndays * 24;
let ageInMinutes = ageInHours * 60;
let ageInSeconds = ageInMinutes * 60;
return ageInSeconds;
}

function ageOnMercury() {
  let ageInMinutes = ageInSeconds / 60;
  let ageInHours = ageInMinutes / 60;
  let ageInDays = ageInHours / 24;
  let ageOnMercury = ageInDays * 88;
  return ageOnMercury;
}













}
