import { forwardRef } from 'react';

const FormImput = forwardRef(
	({ type, placeholder, onChage, onBlur, name, children }, ref) => {
		return (
			<>
				<input
					type={type}
					placeholder={placeholder}
					onChange={onChage}
					onBlur={onBlur}
					name={name}
					ref={ref}
				/>
				{children}
			</>
		);
	}
);

export default FormImput;
