import Vue from 'vue'

export const session = new Vue.observable({ 
    user: null, 
    notification : {
        show : false,
        data : {},
        text : ""
    },
    showNotification(text, obj = {}) {
        this.notification.show = true;
        this.notification.data = {
            color : obj.color || 'info'
        };
        this.notification.text = text;
    }
});