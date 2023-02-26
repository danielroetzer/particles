import { randomInt } from './math';

export const removeIndex = function (array, index) {
    return [...array.slice(0, index), ...array.slice(index + 1)];
};

export const randomItem = function (array) {
    return array[randomInt(0, array.length - 1)];
};
