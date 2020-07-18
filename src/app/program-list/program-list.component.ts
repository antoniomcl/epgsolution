import { Component, OnInit } from '@angular/core';
import { Channel } from '../channel-list/channel-list.component';
import { ActivatedRoute, Router } from '@angular/router';
import { ProgramDataService } from '../service/data/program-data.service';
import { ChannelDataService } from '../service/data/channel-data.service';

// Program Class ...
export class Program {
  constructor(
    public id: number,
    public imageUrl: string,
    public title: string,
    public description: string,
    public startDate: Date,
    public endDate: Date,
    public channel: Channel
  ){}
}

@Component({
  selector: 'app-program-list',
  templateUrl: './program-list.component.html',
  styleUrls: ['./program-list.component.css']
})
export class ProgramListComponent implements OnInit {

  message: string;
  channelId: number;
  channel: Channel;
  programs = [];

  constructor(private route: ActivatedRoute, private channelService: ChannelDataService, private programService: ProgramDataService, private router: Router) { }

  ngOnInit(): void {

    this.channelId = this.route.snapshot.params['channelId'];
    this.channel = new Channel(null, null, null, null);

    if (this.channelId != 0){
      this.getAllData();
    }
  }

  getAllData() {
    this.channelService.retriveChannel(this.channelId).subscribe(
        data => {
          this.channel = data;
        }
    );
    this.programService.retrieveAllPrograms(this.channelId).subscribe(
        data => {
          this.programs = data;
        }
    );
  }

  deleteProgram(programId: number){
    if (confirm("You are about to delete program: " + programId + " Are you sure?")) {
      this.programService.deleteProgram(programId).subscribe(
          data => {
            this.programs = data;
            this.getAllData();
          }
      );
      this.message=`Program: ${programId}, Deleted Successful!`;
    }
  }

  updateProgram(programId: any) {
    this.router.navigate(['program', this.channelId, programId]);
  }

  addProgram() {
    this.router.navigate(['program', this.channelId, 0]);
  }

}
