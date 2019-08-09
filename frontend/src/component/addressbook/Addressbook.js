import React from 'react';
import AppBarComponent from './../common-component/appbar';
import AddressBookLogo from '../../icons/logo2.png';
import ToolBarComponent from './component/ToolBar';
import auth from '../../controller/auth';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
//import { Container } from '@material-ui/core';
//import {Tooltip,IconButton} from '@material-ui/core';
import {Loading} from '@material-ui/icons';
import AddressBookTable from './component/table';
import addressbookController from './controller/addressbook';
import * as ls from 'local-storage';
import LinearQuery from './component/Loading';
export default class Addressbook extends React.Component{
 constructor(){
  super();
    this.state = {
	contactData: {
	 fname: '',
	 lname: '',
	 hnum: '',
	 mnum: '',
	 wnum: '',
	 email: '',
	 city: '',
	 pcode: '',
	 country: '',
	},
	data: null,
	toggleView: true,	
	loading: false, 
    }
 }
 

handleSubmit = (e) => {
  e.preventDefault();
  //addressbookController.addContact(this.state.contactData, ls.get('userId'))
  axios.post(`http://localhost:3911/api/contacts?userId=${ls.get('userId')}`,{
           first_name: this.state.contactData.fname,
           last_name: this.state.contactData.lname,
           home_phone: this.state.contactData.hnum,
           mobile_phone: this.state.contactData.mnum,
           work_phone: this.state.contactData.wnum,
           email: this.state.contactData.email,
           city: this.state.contactData.city,
           postal_code: this.state.contactData.pcode,
           country:this.state.contactData.country
         })
         .catch(err=> {
          console.log(err);
           alert('There is something wrong!');
         })
        
  this.setState({ loading: true });
  this.updateContact();
}

handleChange = (e) => {
  const contactData_cpy = Object.assign({}, this.state.contactData);
  contactData_cpy[e.target.id] = e.target.value;
  this.setState({
    	contactData: contactData_cpy
   })	
}



 componentDidMount(){
   axios.get(`http://localhost:3911/api/addressbook?userId=${ls.get('userId')}`)
	.then(data => {
		this.setState({ data: data.data })
	})
	.catch(err=> {console.log(err)})
  }

 
 componentDidUpdate(prevProps,prevState){
  if (this.state.loading === true ){
   this.updateContact();
  }
 }
 
 
  updateContact = () => {
    axios.get(`http://localhost:3911/api/addressbook?userId=${ls.get('userId')}`)
	.then(data => {
	    this.setState({ data: data.data  })
	}).then(data => {this.setState({ loading: false })})   
   console.log(this.state.data)
  }
  

 render(){
 	return !auth.isAuthenticated()? ( <Redirect to="/" /> ): ( 

   	<div style={{ width: '100%' }}>
   		<AppBarComponent component="AddressBook"  logo={AddressBookLogo} />		
		<ToolBarComponent 
			toggleView={this.state.toggleView} 
			handleChangeFn={this.handleChange} 
			handleSubmitFn={this.handleSubmit}
			contactData={this.state.contactData}
		/>
	{!this.state.data?  <h3> No Contacts Yet! </h3> :  <AddressBookTable info={this.state.data} isLoading={this.state.loading} />}
   	</div>
 	)	
 }
}
