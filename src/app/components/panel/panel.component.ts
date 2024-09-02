import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrl: './panel.component.scss'
})
export class PanelComponent implements OnInit {
  @Input() caption = '';
  @Input() icon = '';

  constructor() {}

  ngOnInit(): void {

  }

}
