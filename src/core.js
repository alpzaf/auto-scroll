/***
export default class Core {
    constructor(options = {}) {

    }

    init() {
        /**
         * Scroll to a desired target.
         *
         * @param  Available options :
         *          targetOption {node, string, "top", "bottom", int} - The DOM element we want to scroll to
         *          offsetOption {int} - An offset to apply on top of given `target` or `sourceElem`'s target
         *          duration {int} - Duration of the scroll animation in milliseconds
         *          easing {array} - An array of 4 floats between 0 and 1 defining the bezier curve for the animation's easing. See http://greweb.me/bezier-easing-editor/example/
         * @return {void}


        scrollTo(targetOption, offsetOption, duration = 1000, easing = [0.25, 0.00, 0.35, 1.00]) {
            let target;
            let offset = offsetOption ? parseInt(offsetOption) : 0;
            easing = BezierEasing(...easing)

            if(typeof targetOption === 'string') { // Selector or boundaries
                if(targetOption === 'top') {
                    target = 0;
                } else if(targetOption === 'bottom') {
                    target = this.instance.limit;
                } else {
                    target = document.querySelector(targetOption);
                    // If the query fails, abort
                    if(!target)  {
                        return;
                    }
                }
            } else if(typeof targetOption === 'number') { // Absolute coordinate
                target = parseInt(targetOption)
            } else if(targetOption && targetOption.tagName) { // DOM Element
                target = targetOption
            } else {
                console.warn('`targetOption` parameter is not valid')
                return;
            }

            // We have a target that is not a coordinate yet, get it
            if (typeof target !== 'number') {
                // Verify the given target belongs to this scroll scope
                let targetInScope = getParents(target).includes(this.el)
                if(!targetInScope) {
                    // If the target isn't inside our main element, abort any action
                    return;
                }

                // Get target offset from top
                const targetBCR = target.getBoundingClientRect()
                const offsetTop = targetBCR.top

                // Try and find the target's parent section
                const targetParents = getParents(target)
                const parentSection = targetParents.find(candidate => this.sections.find(section => section.el == candidate))
                let parentSectionOffset = 0
                if(parentSection) {
                    parentSectionOffset = getTranslate(parentSection).y // We got a parent section, store it's current offset to remove it later
                }
                // Final value of scroll destination : offsetTop + (optional offset given in options) - (parent's section translate)
                offset = offsetTop + offset - parentSectionOffset;
            } else {
                offset = target + offset;
            }

            // Actual scrollto
            // ==========================================================================

            // Setup
            const scrollStart = parseFloat(this.instance.delta.y)
            const scrollTarget = Math.max(0,Math.min(offset, this.instance.limit)) // Make sure our target is in the scroll boundaries
            const scrollDiff = scrollTarget - scrollStart
            const render = (p) => {
                this.instance.delta.y = scrollStart + (scrollDiff * p)
            }

            // Prepare the scroll
            this.animatingScroll = true // This boolean allows to prevent `checkScroll()` from calling `stopScrolling` when the animation is slow (i.e. at the beginning of an EaseIn)
            this.stopScrolling() // Stop any movement, allows to kill any other `scrollTo` still happening
            this.startScrolling() // Restart the scroll

            // Start the animation loop
            const start = Date.now();
            const loop = () => {
                var p = (Date.now()-start)/duration; // Animation progress

                if (p > 1) { // Animation ends
                    render(1);
                    this.animatingScroll = false
                }
                else {
                    this.scrollToRaf = requestAnimationFrame(loop);
                    render(easing(p));
                }
            }
        }
    }
}

*/