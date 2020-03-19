import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpClient } from "@angular/common/http";
import { catchError, subscribeOn } from 'rxjs/operators';
import { ObserveOnMessage } from 'rxjs/internal/operators/observeOn';
import { Observable, Subscription } from 'rxjs';
import { throwError } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  getPayment(): Observable<any>{
    return this.http.get<any>(this.apiUrl + `/payment`).pipe(
      catchError( err => this.handleError(err))
    )
  }

  getUsers(): Observable<any>{
    return this.http.get<any>(this.apiUrl + '/users').pipe(
      catchError(err => this.handleError(err))
    )
  }

  personalDetails(personalData){
    return this.http.post(this.apiUrl + '/applicantData', personalData).pipe(
      catchError( err => this.handleError(err))
    )
  }

  guardianDetails(guardianData){
    return this.http.post(this.apiUrl + '/guardianData', guardianData).pipe(
      catchError(err => this.handleError(err))
    )
  }

  choices(choice){
    return this.http.post(this.apiUrl + '/choices', choice).pipe(
      catchError(err => this.handleError(err))
    )
  }

  jambdetail(jamb){
    return this.http.post(this.apiUrl + '/jambdetail', jamb).pipe(
      catchError(err => this.handleError(err))
    )
  }
  // getRRR(): Observable<any>{
  //   return this.http.get<any>(this.apiUrl + '/payment').pipe(
  //     catchError(err => this.handleError(err))
  //   )
  // }

  signup(payload){
    return this.http.post(this.apiUrl + '/users', payload).pipe(
      catchError( err => this.handleError(err))
    )
  }

  purchase(load){
    return this.http.post(this.apiUrl + '/payment', load).pipe(
      catchError( err => this.handleError(err))
    )
  }
  // Error handling 
  handleError(error:HttpErrorResponse) {
     return Observable.throw(error.message || 'server error')
  }

}
