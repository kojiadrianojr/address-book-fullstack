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
import CircularDeterminate from './component/Loading2';
//import CardComponent from './component/Card';
import addressbookController from './controller/addressbook';
import * as ls from 'local-storage';
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
  addressbookController.addContact(this.state.contactData).then((msg)=>alert(msg))
  this.updateContact();
  this.setState({ loading: true });
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
  this.setState({ loading: true })
}
handleDelete = (targetData) => {
  addressbookController.deleteContact(targetData)
  this.setState({ loading: true })
}


 componentDidMount(){
      /*  axios.get(`http://localhost:3911/api/addressbook?userId=${ls.get('userId')}`,{
          headers: 
            {
              Authorization: `Bearer ${ls.get('token')}`      
            }
         }) 
          .then(data => {
      		this.setState({ data: data.data })
      	})
      	.catch(err=> {console.log(err)})
      */
    this.updateContact();
  }

 
 componentDidUpdate(prevProps,prevState){
  if (this.state.loading === true ){
   this.updateContact();
  }
 }
 
 
  updateContact = () => {
 /*
    axios.get(`http://localhost:3911/api/addressbook?userId=${ls.get('userId')}`,{
        headers: 
          {
            Authorization: `Bearer ${ls.get('token')}`      
          }
       }) 
        .then(data => {
        this.setState({ data: data.data })
      })
      .catch(err=> {console.log(err)})
 */
  addressbookController.getData()
    .then(response=>{
       this.setState({data: response})
    })
    .then(()=>{
      this.setState({loading: false})
    })

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
	{!this.state.data?  ( <React.Fragment>  <h3>  Waiting for contacts ...  </h3> <br /> <CircularDeterminate /> </React.Fragment>) :(
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
