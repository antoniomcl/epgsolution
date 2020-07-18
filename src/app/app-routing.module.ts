import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';
import { ChannelListComponent } from './channel-list/channel-list.component';
import { ChannelComponent } from './channel/channel.component';
import { ProgramListComponent } from './program-list/program-list.component';
import { ProgramComponent } from './program/program.component';


const routes: Routes = [
  { path: '', component: WelcomeComponent  },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'channel-list', component: ChannelListComponent },
  { path: 'channel', component: ChannelComponent },
  { path: 'program-list/:channelId', component: ProgramListComponent },
  { path: 'program', component: ProgramComponent },
  { path: 'program/:channelId/:programId', component: ProgramComponent },

  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
