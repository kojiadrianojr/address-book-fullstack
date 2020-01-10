import React from 'react'
import RegisterField from './components/TextFields'

const fields = ['Name','Email', 'Username', 'Password']

function Register(props){
    return (
        <form style={{display: 'flex', flexDirection: 'column'}}>
            {fields.map(name => (
                <RegisterField 
                    title={name}
                />
            ))}
        </form>
    )
}

export default Register