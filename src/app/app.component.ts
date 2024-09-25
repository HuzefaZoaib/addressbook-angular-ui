import { Component } from '@angular/core';
import { LoaderService } from './loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Addressbook Angular UI';
  
  loading$ = this.loader.isLoading$;
  
  constructor(public loader:LoaderService){}
}
