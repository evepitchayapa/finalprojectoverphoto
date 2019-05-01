import { Component,ViewChild } from '@angular/core';
import { APIService } from '../api.service';
import { FileUploader, FileLikeObject } from  'ng2-file-upload';
import { concat } from  'rxjs';

import { Router } from '@angular/router';
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
  like:any
  addlike:any
  listcomment = []
  constructor (private apiservice :APIService,private router : Router){}
  ngOnInit(){
    this.showImage();
    this.showComment();
  }
  @ViewChild("captionInput") caption;
  addcomment : any;

  onClickgotoUpload(){
    this.router.navigate(['/upload'])
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
    this.showImage()
  }
add_comment (id){
    let requests = [];
    let formData = new FormData();

    formData.append('comment',this.addcomment)
    formData.append('img_id',id)
    requests.push(this.apiservice.uploadCommentFormData(formData));
    concat (...requests).subscribe(
      (res) => {
        console.log(res);
      },
      (err) =>{
        console.log(err);
      }
    );
    this.fileUploader = new FileUploader({});
    
}
showImage(){
  this.apiservice.getImage().subscribe(res => {
    this.picture = res
  })
  }
showComment(){
  this.apiservice.getcomment().subscribe(res => {
    this.comment = res
  });

}
 
}
