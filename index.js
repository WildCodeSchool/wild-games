const Hapi = require('@hapi/hapi');
const Inert = require('@hapi/inert');
const Vision = require('@hapi/vision');
const HapiSwagger = require('hapi-swagger');
const routes = require('./routes');
const Pack = require('./package');

(async () => {
  const server = await new Hapi.Server({
    port: process.env.PORT || 5000,
    routes: {
      cors: true,
    },
  });

  const swaggerOptions = {
    info: {
      title: 'Wild Games API Documentation',
      version: Pack.version,
    },
  };

  await server.register([
    Inert,
    Vision,
    {
      plugin: HapiSwagger,
      options: swaggerOptions,
    },
  ]);

  server.route(routes);

  try {
    await server.start();
    console.log('Server running at:', server.info.uri);
  } catch (err) {
    console.log(err);
  }
})();
