import express from 'express';
import { verifyToken } from '../middleware/authMiddleware.js'; 
import { checkRole } from '../middleware/roleMiddleware.js'; 
// routers/userRoutes.js
import { postUser,getAllUsers } from '../controller/employeeUser'; // Importing from your controller
import { Login } from '../controller/contLogin.js'; // Importing from your controller
import { postRecipe ,getRecipe} from '../controller/contRecipe.js';

const router = express.Router();

// POST endpoint to add an employee
router.post('/user', verifyToken, checkRole(['post_user', 'update_user', 'delete_user']), postUser);
router.post('/recipes', verifyToken, checkRole(['post_user','post_recipe', 'delete_recipe', 'delete_user','update_recipe']), postRecipe);
router.get('/recipes', verifyToken, checkRole(['post_user','post_recipe', 'delete_recipe', 'delete_user','update_recipe']), getRecipe);
//router.post('/recipe', postRecipe);
//router.post('/user',postUser);
router.get('/user', getAllUsers);
router.post('/login', Login);
//router.post('/l', Login);



// GET endpoint to retrieve all employees
//router.get('/user-info', getUser);



export default router; 