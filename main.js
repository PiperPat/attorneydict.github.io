function search() {
    results = [];
    
    let filter = document.getElementById("categories").value
    categories.forEach(function(c) {
        if (filter == c.code) {
            results.push.apply(results, c.contents)
        }
    });

    let lcHtml = "";
    if (results.length == 0) {
        lcHtml = '<p>nothing matches that query</p>';
    } else {
        lcHtml = "<ul>"
        for (let i = 0; i < results.length; i++) {
            if (! results[i].has_img) lcHtml = lcHtml + '<li>'+results[i].word+'</li>';
            else {
                alert("he's got an image!");
                lcHtml = lcHtml + "<li>"+results[i].word ;
                lcHtml = lcHtml + "<img src='" + results[i].img_src.path + results[i].img_src.imgs[0] + "' />"
                lcHtml = lcHtml + "</li>"
            }
        }
        lcHtml = lcHtml + "</ul>";
    }
    document.getElementById("results").innerHTML = lcHtml;
}
