
$(document).ready(function () {
    $.getJSON('product_data_file.json', function (data) {
        // ##### DEBUG #####
        console.log(data);
        // ##### DEBUG #####
        var output = "<ul class=\"wrapper\">";
        for (var i in data.ProductsList) {
            output += "<li class=\"li1\">" + "<article class=\"product\">" +
            "<a href=\"#\" class=\"product\" id=\"" +
            data.ProductsList[i].ProductInfo.p_product_id + "\">" +
            "<ul class=\"interior\"><li class=\"li2\">" +
            "<img src=" + data.ProductsList[i].imageURLs.sm + " />" +
            "</li><li class=\"li3\">" +
            data.ProductsList[i].ProductInfo.Brand +
            "&nbsp;" +
            data.ProductsList[i].ProductInfo.p_product_description +
            "</li><li class=\"li4\">$" +
            data.ProductsList[i].ProductInfo.p_product_price +
            ".00</li>" +
            "<li class=\"li5\">" +
            "<div>View More</div>" +
            "</li>" +
            "</ul></a></article></li>";
        }

        output += "</ul>";
        document.getElementById("inventory").innerHTML = output;




        var hero = "";
        for (var i in data.ProductsList) {
            hero += "<article class=\"hero\"  id=\"" +
                data.ProductsList[i].ProductInfo.p_product_id +
                "-hero-list\">";
            hero += "<ul class=\"top_banner\">";

            hero += "<li class=\"left\">" +
                "<img src=" +
                data.ProductsList[i].imageURLs.lg +
                " id=\"" +
                data.ProductsList[i].ProductInfo.p_product_id +
                "-img-lg\" alt=\"" +
                data.ProductsList[i].ProductInfo.Brand +
                " Photo\" itemprop=\"image\" />" +
                "</li>";
            hero += "<li class=\"middle\">" +
                "<span itemprop=\"name\">" +
                data.ProductsList[i].ProductInfo.Brand +
                " </span>" +
                "<span itemprop=\"description\">" +
                data.ProductsList[i].ProductInfo.p_product_description +
                "</span>" +
                "<ul class=\"hero-keys\">" +
                "<li class=\"hero-keys\"><span itemprop=\"disambiguatingDescription\">" +
                data.ProductsList[i].ProductInfo.p_product_specs.Value[2].Key +
                "</span></li>" +
                "<li class=\"hero-keys\"><span itemprop=\"disambiguatingDescription\">" +
                data.ProductsList[i].ProductInfo.p_product_specs.Value[18].Key +
                "</span></li>" +
                "<li class=\"hero-keys\"><span itemprop=\"disambiguatingDescription\">" +
                data.ProductsList[i].ProductInfo.p_product_specs.Value[2].Key +
                "</span></li>" +
                "</ul>" +
                "</li>";
            hero += "<li class=\"right\">" +
                "<ul>" +
                "<li class=\"top-cart\">" +
                "<button href=\"#\" class=\"top-cart-a\" id=\"" +
                data.ProductsList[i].ProductInfo.p_product_price +
                "\">Add to Cart</button>" +
                "</li>" +
                "</ul>" +
                "<div>" +
                "<span class=\"top-price\" itemprop=\"price\">$" +
                data.ProductsList[i].ProductInfo.p_product_price +
                ".00</span>" +
                "</div>" +
                "</li>";


            hero += "</ul>";
            hero += "</article>";
        }

        document.getElementById("hero").innerHTML = hero;
        // ##### DEBUG #####
        console.log("loaded the hero");
        console.log("loading the hover");
        // ##### DEBUG #####
        $("a.product").hover(function () {
            $("UL > li.li5").css("color", "#000");
            $(".hero").css("z-index", "0");
            $("#" + $(this).attr('id') + "-hero-list").css("z-index", "10");
            // ##### DEBUG #####
            console.log($(this).attr('id') + "m" + "---in");
            // ##### DEBUG #####

        }, function () {
            $("UL > li.li5").css("color", "#000");
            $("#" + $(this).attr('id') + "-hero-list").css("z-index", "1");
            // ##### DEBUG #####
            console.log($(this).attr('id') + "m" + "---out");
            // ##### DEBUG #####
        });
        // ##### DEBUG #####
        console.log("hover loaded");
        console.log("loading button");
        // ##### DEBUG #####
        $("button.top-cart-a").click(function () {
            var message = ("$" + ($(this).attr('id')) + ".00");
            alert(message);
        });
    });
});