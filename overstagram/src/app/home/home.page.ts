import { Component } from '@angular/core';
import { APIService } from '../api.service';
import { FileUploader, FileLikeObject } from  'ng2-file-upload';
import { concat } from  'rxjs';
import { GeneratedFile } from '@angular/compiler';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  
  public fileUploader :FileUploader = new FileUploader({});
  picture:any
  comment:any
  constructor (private apiservice :APIService){}
  ngOnInit(){
    this.showImage();
  }
  
  getFiles():FileLikeObject[]{
    return this.fileUploader.queue.map((fileItem) => {
      return fileItem.file;
    })
  }
  UploadImg(){
    let files = this.getFiles();
    let requests = [];
    files.forEach((file)=>{
      let formData = new FormData();
      formData.append('image',file.rawFile,file.name);
      requests.push(this.apiservice.uploadImageFormData(formData));
    });
    concat (...requests).subscribe(
      (res) => {
        console.log(res);
      },
      (err) =>{
        console.log(err);
      }
    );
  }
showImage(){
  this.apiservice.getImage().subscribe(res => {
    this.picture = res
  })
  }
}
