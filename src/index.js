const app = require('./app');
const { 
      createRoomTypes,
      createRoles
} = require('./libs/initialSetup')

createRoomTypes();
createRoles();

app.listen(app.get('port'), () => {
      console.log("http://localhost:" + app.get('port'))
});