function search() {
    results = [];
    let filter = document.getElementById("categories").value
    categories.forEach(function(c) {
        if (filter == c.code) {
            results.push.apply(results, c.contents)
        }
    });
    results_plain_text = [];
    let lcHtml = "";
    if (results.length == 0) {
        lcHtml = '<p>nothing matches that query</p>';
    } else {
        lcHtml = '<ul>'
        for (let i = 0; i < results.length; i++) {
            lcHtml = lcHtml + '<li>'+results[i].word+'</li>';
        }
        lcHtml = lcHtml + '</ul>';
    }
    document.getElementById("results").innerHTML = lcHtml;
}
