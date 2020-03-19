import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  private logoSource = new BehaviorSubject('assets/images/nda.png')
  defaultLogo = this.logoSource.asObservable();

  constructor() { }

  changeLogo(logo:any){
    this.logoSource.next(logo)
  }
}
