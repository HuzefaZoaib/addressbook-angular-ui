import { Injectable } from '@angular/core';
import { AddressBook } from './addressbook';
import { Observable, catchError, of } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AddressBookService {

  readonly DEFAULT_ADDRESSESS:AddressBook[] = [
    {id:1, name:"John", phone:"38495345", address:"Some Street 1"},
    {id:2, name:"Gautham", phone:"12495345", address:"Some Street 1"},
    {id:3, name:"Jerand", phone:"54495345", address:"Some Street 1"},
    {id:4, name:"Jerry", phone:"98495345", address:"Some Street 1"}
  ];

  DEFAULT_ADDRESSESS_MAX_ID:number = 4;

  constructor(private httpClient:HttpClient) { }

  readonly ALL_ADDRESS_URL:string = `${environment.REST_API_URI}/list`;
  readonly NEW_ADDRESS_URL:string = `${environment.REST_API_URI}/`;

  IS_BACKEND_DOWN:boolean = false;
  HTTP_ERROR_MSG:string = "";

  getAddressess(): Observable<AddressBook[]> {
    //return of([{id:1, name:"A", phone:"A", address:"A"}]);
    return this.httpClient.get<AddressBook[]>(this.ALL_ADDRESS_URL)
          .pipe(catchError((error: any, caught: Observable<any>): Observable<any> => {
            this.HTTP_ERROR_MSG = error.message;
            this.IS_BACKEND_DOWN = true;
            console.error('There was an error!', error);

            // after handling error, return a new observable 
            // that doesn't emit any values and completes
            return of(this.DEFAULT_ADDRESSESS);
        }));
  }

  addNewAddress(address:any){
    this.httpClient.put(this.NEW_ADDRESS_URL, address)
      .pipe(catchError((error: any, caught: Observable<any>): Observable<any> => {
        //this.errorMessage = error.message;
        console.error('There was an error!', error);

        // after handling error, return a new observable 
        // that doesn't emit any values and completes
        this.DEFAULT_ADDRESSESS_MAX_ID = this.DEFAULT_ADDRESSESS_MAX_ID + 1;
        this.DEFAULT_ADDRESSESS.push({id: this.DEFAULT_ADDRESSESS_MAX_ID, name:address.name, phone:address.phone, address:address.address})
        return of(this.DEFAULT_ADDRESSESS);
      }))
      .subscribe(
        _tap => {
            console.log("PUT call successful value returned in body", 
                        _tap);
        }
      );
  }
}
