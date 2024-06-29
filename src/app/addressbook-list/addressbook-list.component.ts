import { Component } from '@angular/core';
import { AddressBookService } from '../addressbook.service';
import { AddressBook } from '../addressbook';

@Component({
  selector: 'app-addressbook-list',
  templateUrl: './addressbook-list.component.html',
  styleUrl: './addressbook-list.component.css'
})
export class AddressbookListComponent {

  
  constructor(public addressBookService:AddressBookService) {}

  addressess:AddressBook[] = [];

  ngOnInit() {
    this.addressBookService.getAddressess().subscribe(
      addressess => {this.addressess = addressess; console.log(addressess);}
    );
  }
}
