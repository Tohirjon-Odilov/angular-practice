import {Component, inject, OnInit} from '@angular/core';
import {Student, StudentService} from '../../../../3-lesson/crm-system/services/student-service';
import {ActivatedRoute, Router, RouterLink} from '@angular/router';

@Component({
  selector: 'app-users',
  imports: [
    RouterLink
  ],
  templateUrl: './users.html',
  styleUrl: './users.css',
})
export class Users implements OnInit {
  private studentService = inject(StudentService)
  private router = inject(ActivatedRoute)
  private route = inject(Router)

  users: Student[] = []
  isAdmin: boolean = false;

  ngOnInit() {
    this.router.queryParamMap.subscribe(params => {
      this.isAdmin = params.get("role") === "admin";
    })

    this.users = this.studentService.getAll()
  }

  logout(){
    localStorage.removeItem("token");
    this.route.navigate(['/login']);
  }
}
