import { Outlet } from 'react-router-dom';

const LayaoutContainerForm = () => {
	return (
		<div className="w-96 mx-auto mt-15">
			<Outlet />
		</div>
	);
};

export default LayaoutContainerForm;
