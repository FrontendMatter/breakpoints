interface Breakpoints {
    constructor(element: JQuery | HTMLElement, opts?: BreakpointOptions);
}

interface BreakpointOptions {
    distinct?: boolean;
    breakpoints?: number[];
    interval?: number;
}

declare var Breakpoints;