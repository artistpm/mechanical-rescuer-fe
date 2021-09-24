import {module, test} from 'qunit';
import {setupTest} from 'ember-qunit';

module('Unit | Route | compressed_files', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:compressed-files');
    assert.ok(route);
  });
});
