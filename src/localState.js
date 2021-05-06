export const loadToken = () => {
	try {
		const tokenString = localStorage.getItem('myblog-token');
		if (tokenString) {
			return JSON.parse(tokenString);
		}
	} catch (error) {
		return null;
	}
};

export const saveToken = (token) => {
	try {
		const tokenString = JSON.stringify(token);
		localStorage.setItem('myblog-token', tokenString);
	} catch (error) {}
};

export const deleteToken = () => {
	try {
		localStorage.setItem('myblog-token', null);
	} catch (error) {}
};
