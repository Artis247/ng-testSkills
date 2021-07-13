import { Component, OnInit } from '@angular/core';
//import {tests} from './testImages/*.jpg';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styles:['img{width:450px;height:auto;padding:1rem 0;display:flex;justify-content:center;}'],
})
export class ImageComponent implements OnInit {
 images=[
   "./assets/testImages/test001.jpg" ,
   "./assets/testImages/test002.jpg",
   "./assets/testImages/test003.jpg" ,
   "./assets/testImages/test004.jpg",
   "./assets/testImages/test005.jpg" ,
   "./assets/testImages/test006.jpg",
   "./assets/testImages/test007.jpg" ,
   "./assets/testImages/test008.jpg",
   "./assets/testImages/test009.jpg" ,
   "./assets/testImages/test010.jpg",
]
 
  constructor() { }

  ngOnInit(): void {
  }

}
