import Component from '@ember/component';
import Ember from 'ember';

export default Component.extend({
    click() {
        document.getElementById("myDropdown").classList.toggle("show")
    }
})