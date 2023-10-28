import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css']
})
export class Exercice1EnfantComponent implements OnInit {
  @Output() actionCompteur:EventEmitter<number> = new EventEmitter();
  @Input() compteur: number;

  constructor() { }

  ngOnInit() {
  }

  public onActionCompteur(i:number):void{
    this.actionCompteur.emit(i);

  }

}
