var cookieU = {
    get: function (name) {
        var cookieName = `${encodeURIComponent(name)}=`;
        var cookieStart = document.cookie.indexOf(cookieName);
        var cookieEnd;

        if (cookieStart > -1) {
            cookieEnd = document.cookie.indexOf(';', cookieStart);
            if (cookieEnd == -1) {
                cookieEnd = document.cookie.length;
            }
            CookieValue = decodeURIComponent(document.cookie.substring(`${cookieStart}${cookieName.length}`, cookieEnd));
        }
        return CookieValue;
    },
    set: function (name, value, expires, path, domain, secure) {
        var cookieText = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;
        if (expires instanceof Date) {
            cookieText += `expires=${expires.toGMTString()}`;
        }
        if (path) {
            cookieText += `path=${path}`;
        }
        if (domain) {
            cookieText += `domain=${domain}`;
        }
        if (secure) {
            cookieText += `secure=${secure}`;
        }
        document.cookie = cookieText;
    },
    unset: (name, path, domain, secure) => {
        this.set(name, "", new Date(0), path, domain, secure);
    }
};