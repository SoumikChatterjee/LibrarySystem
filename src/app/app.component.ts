import { Component } from '@angular/core';
import { AlphaServiceService } from './alpha-service.service';
import { FormControl, FormGroup } from '@angular/forms'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'library';
  books = [];

  alphaForm = new FormGroup({
    alphaInput: new FormControl('')
  })
  filteredBooks = []



  constructor(private sigmaService: AlphaServiceService) {
    this.sigmaService.retrieveData().subscribe((data: any) => {
      this.books = data.books;
      this.filteredBooks=data.books;
      console.log(data);
    })

  }
  alpha() {
    console.log(this.alphaForm.value)
    this.filteredBooks = this.books.filter((book: any) =>{
      return book.title.toLowerCase().startsWith(this.alphaForm.value.alphaInput?.toLowerCase())});
    
    console.log(this.filteredBooks)
    console.log(this.alphaForm.value.alphaInput);
    


  }
  total = 0;
  booked: { obj: any, freq: number, price: number }[] = [];

  addData(g: any) {
    const index = this.booked.findIndex(item => item.obj === g);

    if (index === -1) {
      this.booked.push({ obj: g, freq: 1, price: g.price.value });
    } else {
      this.booked[index].freq++;
      this.booked[index].price = this.booked[index].obj.price.value * this.booked[index].freq;
    }
    this.total += g.price.value;
  }
  remove(o: any) {
    const index = this.booked.findIndex(item => item.obj === o);
    this.total -= this.booked[index].price;
    this.booked.splice(index, 1);
  }
  decrease(o: any) {
    const index = this.booked.findIndex(item => item.obj === o);
    this.booked[index].freq--;
    this.booked[index].price = this.booked[index].obj.price.value * this.booked[index].freq;
    this.total -= o.price.value;
    if (this.booked[index].freq == 0)
      this.booked.splice(index, 1);
  }
  increase(o: any) {
    const index = this.booked.findIndex(item => item.obj === o);
    this.booked[index].freq++;
    this.booked[index].price = this.booked[index].obj.price.value * this.booked[index].freq;
    this.total += o.price.value;
  }

}
