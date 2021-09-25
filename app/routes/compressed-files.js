import Route from '@ember/routing/route';

export default class CompressedFilesRoute extends Route {
  model() {
    return [
      'tankman_pilot_20210906_1232.zip',
      'tankman_pilot_20210908_1012.zip',
      'tankman_pilot_20210910_0730.zip',
    ];
  }
}
