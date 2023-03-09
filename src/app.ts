import express from 'express';
import { getPort } from './api/utils/appConfigs';

const port: number = getPort();
const app = express();

app.listen(port, () => {
    console.log(`Server started on port: ${port}`);
});