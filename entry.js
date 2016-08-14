function addCSS(items) {

    var css = '';

    if (items.hideAvatars == true) {
        css += ".comment .avatar {display: none !important;}";
    }


    if (items.emotePack != null) {


        for (var i = 0; i < items.emotePack.images.length; i++) {
            var img = items.emotePack.images[i];
            css += '.yt-emoji-icon[title="'
                + img.emote
                + '"] {background: no-repeat url( data:image/png;base64,'
                + img.base64
                + ') !important; width: '
                + img.width
                + 'px !important; height: '
                + img.height + 'px !important;} ';
        }
    }

    if (css != '') {
        var style = document.createElement('style');
        var head = document.getElementsByTagName('head')[0];
        style.innerHTML = css;
        if (head) {
            head.appendChild(style);
        }
    }
}

// Entry point
chrome.storage.sync.get(default_settings, function (settings) {
    if (settings.twitchKeywordReplacement) {
        include_keyword_replacement();
    }
    addCSS(settings);

    if (settings.suggestUser) {
        include_user_suggestions();
    }
});