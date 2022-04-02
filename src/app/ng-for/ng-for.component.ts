import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {
  filmes: string[] = ['Mad Max - Fury Road', 'The Raid', 'MI-Fallout']

  constructor() { }

  ngOnInit(): void {
  }

}
