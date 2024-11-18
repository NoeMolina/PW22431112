import express, {Request, Response} from 'express';
import * as personalService from '../services/personalServices';
//activamos las rutas
const router = express.Router();


//http://localhost:3001/api/personal/ <------
router.get('/', async (_req: Request,res: Response) =>{
    let personal = await personalService.obtienePersonal();
    res.send(personal);
})
//http://localhost:3001/api/personal/1 <------ numero de id del personal
router.get('/:id', async (req: Request,res: Response) =>{
   let personal = await personalService.encuentraPersonal(Number(req.params.id));
   res.send(personal);
})

router.post('/', async (req: Request, res:Response) => {
    try {
        const {nombre,direccion,telefono,estatus} = req.body;
        const nuevo = await personalService.agregarPersonal({
            nombre,
            direccion,
            telefono,
            estatus
        });
        res.send(nuevo);
    } catch (error) {
        res.status(400).send('No se puede agregar el personal. Error en los datos');
    }
})
//modificar datos
router.put('/',async(req:Request,res:Response) =>{
    try {
        const {id,nombre,direccion,telefono,estatus}  = req.body;
        const modificado = await personalService.modificarPersonal({
            id,
            nombre,
            direccion,
            telefono,
            estatus
        })    
        res.send(modificado)
    } catch (error) {
        res.status(400).send("Error en los datos")
    }
})

//eliminar o borrar los datos de personal
router.delete('/', async (req:Request,res:Response) => {
    try {
        const{id} = req.body;
        const eliminado = await personalService.borrarPersonal(Number(id));
        res.send(eliminado)
    } catch (error) {
        res.status(400).send("Error en los datos")
    }
})


export default router