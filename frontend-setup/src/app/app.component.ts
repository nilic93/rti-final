import { Component, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


@Injectable()
export class AppComponent {
  constructor(private http: HttpClient) { }
  title = 'Angular serverless';

  // tslint:disable-next-line:typedef
  async fetchAsync() {
    const response = await fetch('https://sgktvovhpa.execute-api.eu-central-1.amazonaws.com/prod/west');
    console.log(JSON.stringify(response));
    // const data = await response.json();
    // return data;
  }
  // tslint:disable-next-line:typedef
  openImage(event: any) {
    console.log('test');
    const result: any  = this.http.get('https://sgktvovhpa.execute-api.eu-central-1.amazonaws.com/prod/west')
      // tslint:disable-next-line:no-shadowed-variable
      .subscribe((result: any) => {
        window.open(result.link, '_blank');
      });
    // window.open(`${result.link}`);
    console.log('result', JSON.stringify(result));
  }
}



