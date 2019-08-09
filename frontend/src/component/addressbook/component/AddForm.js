import React from 'react';
import TextField from '@material-ui/core/TextField';
//import addressbookController from '../controller/addressbook';
import { IconButton } from '@material-ui/core';
import { Check } from '@material-ui/icons';
import {DialogActions} from '@material-ui/core';
import {PersonAdd,Contacts, ViewComfy, ListAlt, Cancel} from '@material-ui/icons';

function TextFieldComponent({...props}){
 return (
	<TextField 
	fullWidth
	autoFocus
	margin="dense"
	{...props}
	/>
		
 )

}



export default function AddContactsForm({ closeFn,changeFn, submitFn
}){
 
 return (
   <form style={{ width: '500px' }} onSubmit={(e)=>submitFn(e)}  >
   	<TextFieldComponent 
		id="fname" 
		label="First Name" 
		type="string"  
		onChange={(e)=>changeFn(e)}
   />
	<TextFieldComponent 
		id="lname" 
		label="Last Name" 
		type="string" 
		onChange={(e)=>changeFn(e)}
	/>
	<TextFieldComponent 
		id="hnum" label="Home Number" type="number" 
		 onChange={(e)=>changeFn(e)}
	/>
	<TextFieldComponent 
		id="mnum" label="Mobile Number" type="number" 
	 	onChange={(e)=>changeFn(e)}
	/>
	<TextFieldComponent 
		id="wnum" label="Work Number" type="number" 
		onChange={(e)=>changeFn(e)}
	/>
	<TextFieldComponent 
		id="email" label="Email" type="string" 
	onChange={(e)=>changeFn(e)}
	/>
	<TextFieldComponent 
		id="city" label="City" type="string" 
	onChange={(e)=>changeFn(e)}
	/>
	<TextFieldComponent 
		id="pcode" label="Postal Code" type="number" 
		onChange={(e)=>changeFn(e)}
	/>
	<TextFieldComponent 
		id="country" label="Country" type="string" 
		onChange={(e)=>changeFn(e)}
	/>
         <DialogActions>
	 <IconButton variant="outlined" color="primary" type="submit">
                  <Check />
         </IconButton>

                 <IconButton variant="outlined" color="secondary" onClick={ closeFn } >
                   <Cancel />
                 </IconButton>
         </DialogActions>
	
   </form>
 )


}
