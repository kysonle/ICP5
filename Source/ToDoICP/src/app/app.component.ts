import { Component } from '@angular/core';
import index from '@angular/cli/lib/cli';
import {isStringLiteralLike} from 'codelyzer/util/utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // define list of items
  items = [];

  // Write code to push new item
  submitNewItem(newItem: string) {
    this.items.push(newItem);
    console.log(this.items);
  }

  // Write code to complete item
  completeItem(itemToDo: string) {
    this.items.splice(Number(itemToDo));
  }

  // Write code to delete item
  deleteItem(itemList) {
    // tslint:disable-next-line:no-shadowed-variable
    for (let index = 0; index <= this.items.length; index++) {
      if (itemList === this.items[index]) {
        this.items.splice(index, 1);
      }
    }
  }
}
