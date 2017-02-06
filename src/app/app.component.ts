import { Component, OnInit, OnDestroy } from '@angular/core';

import { MessageService } from './shared/message.service';
import { Message } from './shared/message.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[MessageService]
})
export class AppComponent implements OnInit, OnDestroy {
  public messageCount: number;  
  public showMessages: boolean = false;
  public messages: Message[] = [];
  private messageCountSubscription: any;
  private messageAwaitingSubscription: any;
  
  constructor(private messageService:MessageService) {
    console.log('AppComponent constructor');
  }

  ngOnInit() {
    console.log('AppComponent ngOnInit');

      this.messageService.establishIdentity(1);
      this.messageCountSubscription = this.messageService.getUnReadMessageCount().subscribe((count: number) => {
        this.messageCount = count;
      });

      this.messageAwaitingSubscription = this.messageService.getMessages().subscribe((msgs: Message[]) => {
        this.messages = msgs;
      });
  }

  ngOnDestroy() {
    console.log('AppComponent destroyed');
    this.messageCountSubscription.unsubscribe();
    this.messageAwaitingSubscription.unsubscribe();
  }

  onMessageIndicatorClick(evnt) {
    this.showMessages = !this.showMessages;
  }
}

