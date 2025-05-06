import { createServer } from 'miragejs';

export function makeMockServer() {
  createServer({
    routes() {
      this.namespace = 'api';
      this.get('/data', () => ({ message: "Mock API Works!" }));
    },
  });
}
