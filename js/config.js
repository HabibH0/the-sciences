const BACKEND_URL_KEY = 'the-sciences-backend-url';

globalThis.THE_SCIENCES_BACKEND_URL = localStorage.getItem(BACKEND_URL_KEY) || '';
