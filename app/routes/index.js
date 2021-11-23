import Route from '@ember/routing/route';
import RSVP from 'rsvp';

export default class IndexRoute extends Route {
  model() {
    return RSVP.hash({
      authors: this.store.findAll('author'),
      post: this.store.findRecord('post', 1),
    });
  }
}
