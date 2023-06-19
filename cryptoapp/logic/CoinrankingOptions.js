import { config } from './Config';

export const options = {
    headers: {
		'X-RapidAPI-Key': config.rapid_API_key,
		'X-RapidAPI-Host': config.rapid_API_host
	}
}