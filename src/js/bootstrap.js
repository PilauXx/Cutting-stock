try {
    window.Popper = require('popper.js').default;
    window.jQuery = window.$ = require('jquery');
    window.Vue = require('vue');

    require('bootstrap');
} catch (e) {}