import React from 'react';
import { FormControl, Input , InputLabel, InputAdornment, IconButton, Button, FormHelperText, Box } from '@material-ui/core';
import { AccountCircle, Visibility, VisibilityOff, VpnKey } from '@material-ui/icons';




export default function FormComponent({
 onSubmitFn,
 inputFn, 
 checkerFn,
 credentialState,
 checkerState,
 title,
}) {
  
  const [values, setValues] = React.useState({
   showPassword: false,
  })

 

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  return(
<form 
  onSubmit={onSubmitFn}
  style={{display: 'flex', flexDirection: 'column', width: '100%', margin: 'auto'}}>
   <FormControl
	style={{ margin: '10px' }}	
    >
	<InputLabel htmlFor="Username">Username</InputLabel>
        <Input
          required
	  name="username"
	  error={checkerState.username?false:true}
	  onBlur={(e) => checkerFn(e) }
	  onChange={(e) => inputFn(e)}
	  id="Username"
	  startAdornment={
		  <InputAdornment position="start">
			<AccountCircle />
	          </InputAdornment>
		}
	/>
	 {!checkerState.username &&  <FormHelperText error id="component-error-text">Username is required</FormHelperText> }
   </FormControl>
   <FormControl
	style={{margin: '10px' }}	
   >
	<InputLabel htmlFor="Password" >Password</InputLabel>   
   	<Input 
	  required
	  name="password"
	  error={checkerState.password?false:true}
	  onBlur={(e)=> checkerFn(e)}
	  onChange={(e)=> inputFn(e)}
	  id="Password"
	  type={values.showPassword? 'text' : 'password'}
	  startAdornment={
		  <InputAdornment position="start">
			<VpnKey />
		  </InputAdornment>
		}
	  endAdornment={
		<InputAdornment>
	  	<IconButton
	   	 aria-label="toggle password"
	    	 onClick={handleClickShowPassword}
	    	 onMouseDown={handleMouseDownPassword}
	  	>
	    	{values.showPassword? <Visibility/>:<VisibilityOff/>}
	  	</IconButton>
		</InputAdornment>
		}
	/>	
 {!checkerState.password &&<FormHelperText error id="component-error-text">Password is required</FormHelperText>}

 </FormControl> 
{ title==='Register' &&
  <FormControl
         style={{margin: '10px' }}
    >
         <InputLabel htmlFor="confirmpass">Confirm Password</InputLabel>
         <Input
	   name="confirmpass"
	   required
           error={checkerState.confirmpass?false:true}
           onBlur={(e)=> checkerFn(e)}
           onChange={(e)=> inputFn(e)}
           id="confirmpass"
           type={values.showPassword? 'text' : 'password'}
           startAdornment={
                   <InputAdornment position="start">
                         <VpnKey />
                   </InputAdornment>
                 }
           endAdornment={
                 <InputAdornment>
                 <IconButton
                  aria-label="toggle password"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                 >
                 {values.showPassword? <Visibility/>:<VisibilityOff/>}
                 </IconButton>
                 </InputAdornment>
                 }
         />
 {!checkerState.confirmpass &&<FormHelperText error id="component-error-text">Confirm Password please</FormHelperText>}
 
   </FormControl>
}
  <Box component="div"
       style={{ width: '100%', margin: '20px 0' }}
   >

  <Button
        style={{ width: '100%'  }} 
	variant="outlined"
  	type="submit"
   >
   {title}     
  </Button>
 
 </Box>
  </form>
  ) 

}
