export default {
    methods: {
        max(a, b) {
            return Math.max(b.w, b.h) - Math.max(a.w, a.h);
        },

        min(a, b) {
            return Math.min(b.w, b.h) - Math.min(a.w, a.h);
        },

        h(a, b) {
            return b.h - a.h;
        },

        w(a, b) {
            return b.w - a.w;
        }
    }
}