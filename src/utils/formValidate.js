export const formValidate = () => {
	return {
		required: {
			value: true,
			message: 'campo requerido',
		},
		patternEmail: {
			value:
				/[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/,
			message: 'Formaro Invalido',
		},
		minLengthPassword: { value: 6, message: 'minimo 6 caracteres' },
		validateVacios: {
			trim: (v) => {
				if (!v.trim()) {
					return 'no seas payaso, escribe algo';
				}
				return true;
			},
		},
		validateRepassword(value) {
			return {
				equals: (v) => v === value || 'no conincien las contraseñas',
			};
		},
	};
};
