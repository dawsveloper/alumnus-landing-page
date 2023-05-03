import { Component, OnInit } from '@angular/core';
import { CareerModel } from 'src/app/model/career.model';
import { CareerService } from 'src/app/services/career.service';
import { LocalService } from 'src/app/services/local.service';

@Component({
  selector: 'app-career',
  templateUrl: './career-layout.component.html',
  styleUrls: ['./career-layout.component.css']
})
export class CareerLayoutComponent implements OnInit{

  careerList :CareerModel[] = [];

  constructor(
    private careerService :CareerService,
    private localService :LocalService) {}

  ngOnInit(): void {
    this.callLocalCareer();
  }

  callCareer() {
    this.careerService.getCareer().subscribe(response => {
      this.careerList = response as Array<CareerModel>;
    });
  }

  callLocalCareer() {
    this.localService.getBaseData().subscribe(response => {
      let data = response as any;
      this.careerList = data.career as Array<CareerModel>;
    });
  }
}
