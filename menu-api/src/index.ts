/**
 * Required External Modules
 */

import * as dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { POINT_CONVERSION_COMPRESSED } from 'constants';

const app = express();

dotenv.config();

/**
 * App Variables
 */

 // check if the application loaded the env variable PORT. If not, keep running.
if(!process.env.PORT) {
    process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

console.log(PORT)

/**
 * App Configuration
 */

app.use(helmet());
app.use(cors());
app.use(express.json());

/**
 * Server Activation
 */

 app.listen(PORT, () => {
     console.log(`Listening on http://localhost:${PORT} :D`);
 })