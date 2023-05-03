import { Component, OnInit } from '@angular/core';
import { ContentModel } from 'src/app/model/content.model';
import { AwsService } from 'src/app/services/aws.service';
import { HomeService } from 'src/app/services/home.service';
import { LocalService } from 'src/app/services/local.service';


@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.css']
})
export class HomeLayoutComponent implements OnInit{

  selectedFiles: any = '' 

  constructor(
    private localService :LocalService,
    private homeService :HomeService,
    private uploadService :AwsService
  ) {}

  headerData: any;
  aboutData :ContentModel[] = [];
  valueData :ContentModel[] = [];

  ngOnInit(): void {
    this.callLocalApi();
  }

  callLocalApi() {
    this.localService.getBaseData().subscribe(response => {
      let data = response as any;
      this.convertData(data.home);
    });
  }

  callApi() {
    this.homeService.getHomeData().subscribe(response => {
      let data = response as any;
      this.convertData(data);
    });
  }

  convertData(response :any) {
    this.headerData = response.header;
    this.aboutData = response.about as Array<ContentModel>;
    this.valueData = response.value as Array<ContentModel>;
  }
  
  upload() {
    const file = this.selectedFiles.item(0);
    // this.uploadService.uploadFile(file);
  }
  
  selectFile(event :any) {
    this.selectedFiles = event.target.files;
  }
}
