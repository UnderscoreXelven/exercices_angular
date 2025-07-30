import { Component } from '@angular/core';
import { EmojiPipe } from '../../utils/pipes/emoji-pipe';
import { Book } from '../../utils/types/book.type';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-librairie',
  imports: [EmojiPipe, FormsModule],
  templateUrl: './librairie.html',
  styleUrl: './librairie.css'
})

export class Librairie {
  book : Book = {
    title: "",
    author: "",
    isRead: false,    
  }

  books : Book[] = [
    {title: "Livre 1", author: "Auteur 1", isRead: true},
    {title: "Livre 2", author: "Auteur 1", isRead: false},
    {title: "Livre 3", author: "Auteur 2", isRead: true},
    {title: "Livre 4", author: "Auteur 1", isRead: false},
    {title: "Livre 5", author: "Aut eur 2", isRead: true},
  ]

  toggleIsRead(book: Book) : void {
    book.isRead = !book.isRead
  }

  submitBook(): void {
    const newBook: Book = {
      title: this.book.title,
      author: this.book.author,
      isRead: false
    };
  
    this.books.push(newBook);
  
    //Reset le formulaire en mettant les champs à vide
    this.book = {
      title: '',
      author: '',
      isRead: false
    };
  }
  
}
