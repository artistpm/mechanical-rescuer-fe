import Route from '@ember/routing/route';

export default class CompressedFilesRoute extends Route {
  model() {
    return ['Marie Curie', 'Mae Jemison', 'Albert Hofmann'];
  }
}
