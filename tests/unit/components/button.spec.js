import { shallowMount } from '@vue/test-utils'
import Button from '@/components/Button'

describe('Button', () => {
  it('renders text using the text passed in from props', () => {
    const text = "Hello";

    const wrapper = shallowMount(Button, {
      props: {
        text: text,
        color: "",
      }
    });

    expect(wrapper.find('button').exists());
    expect(wrapper.text()).toMatch(text);
  }),

  it('renders background colour using the colour passed in from props', () => {
    const color = "green";

    const wrapper = shallowMount(Button, {
      props: {
        text: "",
        color: color,
      }
    });

    expect(wrapper.find('button').exists());
    expect(wrapper.classes()).toContain('btn');
    expect(wrapper.element.style.background).toBe(color);
  }),

  it('clicking the button emits the btn-click event', () => {
    const onClick = jest.fn();
    const wrapper = shallowMount(Button, {
      props: {
        text: "Click Me",
        color: "white",
      },
      listeners: {
        click: onClick
      }
    });

    wrapper.trigger('click');
    expect(wrapper.emitted('click')).toBeTruthy();
    //expect(onClick).toHaveBeenCalled();
  })
})
