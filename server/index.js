const express = require('express');
const massive = require('massive');
const user = require('./controllers/user');
const contact = require('./controllers/contact'); 

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

//user
  app.post('/api/user', user.register);  
  app.post('/api/login', user.login);
//contact
  app.post('/api/contacts', contact.add);
  app.get('/api/contacts', contact.fetchAll);
  app.get('/api/contacts/:contactId', contact.fetchId);
  app.get('/api/contact', contact.search); 
  app.patch('/api/contacts/:contactId', contact.update);
  app.delete('/api/contacts', contact.del);
  const PORT = 3911
  app.listen(PORT, () => {console.log(`Server now listening /(^_^)/  @ ${PORT}`)});

});


