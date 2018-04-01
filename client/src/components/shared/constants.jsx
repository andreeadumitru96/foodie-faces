import Alert from 'react-s-alert';
import Cookies from 'universal-cookie';

export const cookies = new Cookies();

export const notificationError = (message) => {
	Alert.error(message, {
		position: 'top-right',
		effect: 'jelly',
		timeout: 3000
	});
}

export const cityList = ['Paris', 'Compiegne', 'Lyon'];