import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserProvider';
import { erroresFirebase } from '../utils/erroresFirebase';
import { formValidate } from '../utils/formValidate';

import FormError from '../components/FormError';
import FormImput from '../components/FormImput';
import Title from '../components/Title';
import Button from '../components/Button';

const Register = () => {
	const navegate = useNavigate();
	const { registerUser } = useContext(UserContext);
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
			const { code, message } = erroresFirebase(error);
			setError(code, {
				message,
			});
		}
	};

	return (
		<>
			<Title text="User Register" />

			<form onSubmit={handleSubmit(onSubmit)}>
				<FormImput
					type="email"
					placeholder="Ingresa email"
					{...register('email', {
						required,
						pattern: patternEmail,
					})}
					label="Ingresa tu correo"
					error={errors.email}
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
					label="Ingresa tu password"
					error={errors.password}
				>
					<FormError error={errors.password} />
				</FormImput>
				<FormImput
					type="password"
					placeholder="Ingresa password"
					{...register('repassword', {
						required,

						validate: validateRepassword(getValues('password')),
					})}
					label="Repite tu password"
					error={errors.repassword}
				>
					<FormError error={errors.repassword} />
				</FormImput>

				<Button text="Register" type="submit" />
			</form>
		</>
	);
};

export default Register;
