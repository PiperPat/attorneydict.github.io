function search(query) {
    results = [];
    if (query == "structure") {
        for (let i = 0; i < structure.length; i++) {   
            results.push(structure[i].word)
        }
    } else if (query == "mounting method") {
        for (let i = 0; i < mounting_method.length; i++) {   
            results.push(mounting_method[i].word)
        }
    }
    let lcHtml = "";
    if (results.length == 0) {
        lcHtml = '<p>nothing matches that query</p>';
    } else {
        lcHtml = '<ul>'
        for (let i = 0; i < results.length; i++) {
            lcHtml = lcHtml + '<li>'+results[i]+'</li>';
        }
        lcHtml = lcHtml + '</ul>';
    }
    document.getElementById("results").innerHTML = lcHtml;
}

function showSubcateg(show) {
    const subcat = document.getElementById('subcateg');
    if (show) {
        subcat.classList.remove('banish');
        subcat.classList.add('unbanish');
    } else {
        subcat.classList.add('banish');
        subcat.classList.remove('unbanish');
    }
}

function getCateg(thing) {
    let dropdown = document.getElementById('subcateg');
    let lcHtml = `<option value="" selected disabled hidden>Select subcategory</option>`;
    switch (thing.value) {
        case 'shp':
            showSubcateg(true);
            lcHtml = lcHtml + `
                <option value="gen">general</option>
                <option value="conn">connections & edges</option>
                <option value="vds">voids & receptacles</option>
                <option value="prt">protrusions</option>
                <option value="mbr">member</option>
                <option value="spr">springs & gears</option>
            `;
            break;
        case 'mat':
            lcHtml = lcHtml + ``;
            break;
        case 'mvt':
            lcHtml = lcHtml + ``;
            break;
        case 'fnt':
            lcHtml = lcHtml + ``;
            break;
        case 'rtn':
            lcHtml = lcHtml + ``;
            break;
        case 'elc':
            showSubcateg(false);
            lcHtml = lcHtml + ``;
            break;
        default:
            alert('other');
    }
    dropdown.innerHTML = lcHtml;
}