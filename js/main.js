function ljXmax () {
    this.init = function () {
        var display = {
            name: this.getUrlDisplayName()
        };

        window.main.innerHTML = this.getDisplayTemplate(display);
    }

    this.getUrlDisplayName = function () {
        var urlParameter = location.search.replace("?", "");
        var urlParameter = decodeURIComponent(urlParameter);

        if (urlParameter == "")
        {
            urlParameter = "大家";
        }

        return urlParameter;
    };

    this.getDisplayTemplate = function (value) {
        return "<strong>" + value.name + "</strong> 聖誕快樂！ <br/>" +
            "我們大家一起天天開心，<br/> 迎接接下來得毎一天吧！";
    }
};

window.xmax = new ljXmax();
