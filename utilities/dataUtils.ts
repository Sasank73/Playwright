import { faker } from "@faker-js/faker";

export function employDetails() {
  const firstName = `${faker.word.noun()}_Name`;
  const middleName = `${faker.word.noun()}_Name`;
  const lastName = `${faker.word.noun()}_Name`;
  const employeeId = `EMP-${faker.number.float({
    min: 100,
    max: 999,
    fractionDigits: 2,
  })}`;
  const userName = `${faker.internet.userName()}_Name`;
  const password = `${faker.internet.password()}_Name`;
  return { firstName, middleName, lastName, employeeId, userName, password };
}

export function locationDeatils() {
  const name = faker.location.city();
  const latitude = faker.location.latitude();
  const longitude = faker.location.longitude();
  return { name, latitude, longitude };
}
