import { Plugin } from './plugin';

const plugin = new Plugin({
    duration: 500,
    easing: 'ease-in-out',
    sections: {
        parentClass: 'parent-element',
        childClass: 'child-element'
    }
})

plugin.init();
