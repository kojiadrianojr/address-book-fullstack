const express = require('express');
const massive = require('massive');
const cors = require("cors");
const user = require('./controllers/user'); // user controller
const contact = require('./controllers/contact');  // contact controller
const ab = require('./controllers/addressbook.js'); //addressbook controller
const master = require('./controllers/master'); //master controller
massive({
  host: 'localhost',
  port: 5432,
  database: 'addressbookdb',
  user: 'postgres',
  password: 'addressbookdb',
}).then(db => {
 
  const app = express();
  app.set('db', db);
  app.use(express.json());
  app.use(cors());
  app.use(master.authenticate);

//user
  //app.post('/api/check', user.check);
  app.post('/api/user', user.register);  
  app.post('/api/login', user.login);
//contact
  app.post('/api/contacts', contact.add);
  app.get('/api/contacts', contact.fetchAll);
  app.get('/api/contacts/:contactId', contact.fetchId);
  app.get('/api/contact', contact.search); 
  app.patch('/api/contacts', contact.update);
  app.delete('/api/contacts', contact.del);

//addressbook
  app.get('/api/addressbook', ab.fetch);
  app.post('/api/addressbook', ab.add);
  app.delete('/api/addressbook', ab.del);
  app.get('/api/:userid/addressbook', ab.sort);

  const PORT = 3911
  app.listen(PORT, () => {console.log(`Server now listening /(^_^)/  @ ${PORT}`)});

});


