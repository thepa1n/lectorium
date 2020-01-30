import 'dotenv/config';
import express from 'express';

import { ApiRouter } from '@routes/api';
import { appConfig } from '@config/app';
import { initiateDbConnection } from '@db/connection';

const { PORT } = appConfig;
const app = express();
initiateDbConnection();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', ApiRouter);

app.listen(PORT, () => {
  console.log(`Server started at ${PORT}`);
});

export default app;
