import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class IndexController extends Controller {
  @action
  handleSubmit(changeset, event) {
    if (event) {
      event.preventDefault();
    }

    console.log(changeset.get('change'), changeset.get('changes'));
  }
}
