import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  Feature = {

    'name': null,
    'Date': null,
    'Description': null,
    'TargetDate': null,
    'Client': null,
    'Product': null
  }
  form: any;

  submitted: boolean = false;
  Client = ['ClientA', 'ClientB',
    'ClientC', 'ClientD'];

  Product = ['policies', 'Billing'];

  constructor() { }
  ngOnInit() {
    document.getElementById('resetform').click();
  }

  onSubmit() {

    this.submitted = true;


  }

  onEdit() {
   
    
    this.submitted= false;
    document.getElementById('resetform').click();
  
  }



}
