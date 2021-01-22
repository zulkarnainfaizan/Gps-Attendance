import { Component, OnInit } from '@angular/core';
import { GenericAlertService } from 'src/app/services/alert/generic-alert.service';
import { NativeLocationService } from 'src/app/services/location/native-location.service';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.page.html',
  styleUrls: ['./attendance.page.scss'],
})
export class AttendancePage implements OnInit {
  date: Date;
  latitude: any;
  longitude: any;

  constructor(
    private alertService: GenericAlertService,
    private nativeLocation: NativeLocationService
  ) {}

  ngOnInit() {  
    setInterval(() => {
      this.date = new Date();
    }, 1000);
  }

  async CheckIn() {
    this.getLocation();
  }

  getLocation() {
    this.nativeLocation
      .getLatLong()
      .then((resp) => {
        const handler = this.alertService.presentAlertConfirm(
          this.getMessage(resp),
          this.confirmHandler(resp?.coords)
        );
      })
      .catch((error) => {
        this.alertService.presentToast(error?.message?error?.message:'Error while getting location...', 3000);
      });
  }

  getMessage(resp) {
    return `Do you want to check-in at
     <div class="re" style="color:red;"><ion-icon name="pin"></ion-icon></div>
     (${resp.coords?.latitude},${resp.coords?.longitude})`;
  }

  confirmHandler(coords) {
    return () => {
      this.latitude = coords.latitude;
      this.longitude = coords.longitude;
      this.alertService.presentToast('Checked-in Successfully', 3000);
    };
  }

  async checkOut() {
    this.latitude = null;
    this.longitude = null;
    this.alertService.presentToast('Checked-out Successfully', 3000);
  }

  openLocation(lat, long) {
    window.open(
      'https://www.google.com/maps/search/?api=1&query=' + lat + ',' + long
    );
  }

  actualTime(dateParam: string | number | Date) {
    if (!dateParam) {
      return null;
    }
    const date =
      typeof dateParam === 'object' ? dateParam : new Date(dateParam);
    date.setHours(date.getHours() + 5);
    date.setMinutes(date.getMinutes() + 30);
    return date;
  }
}
