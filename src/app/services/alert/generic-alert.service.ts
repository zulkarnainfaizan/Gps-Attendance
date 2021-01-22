import { Injectable } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class GenericAlertService {

  constructor(private toastController:ToastController, private alertController: AlertController) { }
  async presentToast(text,duration?) {
    const toast = await this.toastController.create({
      message: text,
      position: 'bottom',
      duration:duration?duration:5000
    });
    toast.present();
  }
  async presentAlertConfirm(message?,handler?) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Are You Sure!',
      message: message?message:'Message <strong>text</strong>!!!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler:handler
        }
      ]
    });

    await alert.present();
  }

  
}