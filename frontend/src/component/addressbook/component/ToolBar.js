import React from 'react';
import { IconButton, Paper } from '@material-ui/core';
import { Dialog, DialogActions, DialogContent,  DialogTitle } from '@material-ui/core';
import {PersonAdd,Contacts, ViewComfy, ListAlt, Cancel} from '@material-ui/icons';
import Draggable from 'react-draggable';
import AddContactsForm from './AddForm';


function PaperComponent(props) {
  return (
    <Draggable cancel={'[class*="MuiDialogContent-root"]'}>
      <Paper {...props} />
    </Draggable>
  );
}

function ToolBarComponent({toggleView, handleChangeFn, handleSubmitFn, contactData}) {

 const [open, setOpen] = React.useState(false);
 const [view, setView] = React.useState(toggleView);

 
 const handleClickOpen = () => { setOpen(true); };
 const handleClose = () => { setOpen(false); };
 
 const changeView = () => {
		setView(!view)
		console.log(view);
	}

 return (
 <React.Fragment>
    <div style={{ display: 'flex'  }}>
		<IconButton variant="outlined" color="primary" onClick={ handleClickOpen  }>
		  <PersonAdd />	
		</IconButton>
		
    </div>	

    <Dialog open={open} onClose={handleClose} PaperComponent={PaperComponent} aria-labelledby="draggable-dialog-title" >
    
    	<DialogTitle style={{ 
		cursor: 'move',
		display: 'flex', 
		alignContent: 'center',
		borderBottom: '1px solid black' }} id="draggable-dialog-title"
	>
      	<div style={{ width: '100%', display: 'flex', alignItem: 'center'}}> 
		<Contacts style={{ margin: '5px 5px'}} /> 
		<span> Add Contacts </span>
	</div>  
    	</DialogTitle>
	<DialogContent>
		<AddContactsForm closeFn={handleClose} changeFn={handleChangeFn} submitFn={handleSubmitFn}    />
	</DialogContent>
    </Dialog>
 </React.Fragment>
 )

}

export default ToolBarComponent
