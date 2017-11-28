class Driver {
  constructor(name, dateJoined) {
    this.name = name;
    this.startDate = new Date(dateJoined);
  }

}

yearsExperienceFromBeginningOf() = function (dateExp, object) {
  return new Date(dateExp) - object.startDate;
}