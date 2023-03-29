import { Component, OnInit } from '@angular/core';
import { CareerModel } from 'src/app/model/career.model';
import { CareerService } from 'src/app/services/career.service';

@Component({
  selector: 'app-career',
  templateUrl: './career-layout.component.html',
  styleUrls: ['./career-layout.component.css']
})
export class CareerLayoutComponent implements OnInit{

  careerList :CareerModel[] = [];

  constructor(private careerService :CareerService) {}

  ngOnInit(): void {
    this.callCareer();
  }

  callCareer() {
    this.careerService.getCareer().subscribe(response => {
      this.careerList = response as Array<CareerModel>;
    });
  }
}
