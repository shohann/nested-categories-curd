import express from 'express';
import { getPort } from './api/utils/appConfigs';
import categoryRouter from './api/routes/categoryRoutes';

const port: number = getPort();
const app = express();

app.use(express.json());
app.use('/api/categories', categoryRouter);

app.listen(port, () => {
    console.log(`Server started on port: ${port}`);
});