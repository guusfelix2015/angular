import { Component } from '@angular/core';
import { MomentsService } from 'src/app/services/moments.service';
import { Moment } from 'src/app/Moment';
import { environment } from 'src/environment/environment';
import { faSearchengin } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  allMoments: Moment[] = [];
  moments: Moment[] = [];
  baseApiUrl = environment.baseApiUrl;

  constructor(private momentService: MomentsService) {}

  ngOnInit(): void {
    this.momentService.getMoments().subscribe((items) => {
      const data = items.data;

      data.map((item) => {
        item.created_at = new Date(item.created_at!).toLocaleString('pt-br');
      });

      this.allMoments = data;
      this.moments = data;
    });
  }

  // todo search
}
