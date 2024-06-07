import { object, string, ref, array } from 'yup';

let userSchema = object({
    nombre: string()
    .required("El nombre es obligatorio")
    .matches(/^[A-Za-z\s]+$/, "El nombre solo puede contener letras y espacios"),
    telefono:string()
    .required("El telefono es obligatorio")
    .matches(/^[0-9]+$/, "El telefono solo debe contener números"),
    email: string()
    .required("El email es obligatorio")
    .email("El email no es valido"),
    confirmarEmail: string()
    .required("Confirmar el email es obligatorio")
    .oneOf([ref('email'), null], "Los correos electrónicos deben coincidir"),
    carrito: array().min(1, 'El carrito no puede estar vacío')
    
})

const validarFormulario = async (formulario) => { 
    try {
        await userSchema.validate(formulario)
        return {status: "Exito"}
    } catch (error) {
        return {status: "Error", message: error.message}
    }
 }


export default validarFormulario;