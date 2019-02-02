import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  weatherUrl = 'https://api.openweathermap.org/data/2.5/weather';
  apiId = '72aa1e78624bee82ff0b58685f0324ce';

  constructor(private http: HttpClient) { }


  getWeather(query: string) {
    return this.http.get(this.weatherUrl + '?q=' + query + '&appId=' + this.apiId);
  }
}
