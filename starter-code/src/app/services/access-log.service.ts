import { Injectable } from '@angular/core';

@Injectable()
export class AccessLogService {

	accessLog: any[] = [
		{ id: 1, name: "Ian Izaguirre", phone: "305-777-7777" }
	];

  constructor() { }


  addContact(theContact: any) {
  	const lastIndex = this.accessLog.length -1;
  	const lastContact = this.accessLog[lastIndex];

  	// Give the new contact a unique ID (last contact's ID +1)
  	theContact.id = lastContact.id + 1;
  	this.accessLog.push(theContact);
  }

  // deleteContact(contactId: number) {
  // 	let contactIndex;

  // 	this.contacts.forEach((oneContact, index) => {
  // 		if (oneContact.id === contactId) {
  // 			contactIndex = index;
  // 		}
  // 	});
  // 		this.contacts.splice(contactIndex, 1);
  // }

}
