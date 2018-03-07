/* import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.css']
})
export class GoogleMapComponent implements OnInit {

  lat: number;
  lng: number;
  constructor() { }
  ngOnInit() {
    this.getUserLocation()
  }
  private getUserLocation() {
   /// locate the user
   if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
       this.lat = position.coords.latitude;
       this.lng = position.coords.longitude;
     });
   }
 }
} */

import { Component, OnInit, OnDestroy } from '@angular/core';
import { GeoService } from '../geo.service'
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';

@Component({
  selector: 'google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.css']
})



export class GoogleMapComponent implements OnInit, OnDestroy {
  lat: number;
  lng: number;
  zoom: number;
  markers: any;
  subscription: any;
  constructor(private geo: GeoService) { }
  ngOnInit() {
    this.getUserLocation()
    this.subscription = this.geo.hits
        .subscribe(hits => this.markers = hits)
  }
  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
   //seed the database
  //  private seedDatabase() {
  //   let dummyPoints = [
  //     [36.9, 174.1],
  //     [36.9, 174.2],
  //     [36.9, 174.3],
  //     [36.9, 174.0],
  //     [36.9, 174.1]
  //   ]
  //   dummyPoints.forEach((val, idx) => {
  //     let name = `dummy-location-${idx}`
  //     console.log(idx)
  //     this.geo.setLocation(name, val)
  //   })
  // }
    
  
  private getUserLocation() {
   /// locate the user
   if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
       this.lat = position.coords.latitude;
       this.lng = position.coords.longitude;
       this.geo.getLocations(50, [this.lat, this.lng])
     });
   }
 }

}