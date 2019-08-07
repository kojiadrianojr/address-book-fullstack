function add (req, res) {
  const db = req.app.get('db')
  const { userId } = req.query
  const {  
  first_name,
  last_name,
  home_phone,
  mobile_phone,
  work_phone,
  email,
  city,
  postal_code,
  country,
  } = req.body

  db.contacts
	.insert({
	first_name: first_name,
	last_name: last_name,
	home_phone: home_phone,
	mobile_phone: mobile_phone,
	work_phone: work_phone,
	email: email,
	city: city,
	postal_code,
	country,
	addressbook: [{
	  userid: userId,
	  contactid: undefined
	  },
	 ],
	}, {deepInsert: true})
	.then(user => res.status(201).json(user))
	.catch(err => {
	  console.error(err)
	});
}

function fetchAll (req,res) {
  const db = req.app.get('db')
  
  db.contacts
	.find()
	.then(users => {res.status(200).json(users)})
	.catch(err => {
		console.error(err);
		res.status(500).end();
		});
}

function fetchId (req,res) {
  const db = req.app.get('db')
  const { contactId } = req.params
  
  db.contacts
	.findOne({id: contactId})
	.then(contact => res.status(200).json(contact))
	.catch(err => {
	  console.error(err);
	  res.status(500).end();
	});
}

function search (req, res){
  const db = req.app.get('db')


  db.contacts
	.search({
	 fields: ['first_name','last_name'],
	 term: req.query.name
	})
	.then(contact => {res.status(200).json(contact)})
	.catch(err => {
	  console.error(err);
	  res.status(500).end();
	 }) 
}

function update (req, res){
  const db = req.app.get('db')
  const { contactId } = req.params
 // const { first_name, last_name, home_phone, mobile_phone, work_phone, email, city, postal_code, country} = req.body

  db.contacts
	.update({id:contactId}, req.body)
	.then(contact => {
	  res.status(200).json(contact)
	}).catch(err => {
	  console.error(err)
	  res.status(500).end();
	})

} 

function del(req, res) {
  const db = req.app.get('db')

  db.contacts
	.destroy(req.query)
	.then(contact => {
	 res.status(200).json(contact)
	}).catch(err => {
	  console.error(err);
	  res.status(500).end();
	})
}

module.exports = {
  add,
  fetchAll,
  fetchId,
  search,
  update,
  del
}
