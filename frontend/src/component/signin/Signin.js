import React from 'react';

import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

import AddressBookLogo from '../../icons/logo2.png';
import SignInWallpaper from '../../icons/baby-back-view-blur-1497394.jpg';

import FormComponent  from './component/input';
import AppBarComponent from './../common-component/appbar';

import auth from '../../controller/auth.js';

export default class  Signin extends React.Component {
 constructor(props){
   super(props);
   this.state = {
	credentials: {
	 username: '',
	 password: '',
	},
	register: {
	 username: '',
	 password: '',
	 confirmpass: '',
	},
	checkerLogin:{ 
	  username: true,
	  password: true,
	},
	checkerRegister: {
	  username: true,
	  password: true,
	  confirmpass: true,
	},
        isRegister: false,
	
   } 
  }


 handleLogin = (e, props) => {   
    e.preventDefault();
    if ((this.state.credentials.username === '')&&(this.state.credentials.password==='')){
	return alert('Please enter username and password')
    } 
   
    auth.login(this.state.credentials,() => {
         this.props.history.push("/Home");
    })
 }

 onRegister = (e, props) => {
   e.preventDefault();	
   if (this.state.register.username === ''){
    this.setState({
      checkerRegister: {
        username: false,
      }
    });
    alert('Enter valid credentials');
   }else if (this.state.register.password !== this.state.register.confirmpass){
    this.setState({
      checkerRegister: { password: false, confirmpass: false  }
    });
    alert('Password does not match'); 
   }
   else {
    this.setState({
      checkerRegister: { username: true, password: true, confirmpass: true}
    });
    auth.register(this.state.register, ()=>{ this.setState({ isRegister: false})  })
      
   }
 }
 
 handleInput = (e) => {
   const checker_cpy = Object.assign({}, this.state.checkerLogin);
   const credentials_cpy = Object.assign({}, this.state.credentials);
   if(this.state[e.target.name] === ''){
    checker_cpy[e.target.name] = false
    this.setState({ checker: checker_cpy}) 
   }else {
    checker_cpy[e.target.name] = true
    credentials_cpy[e.target.name] = e.target.value
    this.setState({ credentials : credentials_cpy, checkerLogin: checker_cpy })
   }
 }

 checkLogin = (e) => {
  const checker_cpy = Object.assign({}, this.state.checkerLogin);
  if (!this.state.credentials[e.target.name]){
    checker_cpy[e.target.name] = false
    this.setState({
      checkerLogin: checker_cpy
    })
  }
}

handleRegister = (e) => {
 const checker_cpy = Object.assign({}, this.state.checkerRegister);
 const register_cpy = Object.assign({}, this.state.register);
 if(this.state[e.target.name]===''){
  checker_cpy[e.target.name] = false
  this.setState({checker: checker_cpy})
 }else{
   checker_cpy[e.target.name] = true
   register_cpy[e.target.name] = e.target.value
   this.setState({ register: register_cpy, checkerRegister: checker_cpy })
 }

 if(register_cpy.password !== register_cpy.confirmpass){
   checker_cpy.confirmpass = false
   this.setState({ checkerRegister: checker_cpy });
 }else{
   checker_cpy.confirmpass = true
   this.setState({ checkerRegister: checker_cpy });
 }


}

 checkerRegister = (e) => {
  const checker_cpy = Object.assign({}, this.state.checkerRegister);
   if (!this.state.register[e.target.name]){
   checker_cpy[e.target.name] = false
     this.setState({	
	checkerRegister: checker_cpy
     })
  } 
}

 render(){
  return (
  <div style={{
	height: '100vh',
	backgroundSize: 'cover',
	backgroundImage: 'url('+ SignInWallpaper +')',	
	backgroundPosition: 'top',
	backgroundRepeat: 'no-repeat', 
	}}

  >
  <AppBarComponent component="login-page"  logo={AddressBookLogo} />
    <Container
	fixed
	component="div"
	style={{ 
		height: '90vh',
		display: 'flex',
		padding: '25px',
		alignItems: 'center', 
		justifyContent: 'flex-end',
	}}
        >
	<Paper
	   component="div"
	   style={{ 
	   display: 'flex',
	   flexDirection: 'column', 
	   width: '350px',
	   padding: '30px',
	   alignItems: 'center'	
	}}
	>
	<img alt="AddressBookLogo" src={AddressBookLogo} style={{ width: '200px', height: '200px'}}/>
	{ !this.state.isRegister &&
	     <FormComponent 
	  	onSubmitFn={this.handleLogin}
		inputFn={this.handleInput}
		checkerFn={this.checkLogin}
		
		title="Login"
		
		credentialState={this.state.credentials}
		checkerState={this.state.checkerLogin}
		
	     />
	}
	     <Button onClick={()=> {
			  this.setState({isRegister: !this.state.isRegister})
			}}>
		{ !this.state.isRegister?	'Register?' : 'Return Sign In'  }
	     </Button>
	
	   { this.state.isRegister && 
	     <FormComponent
	        onSubmitFn={this.onRegister}
		inputFn={this.handleRegister}
		checkerFn={this.checkerRegister}
		
		title="Register"
		
		credentialState={this.state.credentials}
		checkerState={this.state.checkerRegister}	
	     />
	   }
	</Paper> 

    </Container>
 </div>
  )
 }
}


