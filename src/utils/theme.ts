export const theme = {
    colors: {
        white: '#fff',
        grey: '#F8F8F8',
        purple: '#6229FF',
        purple_light: '#A8A3FF',
        grey_light: '#E5E5E5',
    }
} as const; 

export type Theme = typeof theme;

