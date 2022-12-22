import { Component ,OnInit } from '@angular/core';
import { ListingsService } from '../listings.service';
import { Listing } from '../types/listing';


@Component({
  selector: 'app-listings-page',
  templateUrl: './listings-page.component.html',
  styleUrls: ['./listings-page.component.css']
})
export class ListingsPageComponent implements OnInit  {

  listings: Listing[] = [];

  constructor(
    private listingService:ListingsService
  ) { }

  ngOnInit(): void {
    // this.listings=this.listingService.getListing();
    this.listingService.getListing().subscribe(list=>{
    console.log('response-->' , list);  
      
      this.listings=list
    });

    console.log('All Listings--->' , this.listings);
  }





}
