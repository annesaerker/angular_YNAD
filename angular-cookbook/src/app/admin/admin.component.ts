import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { ServiceChatComponent } from './service-chat/service-chat.component';



@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {



  constructor( private authService: AuthService) { }

  ngOnInit() {
  }

}
