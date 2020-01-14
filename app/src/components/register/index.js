import React from 'react'
import RegisterField from './components/TextFields'
import ButtonComponent from '../login/ButtonComponent'

const fields = [
    {
        info: ['Name', 'Email', 'Username']
    },
    {
        password: ['Password', 'Confirm Password']
    }
]


function Register(props){  

    return (
        <form style={{display: 'flex', flexDirection: 'column'}}>
            {
            fields.map(data => {
                return data.info? (
                    data.info.map( FIELD_NAME => <RegisterField key={FIELD_NAME} title={FIELD_NAME} />)
                ):data.password && (
                    <div key={data} style={{display: 'flex'}}> 
                    {
                    data.password.map( FIELD_NAME => (                                  
                        <RegisterField key={FIELD_NAME} title={FIELD_NAME}  />
                    ))}
                    </div>
                )})
            }
            <ButtonComponent title="SIGN UP" />
        </form> 
    )
}

export default Register