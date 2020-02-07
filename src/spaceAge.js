// Business Logic
// export function 
export class UserAge {
  constructor(age, planet) {
  this.age = age;
  this.planet = planet;
}

mercury() {
  this.planet = .24;
  const mercuryAge = (this.age / this.planet);
  return mercuryAge;
}
venus() {
  this.planet = .62;
  const venusAge =  Math.round(this.age / this.planet);
  return venusAge;
}

}