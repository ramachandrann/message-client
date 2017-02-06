import { Component, OnInit, OnDestroy } from '@angular/core';

import { MessageService } from './shared/message.service';
import { MessageAwaitingService } from './shared/message-awaiting.service';
import { MessageAwaiting } from './shared/message.model';
import { Message } from './shared/message.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[MessageService, MessageAwaitingService]
})
export class AppComponent implements OnInit, OnDestroy {
  public messageCount: number;  
  public showMessages: boolean = false;
  public messages: MessageAwaiting[] = [];
  private messageCountSubscription: any;
  private messageAwaitingSubscription: any;
  
  constructor(private messageService:MessageService,
              private messageAwaitingService:MessageAwaitingService) {
    console.log('AppComponent constructor');
  }

  ngOnInit() {
    console.log('AppComponent ngOnInit');

      this.messageService.establishIdentity(1);
      this.messageCountSubscription = this.messageService.getMessage().subscribe((msg: Message) => {
        this.messageCount = msg.messageCount;
      });

      this.messageAwaitingSubscription = this.messageAwaitingService.getMessagesAwaiting().subscribe((msgs: MessageAwaiting[]) => {
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

