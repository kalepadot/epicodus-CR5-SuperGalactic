// Business Logic
// export function 
export class UserAge {
  constructor(age, planet) {
  this.age = age;
  this.planet = planet;
  this.expect = expect;
}

  mercury() {
    this.planet = .24;
    const mercuryAge = Math.round(this.age / this.planet);
    return mercuryAge;
  }

  venus() {
    this.planet = .62;
    const venusAge =  Math.round(this.age / this.planet);
    return venusAge;
  }

  mars() {
    this.planet = 1.88;
    const marsAge = Math.round(this.age / this.planet);
    return marsAge;
  }

  jupiter() {
      this.planet = 11.86;
      const jupiterAge = Math.round(this.age / this.planet);
      return jupiterAge;
  }
  lifeExpectancy() {
    // this.expect = 80;
    // if (this.age === 80) {
    //   return ("Be Careful!");

    }
  


}