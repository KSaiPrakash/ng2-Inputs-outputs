import { Component } from '@angular/core';
import {TutorialsComponent} from './tutorials.component';
import { ChildTwoComponent } from './child-two/child-two.component';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [TutorialsComponent, ChildTwoComponent]
})
export class AppComponent {
  title = 'app works!';
  public childData: string;
  public childtwoData: string;
}
