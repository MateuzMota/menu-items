/**
 * Required External Modules
 */

import * as dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { itemsRouter } from './items/items.router';
import { errorHandler } from "./middleware/error.middleware";
import { notFoundHandler } from "./middleware/not-found.middleware";

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
app.use('/api/menu/items', itemsRouter);

app.use(errorHandler);
app.use(notFoundHandler);

/**
 * Server Activation
 */

 app.listen(PORT, () => {
     console.log(`Listening on http://localhost:${PORT} :D`);
 })