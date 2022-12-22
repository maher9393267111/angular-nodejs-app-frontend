import { Component, OnInit ,Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Listing } from '../types/listing';

@Component({
  selector: 'app-listing-data-form',
  templateUrl: './listing-data-form.component.html',
  styleUrls: ['./listing-data-form.component.css']
})
export class ListingDataFormComponent implements OnInit {
  @Input() buttonText: any;
  @Input() currentName: any;
  @Input() currentDesription: any;
  @Input() currentPrice: any; 
  name!: string;
  description!:string;
  price!:string ;

  @Output() onSubmit = new EventEmitter<Listing>();

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.name=this.currentName;
    this.description=this.currentDesription;
    this.price=this.currentPrice;
    console.log(this.currentName);
    console.log("Edit Form");
    
  }

  onButtonClick():void{
    // alert('Creating a new Listing');
    // this.router.navigateByUrl('/my-listings');
    this.onSubmit.emit({
      id:'',
      name:this.name,
      description:this.description,
      price:Number(this.price),
      views:0
    });
  }

}