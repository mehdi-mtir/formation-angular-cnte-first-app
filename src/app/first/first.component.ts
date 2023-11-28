import { Component, EventEmitter, Input, Output } from "@angular/core";


@Component({
  selector : 'app-first',
  templateUrl : './first.component.html'
})
export class FirstComponent{
  @Input() tabMois? : string[];
  @Output() sendMessageToParent = new EventEmitter<string>();
  message = '';

  ajouterMois(mois : string){
    this.tabMois?.push(mois);
  }

  envoyerMessage(){
    this.sendMessageToParent.emit(this.message);
  }

}
