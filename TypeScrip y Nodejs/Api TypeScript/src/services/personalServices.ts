import mysql from 'mysql2/promise';
import {Personal,PersonalNuevo} from '../typesPersonal'
import { personalSchema } from '../schema/personal.Schema';
const conexion = mysql.createPool({
    host: "localhost",
    user: "pw",
    password: "pw2024",
    database:"pw2024"
});

export const obtienePersonal = async () =>{
    try {
        const [results] = await conexion.query('select * from personal');
        return results;
    } catch (error) {
        return {error: "no se puede obtener el personal"};
    }
}

export const encuentraPersonal = async (id:number) =>{
    try {
        const [results] = await conexion.query('SELECT * FROM PERSONAL WHERE id = ? LIMIT 1', id)
        return results;
    } catch (error) {
        return{error: "No se encuentra ese personal"}
    }
}

export const agregarPersonal = async(nuevo:PersonalNuevo) =>{
    try {
        const validacion = personalSchema.safeParse(nuevo);
        if (!validacion.success) {
            return{error: validacion.error}
        }
        const [results] = await conexion.query('INSERT INTO personal(nombre, direccion,telefono,estatus) values (?,?,?,?)',[nuevo.nombre, nuevo.direccion, nuevo.telefono,nuevo.estatus])
        return results;
    } catch (error) {
        return {error: "No se puede agregar al personal"}
    }
}

export const modificarPersonal = async (modificado: Personal) => {
    try {
        const [result] = await conexion.query(
            'UPDATE personal SET nombre = ?, telefono = ?, direccion = ?, estatus = ? WHERE id = ?',
            [modificado.nombre, modificado.telefono, modificado.direccion, modificado.estatus, modificado.id]
        );
        return result;
    } catch (error) {
        return { error: "No se puede modificar" };
    }
}

export const borrarPersonal = async (id:number) =>{
    try {
        const[results] =  await conexion.query('DELETE FROM personal WHERE id=?', [id])
        return results;
    } catch (error) {
        return {error:"No se puede borrar el personal"}
    }
}