import axios from 'axios';

const api = axios.create({
  baseURL: 'https://lista-de-compras-api.onrender.com/',
});

// Log request
api.interceptors.request.use(request => {
  console.log('Request:', {
    url: request.url,
    method: request.method,
    data: request.data,
    headers: request.headers,
  });
  return request;
});

// Log response
api.interceptors.response.use(
  response => {
    console.log('Response:', {
      url: response.config.url,
      status: response.status,
      data: response.data,
      headers: response.headers,
    });
    return response;
  },
  error => {
    if (error.response) {
      console.log('Response Error:', {
        url: error.response.config.url,
        status: error.response.status,
        data: error.response.data,
        headers: error.response.headers,
      });
    } else {
      console.log('Request Error:', error.message);
    }
    return Promise.reject(error);
  }
);

export default api;