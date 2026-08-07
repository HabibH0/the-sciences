const BACKEND_URL_KEY = 'the-sciences-backend-url';
const DEFAULT_BACKEND_URL = 'https://the-sciences.onrender.com';

globalThis.THE_SCIENCES_DEFAULT_BACKEND_URL = DEFAULT_BACKEND_URL;
globalThis.THE_SCIENCES_BACKEND_URL = localStorage.getItem(BACKEND_URL_KEY) || DEFAULT_BACKEND_URL;
