exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.createTable('addressbook', {
   id: {
	type: 'serial',
	primaryKey: true
   },
   contactid: {
	type: 'integer',

	references: '"contacts"',
   },
   userid: {
	type: 'integer',
	notNull: true,
	references: '"users"',
   },
 });
};

exports.down = (pgm) => {

};
