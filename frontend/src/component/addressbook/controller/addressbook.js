import axios from 'axios';
import * as ls from 'local-storage';
class addressbookController{
 constructor(){
	this.data = []
 }
 
 getData(id){
 return axios.get(`http://localhost:3911/api/addressbook?userId=${ls.get('userId')}`,{
        headers: 
	          {
	            Authorization: `Bearer ${ls.get('token')}`      
	          }
	    }) 
	    .then(data => {
	        return data.data
	      })
	      .catch(err=> {console.log(err)})
    
 } 
 addContact(data){
  return axios.post(`http://localhost:3911/api/contacts?userId=${ls.get('userId')}`,
 	{
	 	first_name: data.fname,
	 	last_name: data.lname,
	 	home_phone: data.hnum,
	 	mobile_phone: data.mnum,
	 	work_phone: data.wnum,
	 	email: data.email,
	 	city: data.city,
	 	postal_code: data.pcode,
	 	country: data.country
	},
	{
    headers:
    	{
     	   Authorization: `Bearer ${ls.get('token')}`
    	},
  	}).then(msg=> {return msg='Contact Added!'})
	.catch(err=> {
	  console.log(err);
	  alert('There is something wrong!');
	})
 }
 modifyContact(data){
 	console.log(data)
    axios.patch(`http://localhost:3911/api/contacts?userId=${data.id}`,{
		first_name: data.fname,
		last_name: data.lname,
		home_phone: data.hnum,
		mobile_phone: data.mnum,
		work_phone: data.wnum,
		email: data.email,
		city: data.city,
		postal_code: data.pcode,
		country: data.country
	},{
		headers:
			{
				Authorization: `Bearer ${ls.get('token')}`
			}
	})	
	.catch(err=> {
	  console.log(err);
	  alert('there is something wrong');
	})
  }
}

export default new addressbookController();
