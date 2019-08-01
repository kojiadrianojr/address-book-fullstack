import React from 'react';
import { FormControl, Input , InputLabel, InputAdornment, IconButton, Button, FormHelperText } from '@material-ui/core';
import { AccountCircle, Visibility, VisibilityOff, VpnKey } from '@material-ui/icons';

export default function FormComponent({
 onSubmitFn,
 inputFn, 
 checkerFn,
 credentialState,
 checkerState
}) {
  
  const [values, setValues] = React.useState({
   showPassword: false,

  })

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

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
	  error={checkerState.username?false:true}
	  onBlur={() => checkerFn('username') }
	  onChange={(e) => inputFn('username',e)}
	  id="Username"
	  startAdornment={
		  <InputAdornment position="start">
			<AccountCircle />
	          </InputAdornment>
		}
	/>
	 {!checkerState.username &&<FormHelperText error id="component-error-text">Username is required</FormHelperText>}
   </FormControl>
   <FormControl
	style={{margin: '10px' }}	
   >
	<InputLabel htmlFor="Password" >Password</InputLabel>   
   	<Input 
	  error={checkerState.password?false:true}
	  onBlur={()=> checkerFn('password')}
	  onChange={(e)=> inputFn('password', e)}
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
  <Button 
	variant="outlined"
  	type="submit"
   >
    Login  
  </Button>
  <Button>
    Register
  </Button>
  </form>
  ) 

}
