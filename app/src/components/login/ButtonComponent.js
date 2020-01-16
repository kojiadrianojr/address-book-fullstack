import React from 'react'
import Button from '@material-ui/core/Button'

function ButtonComponent(props){
    return(
        <Button type={props.type} style={props.style} onClick={props.action}>
            {props.title}
        </Button>
    )
}

export default ButtonComponent