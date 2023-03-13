import { Component, OnInit } from '@angular/core';
import { faUser,faKey,faStore} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-user-signup',
  templateUrl: './user-signup.component.html',
  styleUrls: ['./user-signup.component.scss']
})
export class UserSignupComponent implements OnInit {
  faUser= faUser;
  faKey=faKey;
  faStore=faStore
  constructor() { }

  ngOnInit(): void {
  }

}
