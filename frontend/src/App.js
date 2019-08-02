import React from 'react';
import './App.css';
import { Route }  from 'react-router-dom';

import Signin from './component/signin/Signin';
import {ProtectedRoute} from './component/common-component/ProtectedRoute';
class App extends React.Component {

render(){
 return (
  <div className="App">
	<Route exact path="/" component={Signin} />
	<ProtectedRoute
	  exact 
	  path="/Home" 
	  component={()=> {
	   return (
		<p>Hello</p> 
	   )
	  }  
	}/>
  </div>	
 )}
}

export default App; 
