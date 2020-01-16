import React from 'react'
import Form from './Form'
import { Container, Paper, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { LoginContext, init, LoginReducer } from './controller/LoginContext'

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
    const [LOGIN, DISPATCH] = React.useReducer( LoginReducer, init )
    
    const HandleForm = (event, data) => {
        event.preventDefault()
        DISPATCH({credentials: data.creds})
    }

    React.useEffect( () => {
        console.log(LOGIN)
    }, [LOGIN])


    return (
        <Container component="div" maxWidth="sm" className={classes.root}>
            <Paper className={classes.loginCont}>
                <Typography variant="h2">
                    Address Book Login
                </Typography>
                <LoginContext.Provider value="hi">
                <Form action={HandleForm} />
                </LoginContext.Provider>
            </Paper>
        </Container>
    )
}