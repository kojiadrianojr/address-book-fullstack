import React from 'react';
import { IconButton, Paper, Tooltip} from '@material-ui/core';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Dialog, DialogContent,  DialogTitle } from '@material-ui/core';
import {PersonAdd,Contacts, Reorder} from '@material-ui/icons';
import Draggable from 'react-draggable';
import AddContactsForm from './AddForm';





function PaperComponent(props) {
  return (
    <Draggable cancel={'[class*="MuiDialogContent-root"]'}>
      <Paper {...props} />
    </Draggable>
  );
}

function ToolBarComponent({toggleView, handleChangeFn, handleSubmitFn, contactData, sortFn}) {

 const [open, setOpen] = React.useState(false);

 
 const handleClickOpen = () => { setOpen(true); };
 const handleClose = () => { setOpen(false); };
 const [anchorEl, setAnchorEl] = React.useState(null);


function closeSortMenu(event) {
	setAnchorEl(event.currentTarget);
}

function handleCloseSortMenu() {
	setAnchorEl(null)
}

 return (
 <React.Fragment>
    <div style={{ display: 'flex', padding: '0 15px', justifyContent: 'space-event' }}>
	    <div style={{ display: 'flex', width: '15%', justifyContent: 'space-evenly' }}>
			<Tooltip title="Sort" enterDelay={500} leaveDelay={200}>
				<IconButton variant="outlined" color="primary" onClick={closeSortMenu}>
				  <Reorder fontSize="large" />
				</IconButton>
			</Tooltip>
			<Tooltip title="Add Contacts" enterDelay={500} leaveDelay={200}>
				<IconButton variant="outlined" color="primary" onClick={handleClickOpen}>
				  <PersonAdd fontSize="large" />	
				</IconButton>
			</Tooltip>
		</div>
    </div>	

    <Menu 
    	id="simple-menu"
    	anchorEl={anchorEl}
    	keepMounted
    	open={Boolean(anchorEl)}
    	onClose={handleCloseSortMenu}
    	style={{textAlign: 'center'}}
    >

   <MenuItem id="default" onClick={(e=>sortFn(e))}> Default </MenuItem>
   <MenuItem id="asc" onClick={(e)=>sortFn(e)}> A - Z </MenuItem>
   <MenuItem id="desc" onClick={(e)=>sortFn(e)}> Z - A </MenuItem>


   
    </Menu>

    <Dialog open={open} onClose={handleClose} PaperComponent={PaperComponent} aria-labelledby="draggable-dialog-title" >
    	<DialogTitle style={{ 
		cursor: 'move',
		display: 'flex', 
		alignContent: 'center',
		borderBottom: '1px solid black' }} id="draggable-dialog-title"
	>
      	<div style={{ width: '100%', display: 'flex', alignItem: 'center'}}> 
		<Contacts fontSize="large" style={{ margin: '0 10px'}} /> 
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
