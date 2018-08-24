import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public lat: Number = 24.799448;
  public lng: Number = 120.979021;

  public origin: any = '大潤發新竹湳雅店';
  public destination: any = '國立新竹高級中學';

  public waypoints: object = [
    {
      location: '國立新竹高級商業職業學校',
      stopover: false,
    },
    {
      location: '新竹市立建功高級中學',
      stopover: false,
    },
  ];

  public renderOptions = {
    suppressMarkers: true,
  };

  public markerOptions = {
    origin: {
      icon: 'https://i.imgur.com/7teZKif.png',
      infoWindow: `
        <h4>origin<h4>
        <a href='http://www-e.ntust.edu.tw/home.php' target='_blank'>Taiwan Tech</a>
        `,
    },
    destination: {
      icon: 'https://i.imgur.com/7teZKif.png',
      infoWindow: `
        <h4>destination<h4>
        <a href='http://www-e.ntust.edu.tw/home.php' target='_blank'>Taiwan Tech</a>
        `,
    },
    waypoints: [
      {
        icon: 'https://i.imgur.com/7teZKif.png',
        infoWindow: `
          <h4>waypoints111<h4>
          <a href='http://www-e.ntust.edu.tw/home.php' target='_blank'>Taiwan Tech</a>
          `,
      },
      {
        icon: 'https://i.imgur.com/7teZKif.png',
        infoWindow: `
          <h4>waypoints222<h4>
          <a href='http://www-e.ntust.edu.tw/home.php' target='_blank'>Taiwan Tech</a>
          `,
      },
    ],
    // waypoints: [
    //   {
    //     icon: 'https://i.imgur.com/7teZKif.png',
    //     infoWindow: `
    //       <h4>waypoints111<h4>
    //       <a href='http://www-e.ntust.edu.tw/home.php' target='_blank'>Taiwan Tech</a>
    //       `,
    //   },
    //   {
    //     icon: 'https://i.imgur.com/7teZKif.png',
    //     infoWindow: `
    //       <h4>waypoints222<h4>
    //       <a href='http://www-e.ntust.edu.tw/home.php' target='_blank'>Taiwan Tech</a>
    //       `,
    //   },
    // ],
  };

  public visible: Boolean = true;
  public changeHandler(event: any) {
    // You can do anything.
    console.log('aaa', event);
  }

  hide() {
    this.visible = !this.visible;
  }
}
