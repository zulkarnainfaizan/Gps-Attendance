import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController, ModalController, ToastController } from '@ionic/angular';
import { Subject } from 'rxjs';
import { finalize, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  private ngUnsubscribe: Subject<void> = new Subject<void>();
  tableOptions: any = {
    page: 0,
    rows: 10,
    lengthMenu: [10, 25, 50, 100],
    isSearch: false,
    searchKeyword: "",
    SortCol: "CheckInTime",
    IsAscending: false,
  };
  data: any[] = [];
  filteredData: any[] = [];
  checkedIns: any[] = [];
  totalRecords: number;
  model: any = {};
  departmentName; any
  date: Date;
  latitude: any;
  longitude: any;
  checkinToggle = false
  workLocation: any;
  departmentId;
  // @ViewChild("checkinListing", { static: false }) checkinList: CheckinListingPage;
  // FROM LISTING CODE
  statusColor: any = {
    active: "#4dd965",
    notActive: "#ff0000"
  }
  loading = false;
  // @ViewChild(IonInfiniteScroll, { static: false }) infiniteScroll: IonInfiniteScroll;
  isProcessing: boolean = false;
  permissions: any = {};
  isAdmin = false;
  constructor(
    // private checkInService: CheckInService,
    // private globalUtil: GlobalUtil,
    private toastController: ToastController,
    private modalCtrl: ModalController,
    private loadingController: LoadingController,
    // FROM LISTING CODE
    // private callNumber: CallNumber,
    private alertCtrl: AlertController,
  ) { }

  ngOnInit() {
    // this.permissions = this.globalUtil.getPermissionsForModule('checkin') || {};
    // this.isAdmin = this.globalUtil.getUser().isAdmin;
    // this.departmentName = this.globalUtil.getCurrentDepartment().name
    // this.departmentId = this.globalUtil.getCurrentDepartment().id
    setInterval(() => {
      this.date = new Date();
    }, 1000)
    // this.date = new Date();
    console.log("hey there" + this.latitude)
    this.checkinToggle = this.latitude ? true : false
    this.getCheckIns()
  }
  CheckIn() {
    // this.modalCtrl
    //   .create({
    //     component: AddEditCheckinPage,
    //     componentProps: { fromGIS: true },
    //   }).then(modalEl => {
    //     modalEl.present();
    //     return modalEl.onDidDismiss();
    //   }).then(
    //     resultData => {
    //       if (resultData.role !== 'cancel') {
    //         this.latitude = resultData.data.latitude
    //         this.longitude = resultData.data.longitude
    //         this.workLocation = resultData.data.workLocation
    //         this.getCheckIns("init")
    //       }
    //     }
    //   );
  }
  async checkOut() {
    // const loading = await this.loadingController.create({
    //   message: 'Please wait...'
    // });
    // await loading.present();
    // this.latitude = null
    // this.longitude = null
    // this.workLocation = null
    // let currentuserId = this.globalUtil.getUser().id
    // this.model.id = this.checkedIns[0].id
    // this.checkInService.checkOutUser(this.model).pipe(finalize(() => {
    //   loading.dismiss();
    // }), takeUntil(this.ngUnsubscribe)).subscribe(() => {
    //   this.getCheckIns('init')
    //   setTimeout(() => { this.presentToast('Checked out has been done successfully.') }, 1000)
    // }, error => {
    //   const message = error && error.error && error.error.Request && error.error.Request[0] ? error.error.Request[0] :
    //     error && error.error && error.error.errors && error.error.errors.Name && error.error.errors.Name[0] ? error.error.errors.Name[0] :
    //       "Sorry, something went wrong.";
    //   setTimeout(() => { this.presentToast(message) }, 1000)
    // });
    // this.presentToast("checked out successfully")
  }
  async presentToast(text) {
    const toast = await this.toastController.create({
      message: text,
      position: 'bottom',
      duration: 5000
    });
    toast.present();
  }
  getCheckIns(event?) {
    // if (event == "filter" || event == "init") {
    //   // this.infiniteScroll.disabled = false
    //   this.data = []
    //   this.tableOptions.page = 0

    // }
    // this.isProcessing = true;
    // this.checkInService.getCheckInList(this.tableOptions).pipe(takeUntil(this.ngUnsubscribe))
    //   .subscribe((res: any) => {
    //     if (res && res.records && res.records.length) {
    //       this.data = this.data.concat(res.records);
    //       // let filteredUsers = this.getCheckedInsOrUsers("user")
    //       // if (filteredUsers.length <= 10)
    //       //   this.loadMore()
    //       // this.filteredData = filteredUsers
    //       this.checkedIns = this.getCheckedInsOrUsers()
    //       this.tableOptions.length = res.totalRecords;
    //       this.totalRecords = res.totalRecords

    //       if (event !== "filter" && event !== "init") {
    //         if (event) {
    //           event.target.complete();
    //         }
    //       }
    //     }
    //     else {
    //       this.tableOptions.length = 0;
    //     }
    //     this.isProcessing = false;
    //   }, error => {
    //     this.isProcessing = false;
    //     console.log(error);
    //   });
  }
  getCheckedInsOrUsers(event?) {
    // let currentuserId = this.globalUtil.getUser().id
    // if (!event) {
    //   return this.data.filter(element => {
    //     return element.userId == currentuserId && element.isCheckOut == false;
    //   })
    // }
    // else {
    //   return this.data.filter(element => {
    //     return element.userId == currentuserId;
    //   })
    // }
  }
  // FROM LISTING CODE
  openLocation(lat, long) {
    window.open("https://www.google.com/maps/search/?api=1&query=" + lat + "," + long)
  }
  async callPhone(number, name) {
    // number = number ? number : "1234567890"
    // const alert = await this.alertCtrl.create({
    //   message: '',
    //   buttons: [
    //     {
    //       text: 'Cancel',
    //       role: 'cancel',
    //     },
    //     {
    //       text: 'Ok',
    //       handler: () => {
    //         this.callNumber.callNumber(number, true)
    //           .then(res => console.log('Launched dialer!', res))
    //           .catch(err => console.log('Error launching dialer', err))
    //       }
    //     }
    //   ]
    // })
    // console.log(alert.children)
    // alert.message = `
    // <div class="alert-text">
    // <p>Are you sure?</p>
    // <p text-center>Do you really want to call</p>
    // <p class="text-primary">${name}</p>
    // </div>`

    // await alert.present();
  }
  loadMore(event?: any) {
    if (this.totalRecords <= this.data.length) {
      this.loading = true;
      if (event)
        event.target.disabled = true
      // return
    }
    else {
      this.tableOptions.page += 1;
      this.getCheckIns(event);
    }
  }
  actualTime(dateParam: string | number | Date) {
    if (!dateParam) {
      return null;
    }
    const date = typeof dateParam === 'object' ? dateParam : new Date(dateParam);
    date.setHours(date.getHours() + 5);
    date.setMinutes(date.getMinutes() + 30);
    return date;
  }
}
