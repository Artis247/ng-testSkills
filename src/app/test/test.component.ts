import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styles: ['img{width:400px;height:auto;padding:1rem 0;display:flex;justify-content:center;}']
})
export class TestComponent implements OnInit {
   numberOfTest=0;
   rezultat=0;
  
   shifr='Выбрать правильный ответ';
   answer=[1,2,3,1,2,3,2,3,3,2];
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
   "./assets/testImages/testItog.jpg"
];
   textOfTest=[
    ['What will this console.log output?','Happy New Year!','This is 2021','year is not defined','undefined' ],
    ['What will this console.log output by clicking on the First Button?','This is button #1','This is button #2','TypeError:cannot read property "length" of null','TypeError:document.getElementsByTagName is not a function'],
    ['Which image will NOT be loaded by browser?', 'image-1','image-2','image-3','image-4'],
    ['Which child will be on red background? ','<span>Hello</span>','<div>World!</div>','Both of them','No one of them'],
    ['What will this console.log output?','undefined','3','NaN','4'],
    ['What will this console.log output?','1','0','undefined','ReferenceError:x is not defined'],
    ['What will this console.log output? ','undefined','2','ReferenceError','[object Object]'],
    ['Which link will be in red?','https pdf','https doc','http pdf','http doc'],
    ['What will the alert display in the first and second cases?','text,value','value,value','text,text','text,undefined'],
    ['Answer the question above','First picture-1.1 Second picture-1.2','First picture-1.2 Second picture-1.1','First picture-2.2 Second picture-1.1','First picture-1.1 Second picture-2.2'],
    ['Количество правильных ответов из 10 :']

  ];
  rezult=[
     '','','','','','','','','','',
     this.rezultat
  ]

  selectControl:FormControl = new FormControl();
  declarationOfTest=this.textOfTest[0][0];
  constructor() { }

  ngOnInit(): void {
  

  }
estimateMethod(){
   
   
   if (Number(this.selectControl.value)==Number(this.answer[this.numberOfTest])) {
      this.rezultat++;
   }else{}
   
   console.log(this.rezultat);
   
   this.numberOfTest++;
   this.rezult[10]=this.rezultat;
}
}
