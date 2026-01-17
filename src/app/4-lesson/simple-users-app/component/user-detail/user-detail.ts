import {Component, inject, OnInit} from '@angular/core';
import {Student, StudentService} from '../../../../3-lesson/crm-system/services/student-service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-user-detail',
  imports: [],
  templateUrl: './user-detail.html',
  styleUrl: './user-detail.css',
})
export class UserDetail implements OnInit {
  private studentService = inject(StudentService);
  private route = inject(ActivatedRoute);

  user!: Student;

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.user = this.studentService.getById(Number(params.get("id")))
      console.log(this.user);
    })
  }
}
