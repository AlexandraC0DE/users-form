// import axios from 'axios';
import { useForm } from 'react-hook-form';
import {  useState }  from 'react';
import '../css/UsersForm.css';
import axios from 'axios';


const defaultValues = { first_name: "", last_name: "", birthday: "", email: "", password: "" }

const UserForm = ({ getUsers }) => {


    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        mode: 'onTouched'
    });
   
    const onSubmit = user => {
        console.log(user);
        reset(defaultValues);
    
    axios.post('https://users-crud1.herokuapp.com/users/', user)
        .then(() => getUsers());
    }
   
    
    //Estado mostrar/ocultar password
    const [ passwordEye, setPasswordEye ] = useState(false);

    const handlePasswordClick = () => {
        setPasswordEye(!passwordEye);
    }

    return (
        <div className='container-form'>

            <h2 className='add-users'>Nuevo usuario</h2>
            <form className='form' onSubmit={handleSubmit(onSubmit)}>
                
                <div>
                    <label>Nombre</label>
                    <input 
                        type="text" {...register('first_name', {
                        required: true
                    })}/>
                </div>

                <div>
                    <label>Apellido</label>
                    <input
                         type="text" {...register('last_name', {
                         required: true
                    })} />
                </div>

                <div>
                    <label>Fecha de nacimiento</label>
                    <input
                        type="date" {...register('birthday', {
                        required: true
                    })} />
                </div>

                <div>
                    <label>Email</label>
                    <input
                         type="text" {...register('email', {
                         required: true,
                         pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i //validación email
                        })} />
                    {errors.email?.type === 'pattern' && <p>El formato del email es incorrecto</p>}
                </div>

                <div>
                    <label>Contraseña</label>
                    <input
                         type={(passwordEye === false) ? 'password' : 'text' }
                         autoComplete="current-password"
                         {...register('password', { required: true,
                        maxLength: 8,
                    })} />
                    {
                        (passwordEye === false) ?  
                        <i className="fa-solid fa-eye" onClick={handlePasswordClick}></i> 
                        :
                        <i className="fa-solid fa-eye-slash" onClick={handlePasswordClick}></i>
                    }
                    <span>
                    {errors.password?.type === 'required' && <p className='error-one'>Debe rellenar todos los campos</p>}
                    {errors.password?.type === 'maxLength' && <p className='error-two'>La contraseña debe ser de 8 caracteres</p>}
                    </span>

                </div>
                <input className='input-btn' type="submit" value="Agregar nuevo usuario"/>
                
            </form>
        </div>
    );
};

export default UserForm;