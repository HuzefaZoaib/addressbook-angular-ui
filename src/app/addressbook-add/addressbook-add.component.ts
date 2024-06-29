import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AddressBookService } from '../addressbook.service';
import { FormControl, FormGroup } from '@angular/forms';
import { AddressBook } from '../addressbook';

@Component({
  selector: 'app-addressbook-add',
  templateUrl: './addressbook-add.component.html',
  styleUrl: './addressbook-add.component.css'
})
export class AddressbookAddComponent {
  constructor(private addressBookService:AddressBookService, 
    private router:Router){}

  model:AddressBook = {id:0, name:'', phone:'', address:''};

  applyForm = new FormGroup({
    name: new FormControl,
    phone: new FormControl,
    address: new FormControl
  });

  onSubmit(){
    //console.log(`${this.applyForm.value.name}, ${this.applyForm.value.phone}, ${this.applyForm.value.address}`)
    console.log(`${this.model.name}, ${this.model.phone}, ${this.model.address}`)
    
    const address = {name:this.model.name, phone:this.model.phone, address:this.model.address};
    this.addressBookService.addNewAddress(address);
    this.router.navigate(['list']);
  }
}
