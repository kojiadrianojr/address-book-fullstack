import React from 'react';
import AppBarComponent from './../common-component/appbar';
import AddressBookLogo from '../../icons/logo2.png';
import auth from '../../controller/auth';
import { Redirect } from 'react-router-dom';
import { Container } from '@material-ui/core';
import AddressBookTable from './component/table';

export default function Addressbook(){
console.log(auth.isAuthenticated());
 return !auth.isAuthenticated()? ( <Redirect to="/" /> ): ( 

   <div style={{ width: '100%' }}>
   	<AppBarComponent component="AddressBook"  logo={AddressBookLogo} />
	<AddressBookTable />
   </div>
 )

}
