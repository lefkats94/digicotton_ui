import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_ENDPOINT } from '../../../environments/api.config';

@Injectable({
  providedIn: 'root'
})
export class PolygonsService {

  constructor(private http: HttpClient) {}

  getBoundingBox(): Observable<any> {
    return this.http.get<any>(`${API_ENDPOINT}/map_polygon/bounding_box/`)
  }

  getYears(): Observable<any> {
    return this.http.get<any>(`${API_ENDPOINT}/visualization/years/`)
  }

  getUserPolygons(uid): Observable<any> {
    return this.http.get<any>(`${API_ENDPOINT}/map_polygon/user_polygons/${uid}/`)
  }

  getUserSpecificPolygon(uid, filename): Observable<any> {
    return this.http.get<any>(`${API_ENDPOINT}/map_polygon/user_specific_polygon/${uid}/${filename}/`)
  }
}
