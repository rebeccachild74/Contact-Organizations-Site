import Component from '@ember/component';
import { set } from '@ember/object';

export default Component.extend({
  selected: '',
  actions: {
    click(event){
    this.set('selected', this.get('value'))
    console.log(this.selected);
    }
  },
  getSelection: function(){
    this.sendAction('action', getSelection);
    return selected;
  }.property('choice')
});