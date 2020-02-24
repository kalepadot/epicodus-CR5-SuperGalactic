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
    return Math.round(80 - this.age);
  }

  planetExpect() {
    return {
      mercury: Math.round(this.lifeExpect() / .24),
      venus: Math.round(this.lifeExpect() / .62),
      mars: Math.round(this.lifeExpect() / 1.88),
      jupiter: Math.round(this.lifeExpect() / 11.86)
    };
  }
}