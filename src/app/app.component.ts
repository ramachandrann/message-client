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
  connection: any;
  messageCount: number;

  constructor(private messageService:MessageService) {
    console.log('AppComponent constructor');
  }

  ngOnInit() {
        this.connection = this.messageService.getMessage().subscribe((msg: Message) => {
            this.messageCount = msg.messageCount;
        });
  }

  ngOnDestroy() {
    console.log('AppComponent destroyed');
    this.connection.unsubscribe();
  }
}

