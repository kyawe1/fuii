var navigationbar = {
    n: function () {
        var a = document.createElement("a");
        var h = document.createElement("div");
        var y = document.createElement("h1");
        h.id = 'header';
        h.appendChild(document.createTextNode("My Website"));
        y.appendChild(h);
        a.appendChild(y);
        document.body.appendChild(a);
        var div1 = document.createElement("div");
        div1.id = 'topnav';
        var a1 = document.createElement("a");
        a1.appendChild(document.createTextNode('Nike'));
        a1.href = "#";
        div1.appendChild(a1);
        var a3 = document.createElement("a");
        a3.appendChild(document.createTextNode('jello'));
        a3.href = "http://localhost:5000/shop/adidas";
        div1.appendChild(a3);
        var a2 = document.createElement("a");
        a2.appendChild(document.createTextNode('hello'));
        a2.href = "#";
        div1.appendChild(a2);
        document.body.appendChild(div1);
    }

}