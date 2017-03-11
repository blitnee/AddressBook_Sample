describe('AddressBook', function() {

	beforeEach(function() {
		addressBook = new AddressBook();
		thisContact = new Contact();
	});

	it('should be able to add a contact', function() {
		addressBook.addContact(thisContact);

		expect(addressBook.getContact(0)).toBe(thisContact);
	});

	it('should be able to delete a contact', function() {
		addressBook.addContact(thisContact);
		addressBook.deleteContact(0);

		expect(addressBook.getContact(0)).toBe(undefined);
	});

});


describe('Async Address Book', function() {

	beforeEach(function(done) {
		addressBook = new AddressBook();
		addressBook.getInitialContacts(function() {
			done();
		});
	});

	it('should grab initial contacts', function(done) {
		expect(addressBook.initialComplete).toBe(true);
		done();
	});

});