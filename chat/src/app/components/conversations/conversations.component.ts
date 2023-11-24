import { Component, OnInit } from '@angular/core';
import { SocketService } from 'src/app/service/socket.service';

@Component({
  selector: 'app-conversations',
  templateUrl: './conversations.component.html',
  styleUrls: ['./conversations.component.scss']
})

export class ConversationsComponent implements OnInit{
  messages: string[] = [];
  newMessage: string = '';

  constructor(private socketService: SocketService) {}

  ngOnInit() {
    this.socketService.getMessage((message: string) => {
      this.messages.push(message);
    });
  }

  sendMessage() {
    this.socketService.sendMessage(this.newMessage);
    this.newMessage = '';
  }
}
