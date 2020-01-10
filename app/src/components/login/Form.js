import React from 'react'
import {TextField, Grid, Button} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import ButtonComponent from './ButtonComponent'
import AccountCircle from '@material-ui/icons/AccountCircle';
import VpnKeyIcon from '@material-ui/icons/VpnKey';

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
                        type={props.title === 'Password' &&'password'}
                    />
                </Grid>
            </Grid>
        </div>
    )
}

export default () => {
    return (
        <React.Fragment>
        <form style={{display:'flex', flexDirection: 'column'}}>
            {['Username','Password'].map(field => (
                    <FormField key={field} title={field} />
            ))}
            <ButtonComponent title="Login" />
        </form>
        <div style={{display: 'flex', justifyContent: 'center'}}>
        <ButtonComponent title="Register" style={{width: '100%'}}/>
        </div>
        </React.Fragment>
    )
}

