type TColor = `#${string}`;

export interface ITheme {
    colors: {
        primary: TColor,
        secondary: TColor,
        typography: TColor,
        contrast: TColor,
        extraContrast: TColor,
        danger: TColor,
    }
}