function displayResults(results) {
    let lcHtml = "";
    if (results.length == 0) {
        lcHtml = '<p>nothing matches that query</p>';
    } else {
        lcHtml = "<ul>"
        for (let i = 0; i < results.length; i++) {
            if (! results[i].has_img) lcHtml = lcHtml + '<li>'+results[i].word+'</li>';
            else {
                lcHtml = lcHtml + "<li>"+results[i].word ;
                for (let j = 0; j < results[i].img_src.imgs.length; j++) {
                    lcHtml = lcHtml + "<img src='" + results[i].img_src.path + results[i].img_src.imgs[j] + "' />"
                }
                lcHtml = lcHtml + "</li>"
            }
        }
        lcHtml = lcHtml + "</ul>";
    }
    document.getElementById("results").innerHTML = lcHtml;
}

function showCateg() {
    clearSelectedLetter()
    results = [];
    
    let filter = document.getElementById("categories").value
    categories.forEach(function(c) {
        if (filter == c.code) {
            results.push.apply(results, c.contents)
        }
    });

    displayResults(results);
}


function customQuery() {
    clearSelectedLetter()
    results = [];

    let q = document.getElementById("input-query").value;

    // user could be searching by category or word 
   
    if (q) {
        // check category
        categories.forEach(function(c) {
            c.tags.forEach(function(tag) {
                if (tag.match(q)) {
                    // alert("yes");
                    results.push.apply(results, c.contents);
                }
            });
        });

        // check word
        complete_glossay.forEach(function (entry) {
            // also need to rm repeats
            if (entry.word == q ) {
                // alert("gottem");
                results.push.apply(results, entry);
            }
        });
    }

    displayResults(results);
}

// de-selects entire alphabet at top of page 
function clearSelectedLetter() {
    let these_fellas = document.getElementsByClassName("sort-letter");
    for (i = 0; i < these_fellas.length; i++) {
        these_fellas[i].classList.remove("selected-letter")
    }
}

// when the user clicks on a letter at the top, this function finds all words 
// starting with that letter
function showLetter(letter) {
    clearSelectedLetter()
    document.getElementById(letter).classList.add("selected-letter");

    results = [];

    complete_glossay.forEach(function (entry) {
        if (entry.word[0].toUpperCase() == letter ) results.push(entry);
    });

    displayResults(results);
}