import { Component,ViewChild ,OnInit} from '@angular/core';
import { APIService } from '../api.service';
import { FileUploader, FileLikeObject } from  'ng2-file-upload';
import { concat } from  'rxjs';
import { Router } from '@angular/router';

import { GeneratedFile } from '@angular/compiler';
@Component({
  selector: 'app-upload',
  templateUrl: './upload.page.html',
  styleUrls: ['./upload.page.scss'],
})
export class UploadPage implements OnInit {

  public fileUploader :FileUploader = new FileUploader({});
  picture:any
  comment:any
  constructor (private apiservice :APIService , private router :Router){}
  ngOnInit(){
  }
  @ViewChild("captionInput") caption;
  
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
      formData.append('caption',this.caption.value)
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
  onClickgotoHome(){
    this.router.navigate(['/home'])
  }

 

}
