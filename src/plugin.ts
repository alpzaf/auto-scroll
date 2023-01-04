import { Options } from './type/options';

export class Plugin {
    // private sections: HTMLElement[]
    private currentIndex: number
    private scrolling: boolean
    private options: Options

    constructor(options: Options) {
        // this.sections = Array.from(document.querySelectorAll(`.${options.sections.childClass}`));
        this.currentIndex = 0;
        this.scrolling = false;
        this.options = options;

        this.handleScroll = this.handleScroll.bind(this);
        this.scrollToSection = this.scrollToSection.bind(this);
    }

    public init(): void {
        // Add event listener for mouse wheel scroll
        window.addEventListener('wheel', this.handleScroll);
    }

    public destroy(): void {
        // Remove event listener for mouse wheel scroll
        window.removeEventListener('wheel', this.handleScroll);
    }

    private handleScroll(event: WheelEvent): void {
        if (this.scrolling) return;

        this.scrolling = true;

        // Determine direction of scroll
        const delta = Math.sign(event.deltaY);

        // Calculate next index
        const nextIndex = this.currentIndex + delta;

        // Scroll to next section
        this.scrollToSection(nextIndex);
    }

    private scrollToSection(index: number): void {
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
    }

    private smoothScroll(distance: number, duration: number): void {
        // Calculate scroll step
        const step = distance / (duration / 16);

        let current = window.pageYOffset;
        let timer = 0;

        // Scroll loop
        const scroll = () => {
            timer += 16;
            current += step;
            window.scroll(0, current);
            if (timer < duration) {
                window.requestAnimationFrame(scroll);
            } else {
                this.scrolling = false;
            }
        };

        // Start scroll loop
        window.requestAnimationFrame(scroll);
    }

    public findCurrentIndex(): number {
        return 1
    }

    // ...
}
