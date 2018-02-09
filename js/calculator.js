export class BirthDate{
  constructor(birthDate) {
    this.birthDate = birthDate;
  }
  // function getAge(dateString){
  //   let today = new Date();
  //     const birthDate = new Date(dateString);
  //     const age = today.getFullYear() - birthDate.getFullYear();
  //     const m = today.getMonth() - birthDate.getMonth();
  //     if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
  //         age--;
  //     }
  //     return age;
  // }

  function(dateString) {
  var birthday = +new Date(dateString);
  return ~~((Date.now() - birthday) / (31557600000));
}
}
