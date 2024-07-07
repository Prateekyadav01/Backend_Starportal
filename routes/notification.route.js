import {Router} from 'express'
import { authMiddleWare } from '../middleware/auth.middleware.js';
import { anyNotification, notificationCreate, notificationGetAll, notificationGetById } from '../controllers/notification.controller.js';


const router = Router();

router.route('/notifications').post(authMiddleWare,notificationCreate);
router.route('/notifications').get(authMiddleWare,notificationGetAll);
router.route('/notifications/:id').get(authMiddleWare,notificationGetById);
router.route('/notifications/:id').put(authMiddleWare,anyNotification);

export default router;