import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class IndexController extends Controller {
  authors = [
    { name: 'Jane Doe' },
    { name: 'John Doe' },
    { name: 'Max Mustermann' },
    { name: 'Erika Mustermann' },
  ];
  post = {
    title: 'My post',
    author: this.authors[2],
  };

  @action
  handleSubmit(changeset, event) {
    event.preventDefault();

    console.log(changeset.get('change'), changeset.get('changes'));
  }
}
