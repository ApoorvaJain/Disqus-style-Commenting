import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user: User = {
    username : 'Apoorva',
    thumbnailUrl: 'https://picsum.photos/id/250/40/40'
  };

  private isLoggedIn: boolean;

  getLoggedInUser() {
    return this.user;
  }
}
