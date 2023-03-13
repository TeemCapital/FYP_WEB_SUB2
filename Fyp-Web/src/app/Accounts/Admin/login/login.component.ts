import { faUser,faKey} from '@fortawesome/free-solid-svg-icons';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  faUser= faUser;
  faKey=faKey;
  constructor() { }

  ngOnInit(): void {
  }

}
