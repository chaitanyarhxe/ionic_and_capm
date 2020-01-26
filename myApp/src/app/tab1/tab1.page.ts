import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  private myToDos: any = [];
  constructor(private http: HttpClient) {
    this.http
      .get(
        'https://cors-anywhere.herokuapp.com/http://87a509a9.ngrok.io/data/ToDos'
      )
      .subscribe(response => {
        this.myToDos = response;
      });
  }
}
