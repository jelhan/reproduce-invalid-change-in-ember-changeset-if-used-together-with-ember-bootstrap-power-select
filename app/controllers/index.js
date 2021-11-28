import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class IndexController extends Controller {
  authorsWithoutEmberData = [
    { name: 'Jane Doe' },
    { name: 'John Doe' },
    { name: 'Max Mustermann' },
    { name: 'Erika Mustermann' },
  ];

  postWithoutEmberData = {
    title: 'Post without Ember Data',
    author: this.authorsWithoutEmberData[2],
  };

  @action
  handleSubmit(changeset, event) {
    if (event) {
      event.preventDefault();
    }

    console.log(changeset.get('change'), changeset.get('changes'));
  }
}
