<aside className="w-10 mob:w-full mobl:w-full tab:w-full" aria-label="Sidebar">
	<div className=" flex justify-center items-center h-full mob:h-12  mobl:h-12 tab:h-12  overflow-y-auto  bg-segundo rounded dark:bg-gray-800">
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
</aside>;
