function add (req, res) {
 const db = req.app.get('db');

 db.addressbook
	.insert({
	contactid: req.body.contactid,
	userid: req.body.userid
	}, {deepInsert: true})
	.then(ab => res.status(201).json(ab))
	.catch(err => {
	 console.error(err);
	 res.status(500).end();
	})
}

function fetch (req,res){
 const db = req.app.get('db');

 db.addressbook
	.find({userid: req.query.userId })
	.then(ab => {
		return db.query(`SELECT * FROM addressbook, contacts WHERE contacts.id = addressbook.contactid AND addressbook.userid = ${req.query.userId}`)
	})
	.then(response => res.status(200).json(response))	
	.catch(err => {
	 console.error(err);
	 res.status(500).end();
	})
}

function del (req,res) {
	const db = req.app.get('db');

	db.query(`DELETE FROM ADDRESSBOOK where contactid=${req.query.userId}`)
		.then(ab => res.status(200).json(ab))
		.catch(err => {
			console.error(err);
			res.status(500).end();
		})
}


module.exports = {
  add,
  fetch,
  del,
}
