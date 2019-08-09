import React from 'react';
import { Card } from '@material-ui/core';
import LinearQuery from './Loading';



export default function CardComponent({info, isLoading}) {

 { return  isLoading? <LinearQuery /> :  (
    <React.Fragment> 
    	<Card>
   		{console.log(info)}
	</Card>
    </React.Fragment>
 )}	

}
