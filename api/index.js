const app = require('./src/app');
require('./src/db');

app.listen(3001, () => {
  console.log('listening on port 3001');
});
