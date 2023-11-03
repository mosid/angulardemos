import { Component } from '@angular/core';

@Component({
  selector: 'app-demo-ng-container',
  templateUrl: './demo-ng-container.component.html',
  styleUrls: ['./demo-ng-container.component.scss']
})
export class DemoNgContainerComponent {
  public hasBalance: boolean = true;
  public activeSession: boolean = true;
}
