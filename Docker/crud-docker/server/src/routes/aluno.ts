import { Router } from "express";
import { AlunoController as AlunoController } from "../controllers";
const routes = Router();

routes.get('/historic', AlunoController.getHistoricAluno);
routes.get('/specific/:uuid', AlunoController.getAluno);

routes.post('/create', AlunoController.postAluno);

routes.put('/modify/:uuid', AlunoController.putAluno);

routes.delete('/delete/:uuid', AlunoController.deleteAluno);

export default routes;

