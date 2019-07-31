import React from 'react';

import { makeStyles } from '@material-ui/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import { FormControl, Input , InputLabel } from '@material-ui/core';
//import AccountCircle from '@material-ui/icons/AccountCircle';
export default class  Signin extends React.Component {


 render(){
  return (
    <Container
	component="div"
	maxWidth="sm" 
	style={{border: '1px solid black', height: '100vh', display: 'flex' }}
    >
	<Paper
	component="div"
	style={{margin: 'auto', display: 'flex',flexDirection: 'column', width: '350px', padding: '30px' }}
	>
	<form
	style={{display: 'flex', flexDirection: 'column', width: '100%', margin: 'auto'}}
	>
	<FormControl>
	  <InputLabel>Username </InputLabel>
	  <Input 
	  />
	</FormControl>
	<FormControl>
	  <InputLabel>Password</InputLabel>
	  <Input />
	  
	</FormControl>    
	</form>
	</Paper> 

    </Container>
  )
 }
}



