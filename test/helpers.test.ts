import { throttleWheelEvent } from '../src/helpers/throttleWheelEvent'

jest.useFakeTimers();

describe('throttleWheelEvent must throttle scroll event', () => {

    let func: jest.Mock;
    let throttleFunc: () => void;

    beforeEach(() => {
        func = jest.fn();
        throttleFunc = throttleWheelEvent(func, 1000);
    });

    test('execute just once', () => {
        for (let i = 0; i < 100; i++) {
            throttleFunc();
        }

        jest.runAllTimers();

        expect(func).toBeCalledTimes(1);
    });
});
