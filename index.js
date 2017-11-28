class Driver {
  constructor(name, dateJoined) {
    this.name = name;
    this.startDate = new Date(dateJoined);
  }

  yearsExperienceFromBeginningOf(dateExp) {
    let diff = (new Date(dateExp) - this.startDate)/1000;
    diff /= (60*60*24);
    return Math.abs(Math.round(diff/365.25));
  }
}
