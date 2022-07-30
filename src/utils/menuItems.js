import { FaHome, FaPeriscope, FaWhmcs } from 'react-icons/fa';
import { CgLogOut } from 'react-icons/cg';
const MenuItems = [
	{
		label: 'Home',
		url: '/',
		icon: <FaHome />,
		active: true,
	},
	{
		label: 'Pedidos',
		url: '/pedidos',
		icon: <FaPeriscope />,
		active: false,
	},
	{
		label: 'Utilidades',
		url: '/utilidades',
		icon: <FaWhmcs />,
		active: false,
	},
];

export default MenuItems;
