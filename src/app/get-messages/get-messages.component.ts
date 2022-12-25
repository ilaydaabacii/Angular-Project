import { Component, OnInit } from '@angular/core';
import {IMessage} from '../Models/IMessage'
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-get-messages',
  templateUrl: './get-messages.component.html',
  styleUrls: ['./get-messages.component.css']
})
export class GetMessagesComponent extends AppComponent {

  textInput: string = '';
  filteredMessage: any = [];

  message: IMessage[] = [
    {id:1, Name: "Mark Otto", Subject:"Design", Message:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt, possimus?"},
    {id:2, Name: "Elizabeth Olsen", Subject:"Development", Message:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt, possimus?"},
    {id:3, Name: "İlayda Abaci", Subject:"Front End", Message:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt, possimus?"},
    {id:4, Name: "Mark Zucker", Subject:"Back End", Message:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt, possimus?"},
    {id:5, Name: "Ryan Gosling", Subject:"Design", Message:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt, possimus?"}
  ]

  searchQuery(event: any) {
    return this.filteredMessage = this.textInput ? this.message.filter((x: IMessage) => 
    x.Name.toLowerCase().includes(this.textInput) 
   || x.Subject.toLowerCase().includes(this.textInput)) : this.message;

}}
