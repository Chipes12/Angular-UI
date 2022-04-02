import { Component, OnInit } from '@angular/core';
import * as socketIo from 'socket.io-client';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  messages: string[] = [];
  message: string = '';
  socketClient: any  = null;
  
  constructor() { }

  ngOnInit(): void {
    this.socketClient = socketIo.io(environment.socketUrl);

    this.socketClient.on('reciveMessage', (data:any) => {
      console.log('Hay nuevo mensaje', data);
      this.messages.push(data.message);
    });
  }

  send(){
    console.log('Enviar mensaje');
    this.messages.push(this.message);
    this.socketClient.emit('newMessage', {
      message: this.message
    });
    this.message = '';
  }
}
