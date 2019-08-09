import React from 'react';
import AppBarComponent from './../common-component/appbar';
import AddressBookLogo from '../../icons/logo2.png';
import ToolBarComponent from './component/ToolBar';
import auth from '../../controller/auth';
import { Redirect } from 'react-router-dom';
//import axios from 'axios';
//import { Container } from '@material-ui/core';
//import {Tooltip,IconButton} from '@material-ui/core';
//import {Loading} from '@material-ui/icons';
import AddressBookTable from './component/table';
import CircularDeterminate from './component/Loading2';
//import CardComponent from './component/Card';
import addressbookController from './controller/addressbook';
//import * as ls from 'local-storage';
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
  setTimeout(()=>{
    addressbookController.addContact(this.state.contactData)
    this.updateContact();
    this.setState({ loading: true });
  }, 1000)
 
}

handleChange = (e) => {
  const contactData_cpy = Object.assign({}, this.state.contactData);
  contactData_cpy[e.target.id] = e.target.value;
  this.setState({
    	contactData: contactData_cpy
   })	
}

handleModify = (newData) => {
  addressbookController.modifyContact(newData)
  this.setLoading()
}
handleDelete = (targetData) => {
  addressbookController.deleteContact(targetData)
  this.setLoading()
}

handleSort = (e) => {
  addressbookController.sortContact(e.target.id)
  this.updateContact()
  this.setLoading()
}


 componentDidMount(){
    this.updateContact();
  }

 
 componentDidUpdate(prevProps,prevState){
  if (this.state.loading === true ){
   this.updateContact();
  }
 }
 
 
  updateContact = () => {
    addressbookController.getData()
      .then(response=>{
         this.setState({data: response})
      })
      .then(this.unsetLoading())

  }
  
  unsetLoading = () => {
    setTimeout(()=>{
      this.setState({loading: false})
    }, 600)
  }

  setLoading =() => {
    setTimeout(()=>{
      this.setState({loading: true})
    }, 600)
  }

 render(){
 	return !auth.isAuthenticated()? ( <Redirect to="/" /> ): ( 

   	<div style={{ width: '100%' }}>
   		<AppBarComponent component="AddressBook"  logo={AddressBookLogo} />		
		<ToolBarComponent 
      sortFn={this.handleSort}
			toggleView={this.state.toggleView} 
			handleChangeFn={this.handleChange} 
			handleSubmitFn={this.handleSubmit}
			contactData={this.state.contactData}
		/>
	{!this.state.data? <CircularDeterminate /> :(
	 <AddressBookTable 
		info={this.state.data} 
		isLoading={this.state.loading} 
		modifyFn={this.handleModify}
    deleteFn={this.handleDelete}			
	/>)}
   	</div>
 	)	
 }
}
