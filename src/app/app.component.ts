import { Component, OnDestroy, OnInit } from '@angular/core';
import BoardData from './../assets/List.json';
import {CdkDragDrop} from '@angular/cdk/drag-drop';
export interface DialogData {
  title: string;
}
export interface Card {
  title: string;
  desc: string;
  createdOn: string;
}

export interface List {
  title: string;
  cards: Array<Card>;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit, OnDestroy {
  title = 'sdTrello';
  newListTitle;
  newCardTitle;
  newCardDesc;
  currentList;
  finalList: List[] = [];
  listt = [];
  showAddList = false;
  showAddCard = false;

  constructor() {}

  ngOnInit() {
    this.showAddCard = false;
    this.showAddList = false;

    this.onLoad();
  }

  onLoad() {
    if (!localStorage.getItem('sdtrello')) {
      localStorage.setItem('sdtrello', JSON.stringify(this.listt));
    }

      this.listt = JSON.parse(localStorage.getItem('sdtrello'));
      this.save();
  }

  onAddList() {
    this.showAddList = false;
    const newlist = { title: this.newListTitle , cards: [] };

    this.listt.push(newlist);
    this.save();
  }

  onDeleteCard(list: List, card: Card) {

    this.listt.forEach(element => {
      console.log(element);
      if ( element.title === list.title) {
        element.cards = element.cards.filter(c => c.title !== card.title);
      }


    });

  }

  onAddCard(list) {
    this.showAddCard = true;
    this.currentList = list;
  }

  onCancel() {
    this.showAddCard = false;
  }

  onAddCardDetails() {

    this.showAddCard = false;
    const newEntry = { title: this.newCardTitle, desc: this.newCardDesc, createdOn: Date.now() };

    this.listt.forEach(element => {
      if ( element.title === this.currentList.title) {
        element.cards.push(newEntry);
      }
    });

    this.save();

  }

  drop(event, list) {
    const fromList = event.item.dropContainer.data;
    const toList = list;
    const cardMoved: Card = event.item.data;

    this.onDeleteCard(fromList, cardMoved);

    this.listt.forEach(element => {
      if (element.title === toList.title) {
        element.cards.push(cardMoved);
        this.save();
        return;
      }
    });
  }

  save() {
    this.sortList();
    localStorage.setItem('sdtrello', JSON.stringify(this.listt));
  }

  sortList() {
    this.listt.forEach(element => {
      element.cards.sort(this.compare);
    });
  }

  compare(a, b) {
    return (b.createdOn - a.createdOn);
  }

  ngOnDestroy() {
    localStorage.setItem('sdtrello', JSON.stringify(this.listt));
  }
}



