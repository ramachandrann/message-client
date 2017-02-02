import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-message-indicator',
  templateUrl: './message-indicator.component.html',
  styleUrls: ['./message-indicator.component.css']
})
export class MessageIndicatorComponent implements OnInit {
  @Input() count: number = 0;
  
  constructor() { }

  ngOnInit() {
  }

  onClick() {
    console.log('chip selected');
  }
}
