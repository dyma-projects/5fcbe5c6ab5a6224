import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-exercice2',
  templateUrl: './exercice2.component.html',
  styleUrls: ['./exercice2.component.css']
})
export class Exercice2Component implements OnInit {
  public valeur: string;
  @ViewChild('myinput',{static:true}) public valeurChange:ElementRef<HTMLInputElement>;

  constructor() { }

  ngOnInit() {

    
  }

  changeInput():void{
    console.log(this.valeurChange.nativeElement.value);
    this.valeur = this.valeurChange.nativeElement.value;
  }

}
