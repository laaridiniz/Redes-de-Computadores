import { Request, Response } from 'express';
import { Aluno } from "../entities/Aluno";

var data =[
    {id: 1, nome: "Ana", email: "ana@email.com", curso: "ADS"},
    {id: 2, nome: "Beatriz", email: "beatriz@email.com", curso: "ADS"},
    {id: 3, nome: "Carlos", email: "carlos@email.com", curso: "DSM"},
    {id: 4, nome: "Raul", email: "raul@email.com", curso: "DSM"},
    {id: 5, nome: "Larissa", email: "larissa@email.com", curso: "ADS"},
]
var idGlobal = 5;

class AlunoController {

    public async getHistoricAluno (req: Request, res: Response) : Promise<Response> {
        return res.json(data)
    }

    public async getAluno (req: Request, res: Response) : Promise<Response> {
        return res.json(data)
    }

    public async postAluno (req: Request, res: Response) : Promise<Response> {

        const createAluno = req.body
        
        idGlobal++
        var d = {
            id: idGlobal,
            nome :createAluno.nome,
            email : createAluno.email,
            curso : createAluno.curso}
     
        data.push(d)
        return res.json(data)
     
    }

    public async putAluno (req: Request, res: Response) : Promise<Response> {
        const createAluno = req.body
        const idAluno:any = req.params.uuid

        var aluno = data.filter(aluno => aluno.id === idAluno)[0]
        var index = data.indexOf(aluno)

        data[index] = {
            id:idAluno,
            nome :createAluno.nome,
            email : createAluno.email,
            curso : createAluno.curso}
        
        return res.json(data)
    }

    public async deleteAluno (req: Request, res: Response) : Promise<Response> {
        const idAluno:any = req.params.uuid
        data = data.filter(aluno => aluno.id !== idAluno)
        return res.json(data)
    }

}
export default new AlunoController();