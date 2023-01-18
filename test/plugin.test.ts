import {Plugin} from "../src/plugin";
import {Options} from "../src/type/options";

describe('Plugin', () => {
    let plugin: Plugin;
    let options: Options;

    beforeEach(() => {
        // sections = [
        //     document.createElement('div').classList.add(options.sections.childClass),
        //     document.createElement('div'),
        //     document.createElement('div'),
        // ];
        options = {
            duration: 500,
            easing: 'ease-in-out',
            sections: {
                parentClass: 'parent-element',
                childClass: 'child-element'
            }
        };
        plugin = new Plugin(options);
    });

    afterEach(() => {
        plugin.destroy();
    });

    it('should initialize correctly', () => {
        plugin.init();
        expect(plugin.findCurrentIndex).toBe(1);
    });

    it('should handle mouse wheel scroll up correctly', () => {
        plugin.init();
        // const event = new WheelEvent('wheel', { deltaY: -1 });
        // window.dispatchEvent(event);
        expect(plugin.findCurrentIndex).toBe(1);
    });
})