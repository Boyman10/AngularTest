import {Component, Input, OnInit} from '@angular/core';
import {DeviceService} from '../services/device.service';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.scss']
})
export class DeviceComponent implements OnInit {

  // interpolation
  @Input()
  name: string;
  @Input()
  status: string;
  @Input()
  indexOfDevice: number;
  @Input()
  id: number;

  constructor(private deviceService: DeviceService) { }

  ngOnInit(): void {
  }

  getStatus(): string {
    return this.status;
  }

  getColor(): string {
    if (this.status === 'OFF')
    {
      return 'red';
    }
    else {
      return 'green';
    }
  }
  onSwithOn(): void {
    this.deviceService.swithOnOne(this.indexOfDevice);
  }
  onChange(): void {
    this.deviceService.change(this.indexOfDevice, this.name);
  }
  onSwithOff(): void {
    this.deviceService.swithOffOne(this.indexOfDevice);
  }
}
