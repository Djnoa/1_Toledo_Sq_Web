const basePath = process.env.NODE_ENV === 'production' ? './static/media/' : '../assets/';

const headerImages = [
    'header-img.jpg',
    'header-img2.jpg',
    'header-img3.jpg',
    'header-img4.jpg',
    'header-img5.jpg',
    'header-img6.jpg',
    'header-img7.jpg',
];

const headerImagePaths = headerImages.map(image => basePath + image);

const pongImage = './pong.jpg';

export { headerImagePaths, pongImage };