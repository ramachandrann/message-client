import { Component, Injectable , OnInit, OnDestroy } from '@angular/core';
import * as Rx from 'rxjs/Rx';
import * as io from 'socket.io-client';

import { Message } from './message.model'

@Injectable()
export class MessageService implements OnDestroy {
  private url = 'http://localhost:3000';  
  private socket;
  
  constructor() {
    console.log('MessageService constructor');
    this.socket = io(this.url);
  }

  establishIdentity(userId: number){
    this.socket.emit('establish-identity', userId);    
  }
  
  getMessage() {
    let observable = new Rx.Observable(observer => {
      this.socket.on('message-count', (data) => {
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
     console.log('MessageService destroyed');
  }
}