import { Component, OnInit, ViewChild } from '@angular/core';
import { MouseEvent as AGMMouseEvent } from "@agm/core"
import { ModalManager } from 'ngb-modal';
import { ApiService } from '../api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @ViewChild('myModal') myModal: any;
  private modalRef: any;
  selectedFiles: any = [];
  lat: any;
  lng: any;
  total_records: any=0;
  constructor(private modalService: ModalManager, private ApiService: ApiService) { }

  ngOnInit(): void {
    this.getUserLocation();
    this.getUserPosts()
  }
  isUpload: boolean = false;
  post: any = {}
  postList: any=[];
  IMAGE_URI = environment.IMAGE_URI;

  openModal() {
    this.modalRef = this.modalService.open(this.myModal, {
      size: "md",
      modalClass: 'mymodal',
      hideCloseButton: false,
      centered: false,
      backdrop: true,
      animation: true,
      keyboard: false,
      closeOnOutsideClick: true,
      backdropClass: "modal-backdrop"
    })
  }
  closeModal() {
    this.modalService.close(this.modalRef);
    //or this.modalRef.close();
  }
  onClickImage() {
    this.isUpload = !this.isUpload;
  }
  selectFiles(event: any) {

    const files = event.target.files;
    let isImage = true;

    for (let i = 0; i < files.length; i++) {
      if (files.item(i).type.match('image.*')) {
        continue;
      } else {
        isImage = false;
        alert('invalid format!');
        break;
      }
    }

    if (isImage) {
      this.selectedFiles = event.target.files;
    } else {
      this.selectedFiles = undefined;
    }

  }

  onSubmitpost() {

    const formData = new FormData();

    for (var i = 0; i < this.selectedFiles.length; i++) {
      formData.append("file", this.selectedFiles[i]);
    }

    formData.append('description', this.post.description ? this.post.description : null);
    formData.append('lat', this.lat ? this.lat : null);
    formData.append('lng', this.lng ? this.lng : null);

    this.ApiService.postAuthForm('user/add-post', formData).subscribe((result:any) => {
      if(result['status'] === 'success'){
        alert("post created successfully")
        this.closeModal();
        this.ngOnInit();
      }else{
        alert(result.message);
      }
    });
  }


  getUserLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
      });
    } else {

      alert(" please allow geolocation")
      this.getUserLocation();

    }
  }


  getUserPosts(){
    this.ApiService.getAuth('user/get-posts-list?page=1').subscribe((result:any) => {
      if(result['status'] === 'success'){
        this.postList=result['data']['post_list'];
        this.total_records=result['data']['count']
        alert("post fetched successfully")
      }else{
        alert(result.message);
      }
    });

  }



}
