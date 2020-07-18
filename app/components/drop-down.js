import Component from '@ember/component';
import { action } from '@ember/object';
import { A } from '@ember/array';

export default Ember.Component.extend({
    classNameBindings: ['opened'],
    selection: '',
    
    init(){
      this._super(...arguments);
      this.set('selection', this.get('default'));
    },

    actions:{
      open(){
        this.toggleProperty('opened')
        //console.log(this.selection);
      },
      setSelection(choice){
        this.toggleProperty('opened')
        console.log(choice.srcElement.firstChild.nodeValue);
        //console.log(this.get('childViews'))
        this.set('selection', choice.srcElement.firstChild.nodeValue);
      }
    }
  });