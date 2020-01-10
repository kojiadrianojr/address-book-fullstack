import React from 'react'
import Button from '@material-ui/core/Button'

function ButtonComponent(props){
    return(
        <Button style={props.style}>
            {props.title}
        </Button>
    )
}

export default ButtonComponent