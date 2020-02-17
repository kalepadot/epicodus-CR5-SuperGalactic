// Business Logic
// export function 
export class UserAge {
  constructor(age) {
    this.age = age;

  }

  mercury() {
    let mercuryAge = Math.round(this.age / .24);
    return mercuryAge;
  }

  venus() {
    let venusAge =  Math.round(this.age / .62);
    return venusAge;
  }

  mars() {
    let marsAge = Math.round(this.age / 1.88);
    return marsAge;
  }

  jupiter() {
    let jupiterAge = Math.round(this.age / 11.86);
      return jupiterAge;
  }

  lifeExpect() {
   let lifeExpect = Math.round(80 - this.age);
      return lifeExpect;
  }

  planetExpect() {
    planetExpect.mercury = Math.round(lifeExpect / .24);
    planetExpect.venus = Math.round(lifeExpect / .62);
    planetExpect.mars = Math.round(lifeExpect / 1.88);
    planetExpect.jupiter = Math.round(lifeExpect / 11.86);
  }

}