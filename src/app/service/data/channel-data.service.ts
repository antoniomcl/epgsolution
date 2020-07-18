import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { API_URL } from 'src/app/app.constants';
import { Channel } from 'src/app/channel-list/channel-list.component';

@Injectable({
  providedIn: 'root'
})
export class ChannelDataService {

  constructor(private http: HttpClient) { }

  retrieveAllChannels() {
    return this.http.get<Channel[]>(`${API_URL}/channels`);
  }

  createChannel(channel: Channel) {
    return this.http.post(`${API_URL}/channels/create`, channel);
  }
  
  retriveChannel(id: number) {
    return this.http.get<Channel>(`${API_URL}/channels/${id}`);
  }
}
