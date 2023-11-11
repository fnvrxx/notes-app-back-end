// Memuat kode untuk membuat, mengonfigurasi, dan menjalankan server HTTP menggunakan Hapi.
//import Hapi from '@hapi/hapi';

const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => {
  const server = Hapi.server({
    port: 7777,
    host: "localhost",
    routes: {
      cors: {
        origin:['*'],
      },
    },
  });

  server.route(routes);
  
  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};
init();
