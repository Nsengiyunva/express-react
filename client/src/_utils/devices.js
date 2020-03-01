const size = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px'
}

export const device = {
    mobileS: `(min-width: ${size.mobileS})`,
    mobileM: `(min-width: ${size.mobileM})`,
    mobileL: `(min-width: ${size.mobileL})`,
    tablet: `(min-width: ${size.tablet})`,
    laptop: `(min-width: ${size.laptop})`,
    laptopL: `(min-width: ${size.laptopL})`,
    desktop: `(min-width: ${size.desktop})`,
    desktopL: `(min-width): ${size.desktop}`
}

export const colors = {
    orange: `#f87a4b`,
    green: ` #00b040`,
    lightGreen: `#c7eed5`,
    white: `#ffffff`
}


export const fonts = {
    smaller: `0.25rem`,
    small: `0.5rem`,
    mid: `0.75rem`,
    midLarge: `0.85rem`,
    standard: `1rem`,
    large: `1.5rem`,
    larger: `2rem`
}