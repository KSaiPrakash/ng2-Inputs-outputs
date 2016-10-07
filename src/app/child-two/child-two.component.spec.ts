/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { ChildTwoComponent } from './child-two.component';

describe('Component: ChildTwo', () => {
  it('should create an instance', () => {
    let component = new ChildTwoComponent();
    expect(component).toBeTruthy();
  });
});
