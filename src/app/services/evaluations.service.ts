import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class EvaluationsService {
  public headers = {};
  constructor(private http: HttpClient) {}

  saveAttachments(data: any) {
    const token = localStorage.getItem('token');
    this.headers = {
      Authorization: `Bearer ${token}`,
    };
    return this.http.post(
      `${environment.apiURL}/evaluations/saveAttachments`,
      data,
      { headers: this.headers }
    );
  }

  getEvaluations(data: any, page: Number) {
    return this.http.post(
      `${environment.apiURL}/evaluations/getEvaluations?page=${page}`,
      data
    );
  }

  downloadFileByFilename(data: any) {
    return this.http.post(
      `${environment.apiURL}/evaluations/downloadFileByFilename`,
      data
    );
  }

  downloadFilesByBulkFile(data: any) {
    const token = localStorage.getItem('token');
    this.headers = {
      Authorization: `Bearer ${token}`,
    };
    return this.http.post(
      `${environment.apiURL}/evaluations/downloadFilesByBulkFile`,
      data,
      { headers: this.headers }
    );
  }
}
