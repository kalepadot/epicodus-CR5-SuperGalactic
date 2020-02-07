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
    let user = new UserAge();
    expect(user.venus()).toEqual();
  });
});