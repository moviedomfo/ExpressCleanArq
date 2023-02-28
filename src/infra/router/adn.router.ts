import { Request, Response } from 'express';
import { Router } from 'express';
import container from '../DependenciInjection';
import MutationController from './../controller/mutation.controller';

const router = Router();
const murtationCtrl: MutationController = container.get('MutationController');

router.post('/mutation', async (req: Request, res: Response) =>
  murtationCtrl.Verify(req, res)
);
export { router as adnRouter };
