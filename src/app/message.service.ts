import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
    
  messages: string[] = [];

  constructor() { }

  add(message: string) {
      console.log("Message at Message Service", message);
    return this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }
}
