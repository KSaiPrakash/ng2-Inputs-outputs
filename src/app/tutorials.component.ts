import { Component, EventEmitter } from '@angular/core';


@Component({
    selector: 'my-tutorials',
    template: `<h2> Child tutorial Component</h2>
                <label> Enter Child tutorial component value </label>
                <input type="text" #childtext (keyup)="onChange(childtext.value)">
                <p> Value from Parent AppComponent is </p>
                {{parentData}}`,
    inputs: ['parentData'],
    outputs: ['childEvent']
})
export class TutorialsComponent {
    public parentData: string;
    childEvent = new EventEmitter<string>();

    onChange(val: string){
        this.childEvent.emit(val);
    }
}