export const erroresFirebase = (code) => {
	switch (code) {
		case 'auth/email-already-in-use':
			return {
				code: 'email',
				message: 'Correo en uso, intente con otro',
			};
		case 'auth/invalid-email':
			return {
				code: 'email',
				message: 'Formato email invalido',
			};
		case 'auth/wrong-password':
			return {
				code: 'password',
				message: 'Contraseña incorrecta',
			};

		case 'auth/user-not-found':
			return {
				code: 'email',
				message: 'Ususario no Encontrado',
			};
		case 'auth/too-many-requests':
			return {
				code: 'email',
				message: 'Demaciados intentos erroneos',
			};

		default:
			return {
				code: 'email',
				message: 'ocurrio un error en el sever',
			};
	}
};
