// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
export const randomFloat = function (min, max) {
    return Math.random() * (max - min) + min;
};

export const randomInt = function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    // The maximum is inclusive and the minimum is inclusive
    return Math.floor(Math.random() * (max - min + 1) + min);
};

// https://www.tutorialspoint.com/generating-random-hex-color-in-javascript
export const randomHexColor = function () {
    const hex = Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, '0'); // Ensures length of 6

    return `#${hex}`;
};
