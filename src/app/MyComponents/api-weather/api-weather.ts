import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WeatherService } from '../../MyServices/weather-service';
import { WeatherModel } from '../../MyClasses/weather-model';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-api-weather',
  imports: [FormsModule],
  templateUrl: './api-weather.html',
  styleUrl: './api-weather.css',
})
export class ApiWeather {
  city_name = '';
  weatherModel?: WeatherModel;
  showInfoModule = false;

  constructor(
    private weatherService: WeatherService,
    private cdr: ChangeDetectorRef,
  ) {}
  GetWeatherStats() {
    this.weatherService
      .getJSON(
        `http://api.weatherapi.com/v1/current.json?key=6fed8bb1bfd24dc090a115944231504&q=${this.city_name}&aqi=no`,
      )
      .subscribe({
        next: (data) => {
          //console.log(data)
          this.weatherModel = {
            cityName: data.location.name,
            temperature: data.current.temp_c,
            text: data.current.condition.text,
            icon: data.current.condition.icon,
          };
          this.showInfoModule = true;
          this.cdr.detectChanges();
        },
        error: (err) => {
          console.log('Error: ', err);
          this.showInfoModule = false;
          this.cdr.detectChanges;
        },
      });
  }
}
