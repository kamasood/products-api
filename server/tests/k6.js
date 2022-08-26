import http from 'k6/http';
import { sleep } from k6;

export const options = {
  vus: 200,
  duration: '180s',
};

const randomNumber = function (max) {
  return Math.floor(Math.random() * max) + 1;
}

export default function () {

  // http.get(`http://localhost:8080/products`);

  http.get(`http://localhost:8080/products/${randomNumber(1000000)}`);

  // http.get(`http://localhost:8080/products/${randomNumber(1000000)}/styles`);

  // http.get(`http://localhost:8080/products/${randomNumber(1000000)}/related`);

};