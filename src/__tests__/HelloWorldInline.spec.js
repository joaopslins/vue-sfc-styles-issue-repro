import {render} from '@testing-library/vue'
import HelloWorldInline from '../HelloWorldInline.vue'
import '@testing-library/jest-dom'

describe('HelloWorldInline.vue', () => {
  const renderComponent = () => render(HelloWorldInline)

  it('should not find', async () => {
    const { getByText } = renderComponent()

    expect(getByText('Test!')).not.toBeVisible()
  })
})