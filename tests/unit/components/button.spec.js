import { shallowMount } from '@vue/test-utils'
import Button from '@/components/Button'

describe('Button', () => {
  it('renders props.msg when passed', () => {
    const text = "Hello";
    const color = "green";

    const wrapper = shallowMount(Button, {
      props: {
        text: text,
        color: color,
      }
    })
    expect(wrapper.text()).toMatch(text);
    expect(wrapper.classes()).toContain('btn');
    expect(wrapper.find('button').element.style.color).toBe(color);
    expect(wrapper.find('button').exists());
  })
})
