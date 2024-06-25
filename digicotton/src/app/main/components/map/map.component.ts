import { Component, OnDestroy , AfterViewInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PolygonsService } from '../../services/polygons.service';
import { UserSelectionService } from '../../services/user-selection.service';
import { VisualizationsService } from '../../services/visualizations.service';
import { AuthService } from 'src/app/authentication/shared/services/auth.service';
import * as L from 'leaflet';
import { API_ENDPOINT } from '../../../../environments/api.config';


import 'proj4';
import 'proj4leaflet';
import * as proj4 from 'proj4';

(<any>window).proj4 = proj4;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit, OnDestroy  {

  uid: string;
  showLegend = false;
  coor;
  currentLayer: L.ImageOverlay;

  selectedYear: number;
  PolygonOption: [string, boolean];
  userPolygon: string;

  selectedTool: [string, boolean];
  selectedDate: [string, string];

  public map;
  public boundingBox: L.LatLngExpression[];
  public polygonsData: L.LatLngExpression[];
  public testPolygon: L.LatLngExpression[];
  public polygonLayer: L.Polygon;

  polygonsSub: Subscription;
  visualizationsSub: Subscription;
  dateSub: Subscription;
  userPolygonSub: Subscription;

  constructor(private userSelection: UserSelectionService, 
              private polygonsService: PolygonsService,
              private visualizationService: VisualizationsService,
              public authService: AuthService) {
    
    this.userPolygonSub = this.userSelection.selectedUserPolygon$.subscribe((polygon) => {
      this.userPolygon = polygon;
      this.onAddPolygons();
    });                

    this.polygonsSub = this.userSelection.selectedYear$.subscribe((year) => {
      this.selectedYear = year;
    })

    this.visualizationsSub = this.userSelection.selectedTool$.subscribe((tool) => {
      this.selectedTool = tool;
      if(this.selectedTool[0] === ""){
        this.showLegend = false;
        this.map.removeLayer(this.currentLayer);
      }
    })

    this.dateSub = this.userSelection.selectedDate$.subscribe((date) => {
      this.selectedDate = date;
    })

  }

    ngAfterViewInit() {
      this.authService.afAuth.authState.subscribe((user) => {
        if (user) {
          this.uid = user.uid;
        }
      });

    // Initialize the map
     this.map = L.map('map', {
       center: [ 40.95, 24.65 ],
       zoomControl: false,
       zoom:12
     });

     const tiles = L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
       maxZoom: 18,
       minZoom: 3
     });

     tiles.addTo(this.map); 
     L.control.zoom({position: 'bottomright'}).addTo(this.map);

     this.polygonsService.getBoundingBox().subscribe(response => {
      L.polygon(response, {
        color: 'orange',
        fillOpacity: 0
      }).addTo(this.map);
      console.log(response)
     })
    
    this.userSelection.triggerMethodObservable$.subscribe(() => {
      this.onAddVisualizations()
    });
   }


   onAddPolygons() {
    if (this.userPolygon !== "") {
        // Retrieve the Polygons
        this.polygonsService.getUserSpecificPolygon(this.uid, this.userPolygon).subscribe(response => {
            this.polygonsData = response;

            if (this.currentLayer) {
                this.map.removeLayer(this.currentLayer);
            }

            // Delete the previous polygons
            if (this.polygonLayer && this.map.hasLayer(this.polygonLayer)) {
                this.map.removeLayer(this.polygonLayer);
            }
            // Add the selected polygon to the map
            this.polygonLayer = L.polygon(this.polygonsData['polygon'], {
                color: 'blue',
                fillOpacity: 0
            }).addTo(this.map);

            // Smoothly fly to the bounds of the newly added polygon
            this.map.flyToBounds(this.polygonLayer.getBounds(), {
                duration: 2, // Adjust the duration of the animation (in seconds)
                easeLinearity: 1 // Adjust the smoothness of the animation
            });
        });
    }
}

  onAddVisualizations(){
    if (this.selectedTool[0] !== ""){
      if (this.selectedTool[1] && this.selectedDate[0] !== "") {
        this.visualizationService.getVisualizationWithDate(this.uid, this.selectedTool[0], this.selectedYear, this.selectedDate, this.userPolygon).subscribe(
          response => {
            if (this.currentLayer) {
              this.map.removeLayer(this.currentLayer);
          }
            const imageUrl = URL.createObjectURL(response);
            this.currentLayer = L.imageOverlay(imageUrl, this.polygonsData['bounding_box']).addTo(this.map);
          }
        )
      }
      else if (!this.selectedTool[1])  {
        var imageUrl = `${API_ENDPOINT}/phenology/${this.selectedYear}/${this.selectedTool[0]}`
        //this.map.removeLayer(this.polygonLayer);
        this.currentLayer = L.imageOverlay(imageUrl, this.polygonsData['bounding_box']).addTo(this.map);
      }
    }   
  }



  //Open the visualization legend
  toggleLegend() {
    if (this.selectedTool[0] !== ""){
      this.showLegend = !this.showLegend;
    }
  }

  // Unsubscribe when the the component is closed
  ngOnDestroy() {
    this.polygonsSub.unsubscribe();
    this.visualizationsSub.unsubscribe();
    this.dateSub.unsubscribe();
    this.userPolygonSub.unsubscribe();
  }
}
