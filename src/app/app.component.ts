import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  posts = [
    {
      title: 'Mon premier post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nunc risus, pellentesque ac ligula sed, tincidunt fermentum nunc. In volutpat tincidunt enim in maximus.',
      loveIts: 1,
      created_at: new Date()
    },
    {
      title: 'Mon deuxième post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nunc risus, pellentesque ac ligula sed, tincidunt fermentum nunc. In volutpat tincidunt enim in maximus.',
      loveIts: -1,
      created_at: new Date()
    },
    {
      title: 'Encore un post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In nunc risus, pellentesque ac ligula sed, tincidunt fermentum nunc. In volutpat tincidunt enim in maximus.',
      loveIts: 0,
      created_at: new Date()
    }
  ];
}
