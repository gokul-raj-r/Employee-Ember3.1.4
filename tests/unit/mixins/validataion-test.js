import EmberObject from '@ember/object';
import ValidataionMixin from 'ember-employee/mixins/validataion';
import { module, test } from 'qunit';

module('Unit | Mixin | validataion', function() {
  // Replace this with your real tests.
  test('it works', function (assert) {
    let ValidataionObject = EmberObject.extend(ValidataionMixin);
    let subject = ValidataionObject.create();
    assert.ok(subject);
  });
});
