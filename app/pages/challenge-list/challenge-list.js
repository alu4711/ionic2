import {Page, NavController, NavParams} from 'ionic-angular';
import {ChallengeService} from '../../services/challenge-service';


@Page({
  templateUrl: 'build/pages/challenge-list/challenge-list.html'
})
export class ChallengeListPage {
  static get parameters() {
    return [[NavController], [NavParams], [ChallengeService]];
  }

  constructor(nav, navParams, challengeService) {
    this.nav = nav;
    this.challengeService = challengeService;

    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

/*
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    'american-football', 'boat', 'bluetooth', 'build'];

    this.items = [];
    for(let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
    */
  }

  ngOnInit() {
        this.challengeService.findAll().subscribe(
            data => this.brokers = data
        );
    }

  itemTapped(event, item) {
    this.nav.push(ListPage, {
      item: item
    })
  }
}
