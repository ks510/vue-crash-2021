import { shallowMount } from '@vue/test-utils'
import Button from '@/components/Button'

describe('Button', () => {
  it('Button text is rendered correctly with the text passed in from props', () => {
    const text = "Hello";

    const wrapper = shallowMount(Button, {
      props: {
        text: text,
        color: "",
      }
    })

    expect(wrapper.find('button').exists());
    expect(wrapper.text()).toMatch(text);
  }),

  it('Button colour is rendered correctly with the color passed in from props', () => {
    const color = "green";

    const wrapper = shallowMount(Button, {
      props: {
        text: "",
        color: color,
      }
    })

    expect(wrapper.find('button').exists());
    expect(wrapper.classes()).toContain('btn');
    expect(wrapper.element.style.background).toBe(color);
  })
})
