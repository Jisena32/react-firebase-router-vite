import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { UserContext } from '../context/UserProvider';
import Icono from './iconos';

const SideNav = () => {
	const classAIconos =
		'flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-tercero dark:hover:bg-gray-700';
	const cmob = 'mob:flex mob:justify-around mob:w-full';

	const tab = ' tab:flex tab:justify-around tab:w-full';
	const resp = cmob + tab;

	const { user, signOutUser } = useContext(UserContext);

	const handleClickLogout = async () => {
		try {
			await signOutUser();
		} catch (error) {
			console.log(error.code);
		}
	};

	return (
		<>
			{user ? (
				<aside className="w-10 mob:w-full  tab:w-full" aria-label="Sidebar">
					<div className=" flex justify-center items-center h-full mob:h-12   tab:h-12  overflow-y-auto  bg-segundo rounded dark:bg-gray-800">
						<ul className={resp}>
							<li>
								<Link to="/" className={classAIconos}>
									<Icono icono="FaHome" />
								</Link>
							</li>
							<li>
								<Link to="/pedidos" className={classAIconos}>
									<Icono icono="FaPeriscope" />
								</Link>
							</li>
							<li>
								<Link to="/utilidades" className={classAIconos}>
									<Icono icono="FaWhmcs" />
								</Link>
							</li>
							<li>
								<button onClick={handleClickLogout} className={classAIconos}>
									<Icono icono="CgLogOut" />
								</button>
							</li>
						</ul>
					</div>
				</aside>
			) : (
				<>
					<NavLink to="/login">Login | </NavLink>
					<NavLink to="/register">Register | </NavLink>
				</>
			)}
		</>
	);
};

export default SideNav;
