import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { MessageService } from '../../../MyServices/message-service';

@Component({
  selector: 'app-component2',
  imports: [],
  templateUrl: './component2.html',
  styleUrl: './component2.css',
})
export class Component2 {
  message = '';
  subscription: Subscription;

  constructor(private messageService: MessageService) {
    this.subscription = this.messageService.getMessage().subscribe((msg) => {
      this.message = msg;
    });
  }
}
