import { Component, OnInit } from '@angular/core';
import { faUser,faKey,faStore} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  faUser= faUser;
  faKey=faKey;
  faStore=faStore
  constructor() { }

  ngOnInit(): void {
  }

}
