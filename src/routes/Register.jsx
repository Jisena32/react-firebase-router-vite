import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserProvider';

const Register = () => {
	const [email, setEmail] = useState('jesus1@test.com');
	const [password, setPassword] = useState('12345678');

	const { registerUser } = useContext(UserContext);
	const navegate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log('procesando form:', email, password);
		try {
			await registerUser(email, password);
			navegate('/');
		} catch (error) {
			console.log('hola', error.code);
		}
	};

	return (
		<>
			<h1>Register</h1>
			<form onSubmit={handleSubmit}>
				<input
					type="email"
					placeholder="Ingresa email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<input
					type="password"
					placeholder="Ingresa password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<button type="submit">Register</button>
			</form>
		</>
	);
};

export default Register;
