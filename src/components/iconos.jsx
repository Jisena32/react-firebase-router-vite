import { FaHome, FaPeriscope, FaWhmcs } from 'react-icons/fa';
import { CgLogOut } from 'react-icons/cg';
const Icono = (props) => {
	const classI =
		'flex-shrink-0 w-6 h-6 text-primero transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white';
	switch (props.icono) {
		case 'FaHome':
			return <FaHome className={classI} />;
		case 'FaPeriscope':
			return <FaPeriscope className={classI} />;
		case 'CgLogOut':
			return <CgLogOut className={classI} />;
		case 'FaWhmcs':
			return <FaWhmcs className={classI} />;
	}
};
export default Icono;
