import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Plugins } from '@capacitor/core';
const { PushNotifications } = Plugins;

@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
})
export class NotificationPage implements OnInit {
  routeId;

  constructor(private router:ActivatedRoute,private routerr:Router) {
    this.routeId=this.router.snapshot.params;
  }

  ngOnInit() {
  }
  resetBadgeCount() {
    PushNotifications.removeAllDeliveredNotifications();
    this.routerr.navigateByUrl("/login")
  }
}
