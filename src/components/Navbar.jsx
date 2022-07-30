import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { UserContext } from '../context/UserProvider';

const Navbar = () => {
	const { user, signOutUser } = useContext(UserContext);

	const handleClickLogout = async () => {
		try {
			await signOutUser();
		} catch (error) {
			console.log(error.code);
		}
	};
	return (
		<div>
			{user ? (
				<div className="flex bg-primero h-10 justify-between items-center">
					<div className="pl-4">Logo</div>
					<div>Busqueda</div>
					<div className="pr-4 flex ">
						<div className="mr-2">Avatar</div>
					</div>
				</div>
			) : (
				<>
					<NavLink to="/login">Login | </NavLink>
					<NavLink to="/register">Register | </NavLink>
				</>
			)}
		</div>
	);
};

export default Navbar;
