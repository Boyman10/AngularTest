import {Subject} from 'rxjs';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class DeviceService {

  deviceSubject = new Subject<any[]>();
  private devices = [];

  constructor(private httpClient: HttpClient) {
  }
  switchOnAll(): void {
    for (const dev of this.devices)
    {
      dev.status = 'ON';
    }
  }
  switchOffAll(): void {
    for (const dev of this.devices)
    {
      dev.status = 'OFF';
    }
    this.emitDeviceSubject();
  }

  swithOnOne(index: number): void {
    this.devices[index].status = 'ON';
    this.emitDeviceSubject();

  }
  swithOffOne(index: number): void {
    this.devices[index].status = 'OFF';
    this.emitDeviceSubject();
  }
  change(index: number, name: string): void {
    this.devices[index].name = name;
    this.emitDeviceSubject();
  }

  // tslint:disable-next-line:typedef
  getDeviceById(id: number) {
    return this.devices.find((deviceObject) => {
      return deviceObject.id === id;
    });
  }

  emitDeviceSubject(): void {
    console.log('all devices : ' , this.devices);
    this.deviceSubject.next(this.devices.slice());
  }

  addDevice(name: string, status: string): void {
    const newDevice = {
      id: 0,
      name: '',
      status: ''
    };
    newDevice.name = name;
    newDevice.status = status;
    newDevice.id = this.devices[(this.devices.length - 1)].id + 1;
    this.devices.push(newDevice);
    this.emitDeviceSubject();
  }

  saveDeviceToServer(): void {
    this.httpClient.put('https://test-angular-96a7a-default-rtdb.europe-west1.firebasedatabase.app/devices.json', this.devices)
      .subscribe(
        () => {
          console.log('Success saving');
        },
        (error) => {
          console.log('error ', error);
        }
      );
  }

  // tslint:disable-next-line:typedef
  getDevicesFromServer() {
    this.httpClient.get<any[]>('https://test-angular-96a7a-default-rtdb.europe-west1.firebasedatabase.app/devices.json')
    .subscribe(
    (response) => {
      this.devices = response;
      this.emitDeviceSubject();
    },
      (error => {
        console.log('error ', error);
      })
    );
  }
}
