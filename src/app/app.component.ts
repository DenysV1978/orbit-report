import { Component } from '@angular/core';
import { Satellite } from './satellite';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Orbit Report';
  sourceList: Satellite[];
  displayList: Satellite[];
  satellite: Satellite[];

  constructor() {
    this.sourceList = [];
   this.displayList = [];
   this.satellite = [];
    let satellitesUrl = 'https://handlers.education.launchcode.org/static/satellites.json';
 
    window.fetch(satellitesUrl).then(function(response) {
       response.json().then(function(json) {
           let fetchedSatellites = json.satellites;
          for(let i=0; i<fetchedSatellites.length; i++) {
            this.satellite[i] = new Satellite(fetchedSatellites[i].name, fetchedSatellites[i].type, fetchedSatellites[i].launchDate, fetchedSatellites[i].orbitType, fetchedSatellites[i].operational);
            this.sourceList.push(this.satellite[i]);


          }
          
          console.log(this.sourceList)
          this.displayList = this.sourceList.slice(0); 
                
       }.bind(this));
    }.bind(this));
 
 };

 search(searchTerm: string): void {
  let matchingSatellites: Satellite[] = [];
  searchTerm = searchTerm.toLowerCase();
  for(let i=0; i < this.sourceList.length; i++) {
     let name = this.sourceList[i].name.toLowerCase();
     if (name.indexOf(searchTerm) >= 0) {
        console.log(name.indexOf(searchTerm))
        matchingSatellites.push(this.sourceList[i]);
     }
  }
  // assign this.displayList to be the the array of matching satellites
  // this will cause Angular to re-make the table, but now only containing matches
  this.displayList = matchingSatellites;
  };

  renew() {
     this.displayList = this.sourceList;
     

  };

  
  


};



