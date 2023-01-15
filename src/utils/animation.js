export const easings = ['linear', 'ease', 'ease-in', 'ease-out', 'ease-in-out'];

export const bezierEasings = [
    {
        id: 'easeOutBack',
        timingFunction: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    },
    {
        id: 'easeInOutBack',
        timingFunction: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
    },
];

// Copied from: https://easings.net/
// There exists a postcss plugin, which converts the easing name to the corresponging bezier function, see: https://github.com/postcss/postcss-easings
// However, this app updates easings dynamically with css variables, so the plugin wouldn't help in this case.
// The plugin exports all the easing functions, but I prefer having them hardcoded here, since the plugin brings us no other use.
export const customEasings = {
    'ease-in-sine': 'cubic-bezier(0.12, 0, 0.39, 0)',
    'ease-out-sine': 'cubic-bezier(0.61, 1, 0.88, 1)',
    'ease-in-out-sine': 'cubic-bezier(0.37, 0, 0.63, 1)',
    'ease-in-quad': 'cubic-bezier(0.11, 0, 0.5, 0)',
    'ease-out-quad': 'cubic-bezier(0.5, 1, 0.89, 1)',
    'ease-in-out-quad': 'cubic-bezier(0.45, 0, 0.55, 1)',
    'ease-in-cubic': 'cubic-bezier(0.32, 0, 0.67, 0)',
    'ease-out-cubic': 'cubic-bezier(0.33, 1, 0.68, 1)',
    'ease-in-out-cubic': 'cubic-bezier(0.65, 0, 0.35, 1)',
    'ease-in-quart': 'cubic-bezier(0.5, 0, 0.75, 0)',
    'ease-out-quart': 'cubic-bezier(0.25, 1, 0.5, 1)',
    'ease-in-out-quart': 'cubic-bezier(0.76, 0, 0.24, 1)',
    'ease-in-quint': 'cubic-bezier(0.64, 0, 0.78, 0)',
    'ease-out-quint': 'cubic-bezier(0.22, 1, 0.36, 1)',
    'ease-in-out-quint': 'cubic-bezier(0.83, 0, 0.17, 1)',
    'ease-in-expo': 'cubic-bezier(0.7, 0, 0.84, 0)',
    'ease-out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
    'ease-in-out-expo': 'cubic-bezier(0.87, 0, 0.13, 1)',
    'ease-in-circ': 'cubic-bezier(0.55, 0, 1, 0.45)',
    'ease-out-circ': 'cubic-bezier(0, 0.55, 0.45, 1)',
    'ease-in-out-circ': 'cubic-bezier(0.85, 0, 0.15, 1)',
    'ease-in-back': 'cubic-bezier(0.36, 0, 0.66, -0.56)',
    'ease-out-back': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
    'ease-in-out-back': 'cubic-bezier(0.68, -0.6, 0.32, 1.6)',
};
