import http from 'k6/http';
import { sleep } from 'k6';

// export const options = {
//   vus: 100,
//   duration: '30s',
// };

// Spike test example:

export const options = {
  InsecureSkipTLSVerify: true,
  noConnectionReuse: false,
  stages: [
    { duration: '10s', target: 100 },
    { duration: '1m', target: 100 },
    { duration: '10s', target: 1000 },
    { duration: '3m', target: 1000 },
    { duration: '10s', target: 100 },
    { duration: '3m', target: 100 },
    { duration: '10s', target: 0 },
  ],
};

// Example from presentation:

// export const options = {
//   scenarios: {
//     constant_request_rate: {
//       executor: 'constant-arrival-rate',
//       rate: 1000,
//       timeUnit: '1s',
//       duration: '60s',
//       preAllocatedVus: 20,
//       maxVUs: 200
//     }
//   },
//   thresholds: {
//     http_req_failed: ['rate<0.01'], // http errors should be less than 1%
//     http_req_duration: ['p(95)<200'], // 95% of requests should be below 200ms
//   }
// };

const randomNumber = function (max) {
  return Math.floor(Math.random() * max) + 1;
}

export default function () {

  // http.get(`http://localhost:8080/products`);

  http.get(`http://localhost:8080/products/${randomNumber(1000000)}`);

  // http.get(`http://localhost:8080/products/${randomNumber(1000000)}/styles`);

  // http.get(`http://localhost:8080/products/${randomNumber(1000000)}/related`);

};