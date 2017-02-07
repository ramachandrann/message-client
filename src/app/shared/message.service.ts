import { Component, Injectable , OnInit, OnDestroy } from '@angular/core';
import * as Rx from 'rxjs/Rx';
import * as io from 'socket.io-client';

import { Message } from './message.model'

@Injectable()
export class MessageService implements OnDestroy {
  private API_ENDPOINT = 'http://localhost:3000';  
  private socket;
  
  constructor() {
    //We could inject an authenticationService which provides the currently auth userId
    //TODO: Infact context user must be established via JWT token, outside the scope of this POC.
    //Refer: https://github.com/auth0/socketio-jwt
    console.log('MessageService constructor');
    this.socket = io(this.API_ENDPOINT, { query: "userId=222" });
  }

  establishIdentity(userId: number){
    this.socket.emit('establish-identity', userId);    
  }
  
  getUnReadMessageCount() {
    let observable = new Rx.Observable(observer => {
     //this.socket = io(this.API_ENDPOINT);
      this.socket.on('unread-message-count', (data) => {
        observer.next(data);    
      });
      return () => {
        console.log('socket disconnected.');
        this.socket.disconnect();
      };  
    })     
    return observable;
  }  

  getMessages() {
    let observable = new Rx.Observable(observer => {
      //this.socket = io(this.API_ENDPOINT);
      this.socket.on('get-messages', (data) => {
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