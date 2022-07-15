import { useContext, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserProvider';
const Login = () => {
	const [email, setEmail] = useState('jesus1@test.com');
	const [password, setPassword] = useState('12345678');

	const { loginUser } = useContext(UserContext);
	const navegate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log('procesando form:', email, password);
		try {
			await loginUser(email, password);
			console.log('usuario Logiado');
			navegate('/');
		} catch (error) {
			console.log(error.code);
		}
	};

	return (
		<>
			<h1>Login</h1>
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
				<button type="submit">Loggin</button>
			</form>
		</>
	);
};

export default Login;
