import { Component, OnInit } from '@angular/core';
import {WeatherService} from "../../../services/weather/weather.service";
import {CurrentWeatherResponse} from "../../../models/weather/current-weather-response";
import {iconCodes} from "../../../models/weather/icon-codes";

function getWeatherIcon(currentWeather: CurrentWeatherResponse): string {
  const code = currentWeather.weather[0].id;
  const prefix = 'wi wi-';
  let icon = iconCodes[code].icon;
  // If we are not in the ranges mentioned above, add a day/night prefix.
  if (!(code > 699 && code < 800) && !(code > 899 && code < 1000)) {
    icon = 'day-' + icon;
  }
  icon = prefix + icon;
  return icon;
}

@Component({
  selector: 'app-weather-preview',
  templateUrl: './weather-preview.component.html',
  styleUrls: ['./weather-preview.component.scss']
})
export class WeatherPreviewComponent implements OnInit {
  public weather?: CurrentWeatherResponse;
  public weatherIcon?: any;

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.weatherService.getWeatherInCurrentLocation().subscribe(weather => {
      this.weather = weather;
      this.weatherIcon = getWeatherIcon(weather);
    })
  }
}
