import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {


  userId: string = '';

  constructor(private activatedRoute: ActivatedRoute, private authService: AuthService, private router: Router) { 
    if(!this.authService.isLoggedIn()){
      this.router.navigate(['/login'])
    }
  }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      this.userId = params['user'];
      console.log('El usuario es ' + params['user']);
    });
    this.getPosts();
  }

  getPosts(){
    
  }
}
