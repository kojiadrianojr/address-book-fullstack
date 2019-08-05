import React from 'react';
import { AppBar, Toolbar, IconButton } from '@material-ui/core';
import {ExitToApp} from '@material-ui/icons';
import Tooltip from '@material-ui/core/Tooltip';
import auth from './../../controller/auth';
import {Redirect, Route} from 'react-router-dom'


export default function AppBarComponenti({logo, component}, props){

function logOut(props) {
 auth.logout(()=>{ this.props.history.push('/')  });
}

 
 return(
  <AppBar position="static" color="default" 
    style={{
     backgroundColor: 'rgba(25,118,210,0.75)' 
    }}
  >
	<Toolbar 
	  style={{
	  display: 'flex',
	  justifyContent: 'space-around',
	  padding: '0 0px'
	  }}
	>
	  <img alt="address book logo" src={logo} 
		style={{ 
		width: '50px',
		height: '50px'
		}}
	  />
          
          <div style={{display: 'flex', justifyContent: 'space-around' }}> 
	   <Tooltip  title="Logout" enterDelay={500} leaveDelay={200}>
		<IconButton onClick={()=> logOut()}>
		  <ExitToApp />
		</IconButton>
	   </Tooltip>
	  </div>
	</Toolbar>
  </AppBar>  

 ) 

}
