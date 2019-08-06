import React from 'react';
import { AppBar, Toolbar, IconButton } from '@material-ui/core';
import {AccountCircle} from '@material-ui/icons';
import Tooltip from '@material-ui/core/Tooltip';
import auth from './../../controller/auth';
import * as ls from 'local-storage';


export default function AppBarComponent({logo, component}, props){

function logOut(e) {

 auth.logout();
 window.location.reload();
}

 
 return (
  <AppBar position="static" color="default" 
    style={{
	height: '7vh',
	backgroundColor: 'rgba(25,118,210,0.75)' 
    }}
  >
	<Toolbar 
	  style={{
	  display: 'flex',
	  justifyContent: 'space-between',
	  padding: '0 50px ',
	  alignItems: 'center'
	  }}
	>
	<div style={{display: 'flex', alignItems:'center'}}>
	  <img alt="address book logo" src={logo} 
		style={{ 
		width: '70px',
		height: '70px',
		margin: '5px 10px',
		}}
	  />
	</div>
        { ls.get('login') === true &&
          <div style={{display: 'flex', justifyContent: 'space-around' }}> 
	   <Tooltip  title="Logout" enterDelay={500} leaveDelay={200}>
		<IconButton onClick={(e)=> logOut(e)}>
		  <AccountCircle />
		</IconButton>
	   </Tooltip>
	  </div>
	}
	</Toolbar>
  </AppBar>  

 ) 

}
