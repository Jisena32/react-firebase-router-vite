export const erroresFirebase = (code) => {
	switch (code) {
		case 'auth/email-already-in-use':
			return 'Correo en uso, intente con otro';
		case 'auth/invalid-email':
			return 'Formato email invalido';
		case 'auth/wrong-password':
			return 'Contraseña incorrecta';
		case 'auth/user-not-found':
			return 'Ususario no Encontrado';

		default:
			return 'ocurrio un error en el sever';
	}
};
