export const config = {
	port: +(import.meta.env?.APP_PORT || 3000),
	apiGateway: import.meta.env?.API_GATEWAY || 'http://localhost:3005',
};
