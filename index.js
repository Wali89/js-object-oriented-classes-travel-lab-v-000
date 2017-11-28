class Driver {
  constructor(name, dateJoined) {
    this.name = name;
    this.dateJoined = dateJoined;
  }
}

startDate() {
  return Date.parse(this.dateJoined);
}

