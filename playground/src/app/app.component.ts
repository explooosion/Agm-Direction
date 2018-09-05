import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public lat: Number = 24.799448;
  public lng: Number = 120.979021;

  public origin: any = 'Taichung Main Station';
  public destination: any = 'Taichung City Government';

  public renderRoute: object = null;

  public dir = [];
  public datas = [];

  constructor(private http: Http) {
    this.http.get('assets/data1.json').subscribe(result => { this.datas.push(result.json()); });
    this.http.get('assets/data2.json').subscribe(result => { this.datas.push(result.json()); });
  }

  async ngOnInit() {
    // setTimeout(() => this.direction2(), 300);
  }

  // private direction2() {
  //   this.origin = 'Taichung University of Science and Technology';
  //   this.destination = 'Taichung Main Station';
  // }

  public onResponse(event: any) {
    this.dir.push(event);
  }

  public renderfromData(index: number) {
    // Render from memory
    // this.renderRoute = this.dir[index];

    // Render from json file (build from direction response)
    this.renderRoute = this.datas[index - 1];
  }

  public renderNew() {
    this.origin = 'Taichung Main Station';
    this.destination = 'Taichung University of Science and Technology';
    this.renderRoute = null;
  }
}
