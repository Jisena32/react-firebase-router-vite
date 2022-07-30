import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import SideNav from './SideNav';

const LayaoutContainer = () => {
	return (
		<div className="flex flex-col h-screen ">
			<Navbar />
			<div className="flex mob:flex-col-reverse  tab:flex-col-reverse h-full w-full">
				<SideNav />
				<div className="h-full w-full bg-tercero">
					<Outlet />
				</div>
			</div>
		</div>
	);
};

export default LayaoutContainer;
