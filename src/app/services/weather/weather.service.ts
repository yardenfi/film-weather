import { Injectable } from '@angular/core';
import {GeolocationService} from "@ng-web-apis/geolocation";
import {HttpClient, HttpParams} from "@angular/common/http";
import {debounceTime, flatMap} from "rxjs/operators";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {CurrentWeatherResponse} from "../../models/weather/current-weather-response";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private APP_ID = "c2152ce33eec94f628bcb40cda3da446";
  constructor(private readonly geolocation$: GeolocationService, private http: HttpClient) { }

  public getWeatherInCurrentLocation(): Observable<CurrentWeatherResponse> {
    let params = new HttpParams({})
      .set("appid", this.APP_ID);

    return this.geolocation$.pipe(
      debounceTime(300),
      flatMap<GeolocationPosition, Observable<CurrentWeatherResponse>>(position => {
        params = params.set("lat", position.coords.latitude)
          .set("lon", position.coords.longitude)
          .set("units", "metric");
        return this.http.get<CurrentWeatherResponse>(environment.weatherUrl, {params})
      })
    )
  }
}
