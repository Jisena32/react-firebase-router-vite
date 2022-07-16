import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import FormError from '../components/FormError';
import FormImput from '../components/FormImput';
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
			setError('firebase', {
				message: erroresFirebase(error.code),
			});
		}
	};

	return (
		<>
			<h1>Login</h1>
			<FormError error={errors.firebase} />
			<form onSubmit={handleSubmit(onSubmit)}>
				<FormImput
					type="email"
					placeholder="Ingresa email"
					{...register('email', {
						required,
						pattern: patternEmail,
					})}
				>
					<FormError error={errors.email} />
				</FormImput>
				<FormImput
					type="password"
					placeholder="Ingresa password"
					{...register('password', {
						minLength: minLengthPassword,
						required,
						validate: validateVacios,
					})}
				>
					<FormError error={errors.password} />
				</FormImput>
				<button type="submit">Loggin</button>
			</form>
		</>
	);
};

export default Login;
