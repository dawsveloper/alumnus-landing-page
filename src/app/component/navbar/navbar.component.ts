import { Component } from '@angular/core';
import {faReceipt, faCartShopping, faMagnifyingGlass, faUser} from '@fortawesome/free-solid-svg-icons'


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  toggleIsOpen = false;

  icOrder = faReceipt;
  icCart = faCartShopping;
  icSearch = faMagnifyingGlass;
  icUser = faUser;

  openToggle(){
    this.toggleIsOpen = !this.toggleIsOpen
  }
}
