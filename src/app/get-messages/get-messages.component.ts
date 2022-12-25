import { Component, OnInit } from '@angular/core';
import {IMessage} from '../Models/IMessage'

@Component({
  selector: 'app-get-messages',
  templateUrl: './get-messages.component.html',
  styleUrls: ['./get-messages.component.css']
})
export class GetMessagesComponent implements OnInit {

  constructor() { }
  textInput: string = '';
  filteredMessage: any = [];

  message: IMessage[] = [
    {id:1, Name: "Mark Otto", Subject:"Design", Message:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt, possimus?"},
    {id:2, Name: "Elizabeth Olsen", Subject:"Development", Message:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt, possimus?"},
    {id:3, Name: "İlayda Abaci", Subject:"Front End", Message:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt, possimus?"},
    {id:4, Name: "Mark Zucker", Subject:"Back End", Message:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt, possimus?"},
    {id:5, Name: "Ryan Gosling", Subject:"Design", Message:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt, possimus?"}
  ]

  ngOnInit(): void {
  }
  searchQuery(event: any) {
    this.message = this.filteredMessage.filter((i: { name: string }) =>
      i.name.toLowerCase().includes(this.textInput.toLowerCase())
    );
    console.log(this.textInput);
  }

}
