
const app = new Framework7({
    // App root element
    root: '#app',
    // App Name
    name: 'My App',
    // App id
    id: 'com.myapp.test',
    // Enable swipe panel
    panel: {
        swipe: 'left',
    },
    // Add default routes
    routes: [
        {
            path: '/home/',
            url: 'index.html',
        },
        {
            path: '/peli/',
            url: 'peli.html',
        },
        {
            path: '/peli2/',
            url: 'peli2.html',
        },
    ],
    // ... other parameters
});

const mainView = app.views.create('.view-main');

var swiper = app.swiper.create('.swiper-container', {
    speed: 400,
    spaceBetween: 10
});

