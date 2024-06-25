import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_ENDPOINT } from '../../../environments/api.config';

@Injectable({
  providedIn: 'root'
})
export class VisualizationsService {

  constructor(private http: HttpClient) {}

  getAvailabledates(selectedTool, selectedYear): Observable<any> {
    return this.http.get<any>(`${API_ENDPOINT}/visualization/${selectedTool}/${selectedYear}`)
  }

  getVisualizationWithDate(uid, selectedTool, selectedYear, selectedDate, userPolygon): Observable<Blob> {
    return this.http.get(`${API_ENDPOINT}/visualization_with_date/${uid}/${selectedTool}/${selectedYear}/${selectedDate[1]}/${userPolygon}`, {
      responseType: 'blob'
    });
  }

}
