import { Component, OnInit, Input, Output, EventEmitter, trigger, state, transition, animate, style } from '@angular/core';

@Component({
  selector: 'app-message-indicator',
  templateUrl: './message-indicator.component.html',
  styleUrls: ['./message-indicator.component.css'],
  animations: [
    trigger('countChanged', [
      state('inactive', style({
        backgroundColor: 'yellow',
        transform: 'scale(1)'
      })),
      state('active',   style({
        backgroundColor: 'red',
        transform: 'scale(1.1)'
      })),
      transition('inactive => active', animate('3000ms ease-in')),
      transition('active => inactive', animate('3000ms ease-out'))
    ])
  ]
})
export class MessageIndicatorComponent implements OnInit {
  private _count: number = 0;
  @Input()
  set count(value: number) {
    this._count = value;
    this.countChangeAnimation = 'active'
    this.notify();
  } 
  @Output() onClickEvent: EventEmitter<String> = new EventEmitter<String>();
  countChangeAnimation: string = 'inactive';

  constructor() { }

  ngOnInit() {
  }

  notify() {
    var audio = new Audio();
    audio.src = "assets/incoming-message.mp3";
    audio.load();
    audio.play();
  }

  onClick() {
    this.onClickEvent.emit('click');
  }
}
