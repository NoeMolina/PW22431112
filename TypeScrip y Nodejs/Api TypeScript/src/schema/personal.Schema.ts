import {z} from 'zod'

//validaciones con zod - construir un esquema

export const personalSchema = z.object({
    nombre:z.string().min(2,"Minimo 10 caracteres").max(200,"maximo 200 caracteres"),
    direccion:z.string().min(2).max(300),
    telefono:z.string().min(10).max(10),
    estatus:z.number().int().positive()
   // estatus:z.number().int().positive().min(1).max(2,"Los valores correctos son 1 y 2")
}).refine(data => data.direccion == "tec de culiacan", {
    message: "la direccion debe ser del tec de culiacan",
    path:["direccion"]
}).refine(data => data.estatus <=2,{
    message: "Los valores correctos deben  ser 1(vigente) o 2(baja)",
    path:["estatus"]
})
 