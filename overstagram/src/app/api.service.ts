import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class APIService {
  DJANGO_API_SERVER: string = "http://127.0.0.1:8000";
  constructor(private http:HttpClient) { }

  public uploadImageFormData(formData){
    return this.http.post<any>(`${this.DJANGO_API_SERVER}/upload/`, formData);
  }
  public uploadCommentFormData (formData){
    return this.http.post<any>(`${this.DJANGO_API_SERVER}/addcomment/`, formData);
  }
  public getImage (){
    return this.http.get(`${this.DJANGO_API_SERVER}/img/`);
  }
  public getcomment (){
    return this.http.get(`${this.DJANGO_API_SERVER}/comment/`);
  }
}