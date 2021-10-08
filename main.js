


// is given an array of word objects and converts it into html to display
// to the user -- it's a helper fn to the other fns below

function displayResults(results) {
    let lcHtml = "";
    if (results.length == 0) {
        lcHtml = '<p>nothing matches that query</p>';
    } else {
        lcHtml = ""
        for (let i = 0; i < results.length; i++) {
            lcHtml = lcHtml + "<div class='glossary-entry'>" ;
            lcHtml = lcHtml + "<h4 class='word-entry'>" + results[i].word + "</h4>";
            lcHtml = lcHtml + "<p class='word-definition'>" + results[i].definition + "</p>";
            
            if (results[i].has_img) {
                for (let j = 0; j < results[i].img_src.imgs.length; j++) {
                    lcHtml = lcHtml + "<img class='word-img' src='" + results[i].img_src.path + results[i].img_src.imgs[j] + "' />"
                }
            }
            lcHtml = lcHtml + "</div> <hr/>"
        }
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
        // check word
        complete_glossary.forEach(function (entry) {
            if (entry.word.includes(q)) results.push(entry);
        });


        // check category
        categories.forEach(function(c) {
            c.tags.forEach(function(tag) {
                // tag.contents is a collection of word objects
                if (tag.includes(q)) results.push.apply(results, c.contents);
                // {
                //     var things = c.contents;
                //     things.forEach(function(thing) {
                //         results.push(thing);
                //     })
                // }
            });
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

    results.sort((a, b) => a.word.localeCompare(b.word))

    displayResults(results);
}