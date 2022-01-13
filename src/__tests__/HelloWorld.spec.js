import {render} from '@testing-library/vue'
import HelloWorld from '../HelloWorld.vue'
import '@testing-library/jest-dom'

describe('HelloWorld.vue', () => {
  const renderComponent = () => render(HelloWorld)

  it('should not find', async () => {
    const { getByText } = renderComponent()

    expect(getByText('Test!')).not.toBeVisible()
  })
})