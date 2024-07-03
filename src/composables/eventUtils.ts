export const replaceEmptyImage = (image: string) => {
    if (image === '') {
        image = 'placeholder.png';
    }
    return image;
};
