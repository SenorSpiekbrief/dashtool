import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SystemMenuService {
  private configUrl = 'assets/config/menu-config.json'; // Path to the external JSON

  constructor(private http: HttpClient) {}

  getMenuConfig(): Observable<any[]> {
    return this.http.get<any[]>(this.configUrl);
  }
}