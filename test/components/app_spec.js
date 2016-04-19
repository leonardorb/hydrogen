import { renderComponent, expect } from '../test_helper'
import App from '../../src/js/client/components/app'

describe('App', () => {

  it('should contain Hello World', () => {

    const component = renderComponent(App)

    expect(component).to.contain('Hello World')
  })

})