# SdTrello trello-app
It implement a trello board which will help us keep track of cards categorised into lists. (Sort of board with list containing sticky notes)
 
On the board we can have multiple lists.

Each list can have any number of cards. For example, in the above figure Teams list has two cards.
Mandatory attributes of each card - title, desc, creation time and a cross(X) button to delete
it.
A new list can be added to the board by pressing the ADD LIST button present on the right side
of the board. Each list should have a Title, a cross(X) button to delete it and can have 0 or
more cards. Deleting a list should delete all the cards present in that list.
A new card can be added to a list via a plus(+) button present at the bottom of each
list(inside a list).
A card can be dragged from one list and dropped on the second list to make it part of the
second list. If it is dropped outside the second list, it comes back to the list from which it was
picked up.

Use Cases:
---------
1. Whenever a card is dropped on a list, the existing cards should rearrange themselves in
reverse chronological order of their creation time.
2. Duplicate cards are allowed in a list( A card is duplicate if it has the same title as some other
card in a particular list. Two cards with the same title can exist in different lists.)
3. On refreshing the page or opening the same page in a new tab, the existing lists and cards
on the page should remain intact.

**Technical Specification:**

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.3.

**To run the Project**
run npm install // To install all the modules
run ng serve // to launch the Project
Open https://localhost:4020/ to open the project on browser

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
