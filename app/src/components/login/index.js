import React from 'react'
import Form from './Form'
import { Container, Paper, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Button } from '@material-ui/core'
import ButtonComponent from './ButtonComponent'
const useStyles = makeStyles( theme => ({
    root: {
        backgroundColor: 'transparent',
        display: 'flex',
        height: '100vh',
    },
    loginCont: {
        height: 'auto',
        width: '60%',   
        margin: 'auto',
        padding: '25px'
    }
}))


export default () => {
    const classes = useStyles();  
    return (
        <Container component="div" maxWidth="sm" className={classes.root}>
            <Paper className={classes.loginCont}>
                <Typography variant="h2">
                    Address Book Login
                </Typography>
                <Form />
            </Paper>
        </Container>
    )
}