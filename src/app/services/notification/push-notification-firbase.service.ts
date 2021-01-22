import { Injectable } from '@angular/core';
import {
  Plugins,
  PushNotification,
  PushNotificationToken,
  PushNotificationActionPerformed,
  Capacitor,
  Modals
} from '@capacitor/core';
import { Router } from '@angular/router';
 
const { PushNotifications } = Plugins;
 
@Injectable({
  providedIn: 'root'
})
export class PushNotificationFirebaseService {
 
  constructor(private router: Router) { }
 
  initPush() {
    if (Capacitor.platform !== 'web') {
      this.registerPush();
    }
  }
 
  private registerPush() {
    PushNotifications.requestPermission().then((permission) => {
      if (permission.granted) {
        // Register with Apple / Google to receive push via APNS/FCM
        PushNotifications.register();
      } else {
        // No permission for push granted
      }
    });
 
    PushNotifications.addListener(
      'registration',
      (token: PushNotificationToken) => {
        console.log('My token: ' + JSON.stringify(token));
      }
    );
 
    PushNotifications.addListener('registrationError', (error: any) => {
      console.log('Error: ' + JSON.stringify(error));
    });
 
    PushNotifications.addListener(
      'pushNotificationReceived',
      async (notification: PushNotification) => {
        var audio=new Audio('assets/audio/pristine-notification.mp3')
        audio.play()
        let alert=Modals.alert({
          title:notification.title,
          message:notification.body
        })
        console.log('Push received: ' + JSON.stringify(notification));
      }
    );
 
    PushNotifications.addListener(
      'pushNotificationActionPerformed',
      async (notification: PushNotificationActionPerformed) => {
        const data = notification.notification.data;
        console.log("fuller"+notification)
        console.log("FULL"+JSON.stringify(notification))
        console.log('Action performed: ' + JSON.stringify(notification.notification));
        if (data.detailsId) {
          this.router.navigateByUrl(`/attendance/${data.detailsId}`);
        }
        else{
          this.router.navigateByUrl(`/attendance/${data.from}`);
        }
      }
    );
  }
   test(data){
    this.router.navigateByUrl(`/attendance/${data}`);
  }
}