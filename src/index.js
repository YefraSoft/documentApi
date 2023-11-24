import exp from "express";
import proceduresRoutes from './routes/procedures.routes.js';
import employeesRouter from './routes/teacher.routes.js';
const app = exp();
app.listen(3000);
app.use(exp.json());
app.use(employeesRouter);
app.use(proceduresRoutes);
