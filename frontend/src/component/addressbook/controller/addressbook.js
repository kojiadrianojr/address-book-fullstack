import axios from 'axios';

class addressbookController{
 constructor(){
	this.data = []
 }
 
 getData(id){

 return axios.get(`http://localhost:3911/api/addressbook?userId=${id}`)
	.then(res => {
	  return this.data = res 		     
	   
	})
	.catch(err=>{
		console.log(err);
	})
    
 } 
 addContact(data,id){
  return axios.post(`http://localhost:3911/api/contacts?userId=${id}`,{
	  first_name: data.fname,
	  last_name: data.lname,
	  home_phone: data.hnum,
	  mobile_phone: data.mnum,
	  work_phone: data.wnum,
	  email: data.email,
	  city: data.city,
	  postal_code: data.pcode,
	  country: data.country
	})
	.catch(err=> {
	  console.log(err);
	  alert('There is something wrong!');
	})
 }
}

export default new addressbookController();
