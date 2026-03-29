import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MessageService } from '../../../MyServices/message-service';

@Component({
  selector: 'app-component1',
  imports: [FormsModule],
  templateUrl: './component1.html',
  styleUrl: './component1.css',
})
export class Component1 {
  constructor(private messageService: MessageService) {}
  msg = '';
  btnSend() {
    this.messageService.sendMessage('msg from component1: ' + this.msg);
  }
}
