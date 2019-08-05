import axios from 'axios';
import * as ls from 'local-storage';

class Auth {
  constructor(){
   this.authenticated = false
  }

  login(login, cb){
   axios.post('http://localhost:3911/api/login',{
	username: login.username,
	password: login.password
   }).then(response => { 
	if (response.status === 200) {
	 alert('Logged in!');
	 ls.set('token', response.data.token);
	 ls.set('login', this.authenticated = true);
	 ls.get('login');
	 cb();
	}else{
	 alert('Invalid Credentials my friend');
	 this.authenticated = false
	}	
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
  logout(cb){
   ls.clear();   
   cb()   
  }

  isAuthenticated(){
   return ls.get('login'); 
  }
 
}

export default new Auth();
