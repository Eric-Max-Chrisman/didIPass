import express, { Express } from 'express';
import { placeHolder } from './controllers/studentController';

const app: Express = express();
const PORT = 8091;
app.use(express.json());

// Create Student - TODO
app.post('/api/students', placeHolder);

// Get Student Data - TODO
app.get('/api/students/:studentName', placeHolder);

// Get Final - TODO
app.get('/api/students/:studentName/finalExam', placeHolder);

// Calculate Student Overall Grade - TODO
app.post('/api/students/:studentName/finalExam', placeHolder);

// Update/Add Student Grade
app.post('/api/students/:studentName/grade/:assignmentName', placeHolder);

app.listen(PORT, () => {
  console.log(`Using Port ${PORT}`);
});
