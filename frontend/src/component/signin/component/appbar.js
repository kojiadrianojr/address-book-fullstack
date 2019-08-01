import React from 'react';
import { AppBar, Toolbar } from '@material-ui/core';

export default function AppBarComponenti({logo}){
 
 return(
  <AppBar position="static" color="default" 
    style={{
     backgroundColor: 'rgba(25,118,210,0.75)' 
    }}
  >
	<Toolbar 
	  style={{
	  display: 'flex',
	  justifyContent: 'flex-start',
	  padding: '0 250px'
	  }}
	>
	  <img alt="address book logo" src={logo} 
		style={{ 
		width: '50px',
		height: '50px'
		}}
	 />
	</Toolbar>
  </AppBar>  

 ) 

}
