import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { A } from '@ember/array';

export default class NewMessageInputComponent extends Component{
    selectedOption;

    @action
    setSelection(event) {
        this.set('selectedOption', selected);
        console.log(this.get('selectedOption'));
    }
}