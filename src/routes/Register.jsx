import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserProvider';
import { erroresFirebase } from '../utils/erroresFirebase';
import { formValidate } from '../utils/formValidate';

import FormError from '../components/FormError';
import FormImput from '../components/FormImput';

const Register = () => {
	const { registerUser } = useContext(UserContext);
	const navegate = useNavigate();
	const {
		required,
		patternEmail,
		minLengthPassword,
		validateVacios,
		validateRepassword,
	} = formValidate();

	const {
		register,
		handleSubmit,
		formState: { errors },
		getValues,
		setError,
	} = useForm();

	const onSubmit = async ({ email, password }) => {
		try {
			await registerUser(email, password);
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
			<h1>Register</h1>

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
				<FormImput
					type="password"
					placeholder="Ingresa password"
					{...register('repassword', {
						required,

						validate: validateRepassword(getValues),
					})}
				>
					<FormError error={errors.repassword} />
				</FormImput>

				<button type="submit">Register</button>
			</form>
		</>
	);
};

export default Register;
