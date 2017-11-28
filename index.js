class Driver {
  constructor(name, dateJoined) {
    this.name = name;
    this.startDate = new Date(dateJoined);
  }

  yearsExperienceFromBeginningOf(dateExp) {
    return Math.abs(new Date(dateExp) - this.startDate);
  }
}
