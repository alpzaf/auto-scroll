import { Options } from './type/options';
export declare class Plugin {
    private currentIndex;
    private scrolling;
    private options;
    constructor(options: Options);
    init(): void;
    destroy(): void;
    private handleScroll;
    private scrollToSection;
    private smoothScroll;
    findCurrentIndex(): number;
}
