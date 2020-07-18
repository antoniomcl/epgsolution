import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { API_URL } from 'src/app/app.constants';
import { Program } from 'src/app/program-list/program-list.component';

@Injectable({
  providedIn: 'root'
})
export class ProgramDataService {

  constructor(private http: HttpClient) { }

  retrieveAllPrograms(channelId: number) {
    return this.http.get<Program[]>(`${API_URL}/programs/channel/${channelId}`);
  }

  createProgram(program: Program) {
    return this.http.post(`${API_URL}/programs/create`, program);
  }

  retriveProgram(programId: number) {
    return this.http.get<Program>(`${API_URL}/programs/${programId}`);
  }

  updateProgram(programId: number, program: Program) {
    return this.http.put(`${API_URL}/programs/${programId}`, program);
  }

  deleteProgram(programId: number) {
    return this.http.delete<Program[]>(`${API_URL}/programs/${programId}`);
  }
}
