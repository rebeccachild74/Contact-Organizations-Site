import Component from '@ember/component';
import Ember from 'ember';

export default Component.extend({
    options() {
        this.options = [
            { name: 'Yehuda' },
            { name: 'Tom' },
            { name: 'Trek' }
          ]
    }
})