import { Component, OnInit } from '@angular/core';
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

export class AppComponent implements OnInit {
  title = 'sdTrello';
  newListTitle;
  newCardTitle;
  newCardDesc;
  currentList;
  finalList: List[] = [];
  listt;
  showAddList = false;
  showAddCard = false;

  constructor() {}

  ngOnInit() {
    this.showAddCard = false;
    this.showAddList = false;

    // To edit
    console.log(this.title);
    this.finalList = BoardData;
    console.log(this.finalList);

    this.onLoad();
  }

  onLoad() {
    if (!localStorage.getItem('list data')) {
      localStorage.setItem('list data', JSON.stringify(this.finalList));
    }

    this.listt = JSON.parse(localStorage.getItem('list data'));
    console.log(this.listt);

    this.listt.forEach(element => {
    console.log(element.title);
    });
  }

  onAddList() {
    this.showAddList = false;
    const newlist = { title: this.newListTitle , cards: [] };

    this.listt.push(newlist);
    localStorage.setItem('list data', JSON.stringify(this.listt));
  }

  onDeleteCard(list: List, card: Card) {
    console.log(card);
    console.log(list);

    this.listt.forEach(element => {
      console.log(element);
      if ( element.title === list.title) {
        console.log('hiiiii');
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

    console.log(this.currentList);

    this.showAddCard = false;
    const newEntry = { title: this.newCardTitle, desc: this.newCardDesc, createdOn: new Date().getMilliseconds() };
    console.log(newEntry);

    this.listt.forEach(element => {
      console.log(element);
      if ( element.title === this.currentList.title) {
        element.cards.push(newEntry);
      }
    });

  }
  drop(list) {
    // if (event.previousContainer === event.container) {
    //   moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    // } else {
    //   transferArrayItem(event.previousContainer.data,
    //                     event.container.data,
    //                     event.previousIndex,
    //                     event.currentIndex);
    // }
    
  }
}



