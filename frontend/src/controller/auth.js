import axios from 'axios';
import * as ls from 'local-storage';

class Auth {
  constructor(){
   this.authenticated = false
  }

  login(login,cb){
   axios.post('http://localhost:3911/api/login',{
	username: login.username,
	password: login.password
   }).then(response => { 
	 ls.set('token', response.data.token);
	 ls.set('login', this.authenticated = true);
	 ls.set('userId', response.data.id);
	 ls.set('username', response.data.username);
	 ls.get('login');
	 alert('Logged in!');	
	 cb();
   }).catch(err=>{
	console.log(err)
	alert('Username and Password does not match');
	ls.set('login', this.authenticated = false);
   })
  }
 
  register(register, cb){
  if ((register.username !== '')&&(register.password !== '')&&(register.confirmpass !== '')){
   axios.post('http://localhost:3911/api/check', { username: register.username})
	.then(user => {
	  alert('username already in use!');  
	})
   axios.post('http://localhost:3911/api/user',{
      username: register.username,
      password: register.password,
     }).then(res=>{alert('Thank you for joining AP&T Addressbook Manager!'); cb() })
	.catch(err=>{console.log(err)})
    }else{
      alert('Please enter required information');
    }
  }
  logout(){
   ls.clear();   
  
  }

  isAuthenticated(){
    return ls.get('login');
  }
 
}

export default new Auth();
