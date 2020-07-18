import { Component, OnInit } from '@angular/core';
import { ChannelDataService } from '../service/data/channel-data.service';
import { Router } from '@angular/router';

// Channel Class ...
export class Channel {
  constructor(
    public id: number,
    public name: string,
    public position: number,
    public category: string
  ){}
}

export enum Category {
  PAID = "PAID",
	FREE = "FREE",
	ONDEMAND = "ONDEMAND",
}

@Component({
  selector: 'app-channel-list',
  templateUrl: './channel-list.component.html',
  styleUrls: ['./channel-list.component.css']
})
export class ChannelListComponent implements OnInit {
  
  message: String;
  channels = [];
  
  constructor(private channelService: ChannelDataService, private router: Router) { }

  ngOnInit(): void {
    this.getAllChannels();
  }

  getAllChannels() {
    this.channelService.retrieveAllChannels().subscribe(
       response => {
        this.channels = response;
      } 
    );
  }

  addChannel() {
    this.router.navigate(['channel']);
  }

  listPrograms(channelId: number){
    this.router.navigate(['program-list', channelId]);
  }
}
