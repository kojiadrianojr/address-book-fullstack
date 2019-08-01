import React from 'react';

import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';

import AddressBookLogo from '../../icons/logo2.png';
import SignInWallpaper from '../../icons/baby-back-view-blur-1497394.jpg';

import FormComponent  from './component/input';
import AppBarComponent from './component/appbar';

export default class  Signin extends React.Component {
 constructor(){
   super();
   this.state = {
	credentials: {
	 username: '',
	 password: '',
	},
	checker:{ 
	  username: true,
	  password: true,
	}
	
   } 
  }


 handleSubmit = (e) => {   
    e.preventDefault();
    if ((this.state.credentials.username === '')&&(this.state.credentials.password==='')){
	return alert('Please enter username and password')
    } 
 
    alert(`Username: ${this.state.credentials.username} Password: ${this.state.credentials.password}`) 
 }
 
 handleInput = (propName,e) => {
   const checker_cpy = Object.assign({}, this.state.checker);
   const credentials_cpy = Object.assign({}, this.state.credentials);
   if(this.state[propName] === ''){
    const checker_cpy = Object.assign({}, this.state.checker);
    checker_cpy[propName] = false
    this.setState({ checker: checker_cpy}) 
   }else {
    checker_cpy[propName] = true
    credentials_cpy[propName] = e.target.value
    this.setState({ credentials : credentials_cpy, checker: checker_cpy })
   }
 }

 checkInput = (propName) => {
  const checker_cpy = Object.assign({}, this.state.checker);
  if (!this.state.credentials[propName]){
    checker_cpy[propName] = false
    this.setState({
      checker: checker_cpy
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
  <AppBarComponent logo={AddressBookLogo} />
    <Container
	fixed
	component="div"
	style={{ 
		height: '90vh',
		display: 'flex',
		padding: '25px',
		alignItems: 'center', 
		justifyContent: 'space-between',
	}}
        >
	<Box 
	  style={{
	    display: 'flex',			    
	    flex: '1',
	    margin: '0 25px',
	    padding: '50px',
	  }}
	>
	  <div
	    style={{ 
		margin: 'auto', 
		fontSize: '2em', 
		color: 'white', 
		letterSpacing: '5px', 
		backgroundColor: 'rgba(0,0,0,0.3)',
		padding: '15px',
		border: '5px solid black' 
		}}
	  >
	    <h1>With you, <br/>  Every step.</h1>	
	  </div>
	</Box>	
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
	     <FormComponent 
	  	onSubmitFn={this.handleSubmit}
		inputFn={this.handleInput}
		checkerFn={this.checkInput}
		
		credentialState={this.state.credentials}
		checkerState={this.state.checker}
	     />
	</Paper> 

    </Container>
 </div>
  )
 }
}



