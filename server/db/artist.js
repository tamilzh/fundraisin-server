import { Level } from 'level'
import { v4 as uuidv4 } from "uuid";
// Create a database
const db = new Level(`/tmp/artist-site${process.env.APP_SITE_ID || uuidv4()}-db`, { valueEncoding: 'json' })

export default db;