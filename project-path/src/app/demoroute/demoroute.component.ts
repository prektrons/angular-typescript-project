import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-demoroute',
  templateUrl: './demoroute.component.html',
  styleUrls: ['./demoroute.component.css']
})
export class DemorouteComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
  }

}
