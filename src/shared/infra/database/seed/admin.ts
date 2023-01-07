import { hash } from "bcryptjs";
import { v4 as uuidV4 } from "uuid";

import createConnection from '../'

async function create() {
  const connection = await createConnection('localhost')

  const id = uuidV4()
  const hashedPassword = await hash('lufaardala', 8)

  await connection.query(
    `INSERT INTO
    users(id, name, password, email, driver_license, "isAdmin", created_at)
    VALUES('${id}', 'Artur Peixoto', '${hashedPassword}', 'arturminelli@gmail.com', '12345678', true, 'now()')`
  )

  await connection.close()
}

create().then(() => console.log('Admin user created'))
