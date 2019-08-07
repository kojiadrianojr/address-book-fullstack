import React from 'react';
import AppBarComponent from './../common-component/appbar';
import AddressBookLogo from '../../icons/logo2.png';
import auth from '../../controller/auth';
import { Redirect } from 'react-router-dom';
import { Container } from '@material-ui/core';
import {Tooltip,IconButton} from '@material-ui/core';
import AddressBookTable from './component/table';
import addressbookController from './controller/addressbook';
import * as ls from 'local-storage';

export default class Addressbook extends React.Component{
 constructor(){
  super();
    this.state = {
	data: []	
    }
 }
 
 componentDidMount(){
   addressbookController.getData(ls.get('userId'))
	.then(res=>{
	  this.setState({ data: res  })
	})
	.catch(err=>console.log(err))	
  }

 render(){
 	return !auth.isAuthenticated()? ( <Redirect to="/" /> ): ( 

   	<div style={{ width: '100%' }}>
   		<AppBarComponent component="AddressBook"  logo={AddressBookLogo} />
		
		{ this.state.data.length !== 0 &&  <AddressBookTable data={this.state.data} />}
   	</div>
 	)	
 }
}
