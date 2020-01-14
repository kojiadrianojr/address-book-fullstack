import React from 'react'
import {TextField, Grid} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import ButtonComponent from './ButtonComponent'
import AccountCircle from '@material-ui/icons/AccountCircle';
import VpnKeyIcon from '@material-ui/icons/VpnKey';

import RegisterComponent from '../register'

const useStyles = makeStyles(theme => ({
    margin: {
        margin: theme.spacing(1),
    },
}));

function FormField (props) {
    const classes = useStyles();
    return (
        <div className={classes.margin}>
            <Grid container spacing={2} alignItems="flex-end" >
                <Grid item>
                    {props.title === 'Username'? <AccountCircle />: <VpnKeyIcon />}
                </Grid>
                <Grid item style={{width: '75%'}}>
                    <TextField 
                        fullWidth
                        id={`${props.title}-id`}
                        label={props.title}
                        type={props.title === 'Password'? 'password':null}
                    />
                </Grid>
            </Grid>
        </div>
    )
}

export default () => {
    const [onRegister, setRegister] = React.useState(false)

    return (
        <React.Fragment>
       { 
       !onRegister?(<form style={{display:'flex', flexDirection: 'column'}}>
            {['Username','Password'].map(field => (
                    <FormField key={field} title={field} />
            ))}
            <ButtonComponent title="Login" />
        </form>):(
            <RegisterComponent />
        )
        }
        <div style={{display: 'flex', justifyContent: 'center'}}>
        <ButtonComponent title={!onRegister?'Register Now!':'Already have an account?'} style={{width: '100%'}} action={() => setRegister(!onRegister)}/>
        </div>
        </React.Fragment>
    )
}

