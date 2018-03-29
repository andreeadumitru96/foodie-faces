import Alert from 'react-s-alert';

export const notificationError = (message) => {
	Alert.error(message, {
		position: 'top-right',
		effect: 'jelly',
		timeout: 3000
	});
}