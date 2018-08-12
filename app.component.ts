import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  form: any;
  Client: string[];
  Product: string[];
  Description: string;
  TargetDate: string;
  submitted: boolean = false
  constructor(){}
  ngOnInit(){

  
 this.Client = ['ClientA', 'ClientB',
            'ClientC', 'ClientD'];

 this.Product = ['policies','Billing'];
  
}



 
  onSubmit(form: any)  {
    this.submitted = true;
    this.form = form;}
 
}
