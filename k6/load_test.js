import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  stages: [
    { duration: '10s', target: 10 },
    { duration: '20s', target: 10 },
    { duration: '5s', target: 0 },
  ],
  thresholds: {
    http_req_duration: ['p(95)<1000'], // Zwiększamy do 1000ms dla darmowego publicznego API
    http_req_failed: ['rate<0.01'],
  },
};

export default function () {
  const url = 'https://api.escuelajs.co/api/v1/products?limit=10';
  
  const response = http.get(url);

  check(response, {
    'status is 200': (r) => r.status === 200,
    'response body is not empty': (r) => r.body.length > 0,
  });

  sleep(1);
}