import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import FormError from '../components/FormError';
import FormImput from '../components/FormImput';
import Title from '../components/Title';
import { UserContext } from '../context/UserProvider';
import { erroresFirebase } from '../utils/erroresFirebase';
import { formValidate } from '../utils/formValidate';

const Login = () => {
	const { loginUser } = useContext(UserContext);
	const navegate = useNavigate();
	const { required, patternEmail, minLengthPassword, validateVacios } =
		formValidate();

	const {
		register,
		handleSubmit,
		formState: { errors },
		setError,
	} = useForm();

	const onSubmit = async ({ email, password }) => {
		try {
			await loginUser(email, password);
			navegate('/');
		} catch (error) {
			console.log(error.code);
			const { code, message } = erroresFirebase(error.code);
			setError(code, {
				message,
			});
		}
	};

	return (
		<>
			<Title text="Login" />

			<form onSubmit={handleSubmit(onSubmit)}>
				<FormImput
					label="Ingresa tu correo"
					type="email"
					placeholder="Ingresa email"
					{...register('email', {
						required,
						pattern: patternEmail,
					})}
					error={errors.email}
				>
					<FormError error={errors.email} />
				</FormImput>
				<FormImput
					label="Ingresa tu password"
					type="password"
					placeholder="Ingresa password"
					{...register('password', {
						minLength: minLengthPassword,
						required,
						validate: validateVacios,
					})}
					error={errors.password}
				>
					<FormError error={errors.password} />
				</FormImput>
				<Button text="Loggin" type="submit" />
			</form>
		</>
	);
};

export default Login;
