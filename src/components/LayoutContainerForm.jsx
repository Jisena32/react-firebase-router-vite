import { Outlet } from 'react-router-dom';

const LayaoutContainerForm = () => {
	return (
		<div className="mx-auto mt-5 p-4 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
			<div className="space-y-6">
				<Outlet />
			</div>
		</div>
	);
};

export default LayaoutContainerForm;
