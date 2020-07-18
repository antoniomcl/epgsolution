import { Component, OnInit } from '@angular/core';
import { Channel, Category } from '../channel-list/channel-list.component';
import { ActivatedRoute, Router } from '@angular/router';
import { ChannelDataService } from '../service/data/channel-data.service';

@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.css']
})
export class ChannelComponent implements OnInit {

  channel: Channel;
  public categoryTypes = Category;
  public categoryOptions = [];

  constructor(private route: ActivatedRoute, private channelService: ChannelDataService, private router: Router) { }

  ngOnInit(): void {
    this.channel = new Channel(null, null, null, null);
    this.categoryOptions = Object.keys(this.categoryTypes);
  }

  saveChannel() {
    if (this.channel.name != null && this.channel.position != null && this.channel.category != null) {
      this.channelService.createChannel(this.channel).subscribe(
        data => {
          this.router.navigate(['channel-list']);
        }
      )
    } else {
      alert("Please verify your data")
    }
  }
}
