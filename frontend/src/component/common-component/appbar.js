import React from 'react';
import { AppBar, Toolbar, IconButton } from '@material-ui/core';

import Tooltip from '@material-ui/core/Tooltip';
import auth from './../../controller/auth';
import * as ls from 'local-storage';
import Typography from '@material-ui/core/Typography';
import {AlternateEmail, SentimentVeryDissatisfied} from '@material-ui/icons';

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
	  <h4> Welcome, <AlternateEmail fontSize="default" style={{margin: '-6px 1px'}} />{ls.get('username')}  </h4>
	   <Tooltip  title="Logout" enterDelay={500} leaveDelay={200}>
		<IconButton variant="outlined" color="primary" onClick={(e)=> logOut(e)}>
		  <SentimentVeryDissatisfied fontSize="large" />
		</IconButton>
	   </Tooltip>
	  </div>
	}
	</Toolbar>
  </AppBar>  

 ) 

}
