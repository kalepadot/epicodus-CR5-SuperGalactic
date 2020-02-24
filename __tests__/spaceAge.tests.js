import { UserAge } from "../src/spaceAge";

describe("UserAge", () => {
test("should reconize UserAge", () => {
  // let userAge = new UserAge();
  expect(UserAge).toEqual(UserAge);
  });
});
describe("mercury", () => {
test("should divide age by .24", () => {
  let user = new UserAge(30);
  expect(user.mercury()).toEqual(125);
  });
});
describe("venus", () => {
  test("should divide age by .62", () => {
    let user = new UserAge(30);
    expect(user.venus()).toEqual(48);
  });
});
describe("mars", () => {
  test("should divide age by 1.88", () => {
    let user = new UserAge(30);
    expect(user.mars()).toEqual(16);
  });
});
describe("jupiter", () => {
  test("should divide age by 11.86", () => {
    let user = new UserAge(30);
    expect(user.jupiter()).toEqual(3);
  });
});
describe("lifeExpect", () => {
  test("should subtract user age from 80 to get remaining years left", () => {
    let user = new UserAge(30);
    expect(user.lifeExpect()).toEqual(50);
  });
});
describe("planetExpect", () => {
  test("should get remaining years left on specific planets", () => {
    let user = new UserAge(30);
    let expected = {mercury:208, jupiter:4, mars: 27, venus:81};
    expect(user.planetExpect()).toEqual(expected);
  });
});