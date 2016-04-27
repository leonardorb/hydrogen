import _$ from 'jquery'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'


import chai, { expect } from 'chai'
import chaiJquery from 'chai-jquery'
import jsdom from 'jsdom'
import TestUtils from 'react-addons-test-utils'

import reducers from '../src/js/client/reducers'

global.document = jsdom.jsdom('<!doctype html><html><head></head><body></body></html>')
global.window = global.document.defaultView

const $ = _$(window)

chaiJquery(chai, chai.util, $)

function renderComponent(ComponentClass, props = {}, state = {}) {
  const componentInstance = TestUtils.renderIntoDocument(
    <Provider store={createStore(reducers, state)}>
      <ComponentClass {...props} />
    </Provider>
  )

  return $(ReactDOM.findDOMNode(componentInstance))
}

$.fn.simulate = function(eventName, value) {
  if (value) {
    this.val(value)
  }
  TestUtils.Simulate[eventName](this[0])
}

export { renderComponent, expect }