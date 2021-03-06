import EmberRouter from '@ember/routing/router';
import config from 'mechanical-rescuer/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('compressed_files');
  this.route('deliveredfiles');
});
