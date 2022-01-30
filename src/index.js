const app = require('./app');
const { createRoomTypes } = require('./libs/initialSetup')

createRoomTypes();

app.listen(app.get('port'), () => {
      console.log("http://localhost:" + app.get('port'))
});