import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() book:any;
  @Output() addBook: EventEmitter<Event> = new EventEmitter();

  getBooks(id: Event)
  {
    this.addBook.emit(id);
  }
}