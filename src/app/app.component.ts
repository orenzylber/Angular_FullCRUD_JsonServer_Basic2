import { Component } from '@angular/core';
import { SampService } from './components/samp/samp.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp';
  ar: any[] = []

  constructor(private samp: SampService) {
    samp.getAllData().subscribe(res => this.ar = res)
  }

  removeData(id: number) {
    // console.log(id)
    this.samp.deleteData(id).subscribe();
    this.samp.getAllData().subscribe(res => this.ar = res);
  }

  addUser(name:string, email:string) {
    this.samp.addData(name, email).subscribe();
    this.samp.getAllData().subscribe(res => this.ar = res);
  }
  
  updateUser(id: number, name:string, email:string) {
    this.samp.updData(id, name, email).subscribe();
    this.samp.getAllData().subscribe(res => this.ar = res);
  }
}
