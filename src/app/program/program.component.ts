import { Component, OnInit } from '@angular/core';
import { Program } from '../program-list/program-list.component';
import { ActivatedRoute, Router } from '@angular/router';
import { ProgramDataService } from '../service/data/program-data.service';
import { ChannelDataService } from '../service/data/channel-data.service';
import { Channel } from '../channel-list/channel-list.component';

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.css']
})
export class ProgramComponent implements OnInit {

  programTitle: string = "New Program";
  programId: number;
  channelId: number
  program: Program = new Program(null, null, null, null, null, null, new Channel(0, null, null, null));
  channels = [];

  constructor(private route: ActivatedRoute, private programService: ProgramDataService,  private channelService: ChannelDataService, private router: Router) { }

  ngOnInit(): void {

    this.channelId = this.route.snapshot.params['channelId'];
    this.programId = this.route.snapshot.params['programId'];

    this.program = new Program(null, null, null, null, new Date(), new Date(), new Channel(0, null, null, null));

    this.getAllChannels();
  
    if (this.programId != 0){
      this.programTitle = "Update Program";
      this.programService.retriveProgram(this.programId).subscribe(
        data => {
            this.program = data;
          }
      )
    } else {
      this.channelService.retriveChannel(this.program.channel.id).subscribe(
        data => {
          this.program.channel = data;
        }
      );      
    }
  }

  saveProgram() {
      // this.getChannel();

    if (this.programId == 0) {
      this.programService.createProgram(this.program).subscribe(
        data => {
          this.router.navigate(['program-list', this.program.channel.id]);
        }
      )      
    } else {
      this.programService.updateProgram(this.programId, this.program).subscribe(
        data => {
          this.router.navigate(['program-list', this.program.channel.id]);
        }
      )
    }
  }

  getAllChannels() {
    this.channelService.retrieveAllChannels().subscribe(
       response => {
        this.channels = response;
      } 
    );
  }

/*   getChannel() {
    this.channelService.retriveChannel(this.program.channel.id).subscribe(
      data => {
        this.program.channel = data;
      }
    );
  } */

}
