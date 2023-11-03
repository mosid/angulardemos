import { Component } from '@angular/core';

@Component({
  selector: 'app-demo-ng-template',
  templateUrl: './demo-ng-template.component.html',
  styleUrls: ['./demo-ng-template.component.scss']
})
export class DemoNgTemplateComponent {
  // change to true/false to see the effect
  public hasBalance: boolean = true;
}
