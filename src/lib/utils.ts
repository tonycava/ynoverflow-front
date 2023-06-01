import { env } from '$env/dynamic/public';
import { browser } from '$app/environment';

export const getBaseURL = () => (browser ? env.PUBLIC_EXTERNAL_API_URL : env.PUBLIC_API_URL);

export const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);