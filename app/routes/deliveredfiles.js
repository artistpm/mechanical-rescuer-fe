import Route from '@ember/routing/route';

export default class DeliveredfilesRoute extends Route {
  model() {
    return [
      'Tankman/Pilot 2021.09.06. 12:52',
      'Tankman/Pilot 2021.09.07. 12:52',
      'Tankman/Pilot 2021.09.08. 12:52',
    ];
  }
}
