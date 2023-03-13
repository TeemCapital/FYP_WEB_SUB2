import { Component, OnInit } from '@angular/core';
import { faUser,faKey} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {
  faUser= faUser;
  faKey=faKey;
  constructor() { }

  ngOnInit(): void {
  }

}
