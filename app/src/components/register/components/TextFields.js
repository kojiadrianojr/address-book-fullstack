import React from 'react'
import TextField from '@material-ui/core/TextField'
import { FormControl, makeStyles, InputLabel, Input, InputAdornment } from '@material-ui/core'

import PersonIcon from '@material-ui/icons/Person';
import EmailIcon from '@material-ui/icons/Email';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
const useStyles = makeStyles(theme => ({
    margin: {
        margin: theme.spacing(1),
    },
}));

function FieldIcon(name){
    switch(name){
        case 'Name':
            return (<PersonIcon />);
        case 'Email':
            return (<EmailIcon />);
        case 'Username':
            return (<AccountCircleIcon />)
        case 'Password':
            return (<VpnKeyIcon />)
    }
}

export default (props) => {
    const classes = useStyles();
    return (
    <FormControl className={classes.margin}>
        <InputLabel htmlFor={`${props.title}-id`}>{props.title}</InputLabel>
        <Input 
            id={`${props.title}-title`}
            startAdornment={
                <InputAdornment position="start">
                    {FieldIcon(props.title)}
                </InputAdornment>
            }
        />
    </FormControl>
    )
}