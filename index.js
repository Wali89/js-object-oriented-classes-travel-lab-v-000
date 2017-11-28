class Driver {
  constructor(name, dateJoined) {
    this.name = name;
    this.startDate = new Date(dateJoined);
  }

  yearsExperienceFromBeginningOf(dateExp) {
    return new Date(dateExp).getFullYear() - this.startDate.getFullYear();

  }
}
