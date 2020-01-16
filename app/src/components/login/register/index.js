import React from 'react'
import RegisterField from './components/TextFields'
import ButtonComponent from '../ButtonComponent'
import { fieldReducer } from './../controller/LoginContext'

const fields = [
    {
        info: ['Name', 'Email', 'Username']
    },
    {
        password: ['Password', 'Confirm Password']
    }
]


function Register(props){  
    const [field, dispatch] = React.useReducer(fieldReducer, {})
    const handleField = (event) => {
        dispatch({fieldName: event.target.name, fieldValue: event.target.value})
    }

    return (
        <form onSubmit={(event) => props.formAction(event, {creds: field})} style={{display: 'flex', flexDirection: 'column'}}>
            {
            fields.map(data => {
                return data.info? (
                    data.info.map( FIELD_NAME => <RegisterField key={FIELD_NAME} title={FIELD_NAME} action={handleField} name={ FIELD_NAME }/>)
                ):data.password && (
                    <div key={data} style={{display: 'flex'}}> 
                    {
                    data.password.map( FIELD_NAME => (                                  
                        <RegisterField key={FIELD_NAME} name={ FIELD_NAME } title={FIELD_NAME} action={handleField} />
                    ))}
                    </div>
                )})
            }
            <ButtonComponent type="submit" title="SIGN UP" />
        </form> 
    )
}

export default Register