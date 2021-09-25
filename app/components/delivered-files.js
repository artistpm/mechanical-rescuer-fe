import Component from '@glimmer/component';
import {action} from '@ember/object';

export default class DeliveredFilesComponent extends Component {

  @action
  showDeliveredFileDetails(deliveredFile) {
    alert(`Delivered file is ${deliveredFile}.`);
  }

}
