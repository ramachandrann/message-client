import { Component, Injectable , OnInit, OnDestroy } from '@angular/core';
import * as Rx from 'rxjs/Rx';
import * as io from 'socket.io-client';

import { MessageAwaiting } from './message.model'

@Injectable()
export class MessageAwaitingService implements OnDestroy {
  private url = 'http://localhost:3000';  
  private socket;
  
  constructor() {
    console.log('MessageAwaitingService constructor');
  }
  
  getMessagesAwaiting() {
    let observable = new Rx.Observable(observer => {
      this.socket = io(this.url);
      this.socket.on('message-awaiting', (data) => {
        observer.next(data);    
      });
      return () => {
        console.log('socket disconnected.');
        this.socket.disconnect();
      };  
    })     
    return observable;
  }  

   ngOnDestroy() {
     console.log('MessageAwaitingService destroyed');
  }
}