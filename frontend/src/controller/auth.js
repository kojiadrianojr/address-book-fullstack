import axios from 'axios';

class Auth {
  constructor(){
   this.authenticated = false
  }

  login(cb){
   this.authenticated = true
   cb()
  }
 
  register(register){
   console.log(register)
   axios.post('http://localhost:3911/api/user',{
    username: register.username,
    email: register.email,
    password: register.password
   }).then(user=>{
     console.log(user);
   })
   .catch(err=>{console.log(err)})
  }

  logout(cb){
   this.authenticated = false;
   cb();
  }

  isAuthenticated(){
   return this.authenticated;
  }
 
}

export default new Auth();
