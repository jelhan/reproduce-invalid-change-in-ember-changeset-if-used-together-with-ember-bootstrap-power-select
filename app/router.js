import EmberRouter from '@ember/routing/router';
import config from 'reproduce-invalid-change-in-ember-changeset-if-used-together-with-ember-bootstrap-power-select/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {});
