import { Component, OnInit } from '@angular/core';
import { AccessLogService } from '../services/access-log.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private accessThang: AccessLogService) { }

  ngOnInit() {
  }

}
