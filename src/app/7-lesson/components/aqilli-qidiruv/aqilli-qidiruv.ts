import { ChangeDetectionStrategy, Component, inject, OnInit, signal } from '@angular/core';
import { User } from '../../model';
import { HttpClient } from '@angular/common/http';
import { delay, single } from 'rxjs';
import { MessageService } from 'primeng/api';
import { DebounceInputDirective } from '../../debounceInputDirective';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-aqilli-qidiruv',
  standalone: true,
  templateUrl: './aqilli-qidiruv.html',
  styleUrl: './aqilli-qidiruv.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [DebounceInputDirective, InputTextModule],
})
export class AqilliQidiruv implements OnInit {
  private $http = inject(HttpClient);
  private messageService = inject(MessageService);

  users = signal<User[]>([]);

  ngOnInit(): void {
    this.getUsers();
  }

  search(Event: Event) {
    const input = Event.target as HTMLInputElement;
    this.getUsers(input.value);
  }
  getUsers(searchText: string | null = 'Anastassia') {
    this.$http
      .get<{ users: User[] }>(`/data/users.json?search=${searchText}`)
      .pipe(delay(500))
      .subscribe((data) => {
        this.messageService.add({
          severity: 'success',
          summary: 'Success',
          detail: 'Users loaded successfully',
        });

        if (!searchText) {
          return this.users.set(data.users);
        }

        const searchTextLowerCased = searchText.toLocaleLowerCase();
        this.users.set(
          data.users.filter(
            (user) =>
              user.first_name.toLocaleLowerCase().includes(searchTextLowerCased) ||
              user.last_name.toLocaleLowerCase().includes(searchTextLowerCased),
          ),
        );
      });
  }
}
