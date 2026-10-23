import { faker } from "@faker-js/faker";

import db from "#db/client";
import { createEmployee } from "./queries/employees.js";

await db.connect();
await seedEmployees();
await db.end();
console.log("🌱 Database seeded.");

async function seedEmployees() {
  // TODO
  for (let i = 0; i < 10; i++) {
    const employee = {
      name: faker.person.firstName(),
      birthday: faker.date.past({ years: 65 }),
      salary: faker.finance.amount({ min: 65000, max: 400000, dec: 0 }),
    };
    await createEmployee(employee);
  }
}
