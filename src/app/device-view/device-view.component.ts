import { Component, OnInit } from '@angular/core';
import {DeviceService} from '../services/device.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-device-view',
  templateUrl: './device-view.component.html',
  styleUrls: ['./device-view.component.scss']
})
export class DeviceViewComponent implements OnInit {

  isAuth = false;
  devices: any[];
  deviceSubscription: Subscription;

  lastUpdate = new Promise( (resolve, reject) => {
    const date = new Date();
    setTimeout(() => {
      resolve(date);
    }, 1000);
  });

  constructor(private deviceService: DeviceService) {
    setTimeout(() => {
      this.isAuth = true;
    }, 2000);
  }

  onTurnOn(): void
  {
    console.log('Turning on');
    this.deviceService.switchOnAll();
  }
  onTurnOff(): void
  {
    console.log('Turning off');
    this.deviceService.switchOffAll();
  }

  ngOnInit(): void {
    // exectuted on creation of component right after constructor
    this.deviceSubscription = this.deviceService.deviceSubject.subscribe(
      (devices: any[]) => {
        this.devices = devices;
      }
    );
    this.deviceService.emitDeviceSubject();
  }

  onSave(): void {
    this.deviceService.saveDeviceToServer();
  }

  onFetch(): void {
    this.deviceService.getDevicesFromServer();
  }
}
