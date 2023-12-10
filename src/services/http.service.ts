import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class HttpService {
    constructor(private readonly http: HttpClient) { }

    baseUrl = 'http://localhost:8080/api';
    baseHeaders = new HttpHeaders(
        { 
          'Content-Type': 'application/json', 
        }
      )

    authSignup(payload: any): Observable<any>{
        return this.http.post<any>(
          `${this.baseUrl}/auth/signup`, payload, { headers: this.baseHeaders }
        )
      }

    authSignIn(payload: any): Observable<any>{
        return this.http.post<any>(
          `${this.baseUrl}/auth/signin`, payload, { headers: this.baseHeaders }
        )
      }

    authOtp(payload: any): Observable<any>{
        return this.http.post<any>(
          `${this.baseUrl}/auth/otp`, payload, 
          { 
            headers: new HttpHeaders(
              { 
                'Content-Type': 'application/json',
                'x-access-token': JSON.parse(localStorage.getItem('res') || '{}').accessToken
              })
          }
        )
      }

      uploadImage(payload: any): Observable<any>{
        return this.http.post<any>(`${this.baseUrl}/upload`, payload);
      }
}