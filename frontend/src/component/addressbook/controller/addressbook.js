import axios from 'axios';

class addressbookController{
 constructor(){
	this.data = []
 }
 
 getData(id){
 return axios.get(`http://localhost:3911/api/addressbook?userId=${id}`)
	.then(res => {
	  return  this.data =  res 		     
	})
	.catch(err=>{
		console.log(err);
	})
 } 

}

export default new addressbookController();
