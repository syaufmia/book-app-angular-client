import { Component, OnInit } from '@angular/core';
import {InputService} from '../../service/input.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private input: InputService, private router: Router) { }

  ngOnInit(): void {
  }

}
