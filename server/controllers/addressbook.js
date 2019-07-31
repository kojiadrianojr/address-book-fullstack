function add (req, res) {
 const db = req.app.get('db');

 db.addressbook
	.insert({
	contactId: req.body.contactId,
	userId: req.body.userId
	}, {deepInsert: true})
	.then(ab => res.status(201).json(ab))
	.catch(err => {
	 console.error(err);
	 res.status(500).end();
	})
}

module.exports = {
  add,
}
