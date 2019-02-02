import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../service/weather.service';
import { query } from '@angular/core/src/render3';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  query = 'Manila';
  clouds: string;
  main: string;

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
    this.loadWeatherDetails();
  }


  loadWeatherDetails(){
    this.weatherService.getWeather(this.query)
    .subscribe((data: any)=> {
      console.log(data);
      this.clouds = data.weather[0].description;
      this.main = data.weather[0].main;
    });
  }
  }

