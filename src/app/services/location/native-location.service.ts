import { Injectable } from '@angular/core';
import { Geolocation } from "@ionic-native/geolocation/ngx";

@Injectable({
  providedIn: 'root'
})
export class NativeLocationService {

  constructor(private geolocation: Geolocation,) { }
  getLatLong() {
    return this.geolocation
      .getCurrentPosition()
  }
}
