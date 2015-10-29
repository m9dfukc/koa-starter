import koa from 'koala';
import router from 'koa-router';

const app = koa();
const Api = router({ prefix: '/api/v1' });
const Router = router();

Router.get( '/', function *( next ) {
  this.body = 'Hi foo!';
});

app
  .use(Router.routes() )
  .use(Router.allowedMethods());

export default app;
