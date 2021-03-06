import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated //None, Native, Emulated - default
})
export class ServerElementComponent implements OnInit {
  @Input('srvElement') element: {name: string, type: string, content: string};
  constructor() { }

  ngOnInit() {
  }

}
