exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.createTable('addressbook', {
   id: {
	type: 'serial',
	primaryKey: true
   },
   contactId: {
	type: 'integer',

	references: '"contacts"',
   },
   userId: {
	type: 'integer',
	notNull: true,
	references: '"users"',
   },
 });
};

exports.down = (pgm) => {

};
