import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserProvider';

const Register = () => {
	const { registerUser } = useContext(UserContext);
	const navegate = useNavigate();

	const {
		register,
		handleSubmit,
		formState: { errors },
		getValues,
		setError,
	} = useForm();

	const onSubmit = async ({ email, password }) => {
		console.log(email, password);
		try {
			await registerUser(email, password);
			console.log('usuario creado');
			navegate('/');
		} catch (error) {
			console.log(error.code);
			switch (error.code) {
				case 'auth/email-already-in-use':
					setError('email', {
						message: 'Correo en uso, intente con otro',
					});
					break;
				case 'auth/invalid-email':
					setError('email', {
						message: 'CFormato email invalido',
					});
					break;
				default:
					console.log('ocurrio un error en el sever');
			}
		}
	};

	return (
		<>
			<h1>Register</h1>
			<form onSubmit={handleSubmit(onSubmit)}>
				<input
					type="email"
					placeholder="Ingresa email"
					{...register('email', {
						required: {
							value: true,
							message: 'campo requerido',
						},
						pattern: {
							value:
								/[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/,
							message: 'Formaro Invalido',
						},
					})}
				/>
				{errors.email && <p>{errors.email.message}</p>}

				<input
					type="password"
					placeholder="Ingresa password"
					{...register('password', {
						setValueAs: (v) => v.trim(),
						minLength: { value: 6, message: 'minimo 6 caracteres' },
						required: {
							value: true,
							message: 'campo requerido',
						},
						validate: {
							trim: (v) => {
								if (!v.trim()) return 'no seas payaso, escribe algo';
							},
						},
					})}
				/>
				{errors.password && <p>{errors.password.message}</p>}
				<input
					type="password"
					placeholder="Ingresa password"
					{...register('repassword', {
						setValueAs: (v) => v.trim(),
						required: true,
						validate: {
							equals: (v) =>
								v === getValues('password') || 'no conincien las contraseñas',
						},
					})}
				/>
				{errors.repassword && <p>{errors.repassword.message}</p>}
				<button type="submit">Register</button>
			</form>
		</>
	);
};

export default Register;
