"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Plugin = void 0;
var Plugin = /** @class */ (function () {
    function Plugin(options) {
        // this.sections = Array.from(document.querySelectorAll(`.${options.sections.childClass}`));
        this.currentIndex = 0;
        this.scrolling = false;
        this.options = options;
        this.handleScroll = this.handleScroll.bind(this);
        this.scrollToSection = this.scrollToSection.bind(this);
    }
    Plugin.prototype.init = function () {
        // Add event listener for mouse wheel scroll
    };
    Plugin.prototype.destroy = function () {
        // Remove event listener for mouse wheel scroll
        window.removeEventListener('wheel', this.handleScroll);
    };
    Plugin.prototype.handleScroll = function (event) {
        if (this.scrolling)
            return;
        this.scrolling = true;
        // Determine direction of scroll
        var delta = Math.sign(event.deltaY);
        // Calculate next index
        var nextIndex = this.currentIndex + delta;
        // Scroll to next section
        this.scrollToSection(nextIndex);
    };
    Plugin.prototype.scrollToSection = function (index) {
        // if (index < 0 || index >= this.sections.length) return;
        // Get current and next sections
        // const currentSection = this.sections[this.currentIndex];
        // const nextSection = this.sections[index];
        // Calculate distance to scroll
        // const scrollDistance = nextSection.offsetTop - currentSection.offsetTop;
        // Smoothly scroll to next section
        // this.smoothScroll(scrollDistance, 1000);
        // Update current index
        this.currentIndex = index;
    };
    Plugin.prototype.smoothScroll = function (distance, duration) {
        var _this = this;
        // Calculate scroll step
        var step = distance / (duration / 16);
        var current = window.pageYOffset;
        var timer = 0;
        // Scroll loop
        var scroll = function () {
            timer += 16;
            current += step;
            window.scroll(0, current);
            if (timer < duration) {
                window.requestAnimationFrame(scroll);
            }
            else {
                _this.scrolling = false;
            }
        };
        // Start scroll loop
        window.requestAnimationFrame(scroll);
    };
    Plugin.prototype.findCurrentIndex = function () {
        return 1;
    };
    return Plugin;
}());
exports.Plugin = Plugin;
