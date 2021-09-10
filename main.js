function search(query) {
    results = [];
    // have disabled search for now as it doesn't really do anything
    // if (query == "structure") {
    //     for (let i = 0; i < structure.length; i++) {   
    //         results.push(structure[i].word)
    //     }
    // } else if (query == "mounting method") {
    //     for (let i = 0; i < mounting_method.length; i++) {   
    //         results.push(mounting_method[i].word)
    //     }
    // }
    // else if (query == "") {
    //     for (let i = 0; i < .length; i++) {   
    //         results.push([i].word)
    //     }
    // }
    let filter = document.getElementById("categories").value
    switch (filter) {
        case "str":
            for (let i = 0; i < structure.length; i++) {   
                results.push(structure[i].word)
            }
            break;
        case "mmt":
            for (let i = 0; i < mounting_method.length; i++) {   
                results.push(mounting_method[i].word)
            }
            break;
        case "fst":
            for (let i = 0; i < fastener.length; i++) {   
                results.push(fastener[i].word)
            }
            break;
        case "brg":
            for (let i = 0; i < bearing.length; i++) {   
                results.push(bearing[i].word)
            }
            break;
        case "spr":
            for (let i = 0; i < spring.length; i++) {   
                results.push(spring[i].word)
            }
            break;
        case "num":
            for (let i = 0; i < numbers.length; i++) {   
                results.push(numbers[i].word)
            }
            break;
        case "plc":
            for (let i = 0; i < placement.length; i++) {   
                results.push(placement[i].word)
            }
            break;
        case "vds":
            for (let i = 0; i < voids.length; i++) {   
                results.push(voids[i].word)
            }
            break;
        case "shp":
            for (let i = 0; i < shapes.length; i++) {   
                results.push(shapes[i].word)
            }
            break;
        case "map":
            for (let i = 0; i < material_prop.length; i++) {   
                results.push(material_prop[i].word)
            }
            break;
        case "opt":
            for (let i = 0; i < optical.length; i++) {   
                results.push(optical[i].word)
            }
            break;
        case "fld":
            for (let i = 0; i < fluid_flow.length; i++) {   
                results.push(fluid_flow[i].word)
            }
            break;
        case "pos":
            for (let i = 0; i < position.length; i++) {   
                results.push(position[i].word)
            }
            break;
        case "mat":
            for (let i = 0; i < materials.length; i++) {   
                results.push(materials[i].word)
            }
            break;
        case "ele":
            for (let i = 0; i < electrical.length; i++) {   
                results.push(electrical[i].word)
            }
            break;
        case "rtt":
            for (let i = 0; i < rot_to_trnsln.length; i++) {   
                results.push(rot_to_trnsln[i].word)
            }
            break;
        case "ttt":
            for (let i = 0; i < trnsln_to_trnsln.length; i++) {   
                results.push(trnsln_to_trnsln[i].word)
            }
            break;
        case "seq":
            for (let i = 0; i < sequence.length; i++) {   
                results.push(sequence[i].word)
            }
            break;
        case "mvt":
            for (let i = 0; i < movement.length; i++) {   
                results.push(movement[i].word)
            }
            break;
        case "rtr":
            for (let i = 0; i < rot_to_rot.length; i++) {   
                results.push(rot_to_rot[i].word)
            }
            break;
        case "ext":
            for (let i = 0; i < categ_extenal.length; i++) {   
                results.push(categ_extenal[i].word)
            }
        case "mbr":
            for (let i = 0; i < categ_member.length; i++) {   
                results.push(categ_member[i].word)
            }
            break;
        case "prj":
            for (let i = 0; i < categ_projection.length; i++) {   
                results.push(categ_projection[i].word)
            }
            break;
        case "lmt":
            for (let i = 0; i < categ_limit.length; i++) {   
                results.push(categ_limit[i].word)
            }
            break;
        case "flg":
            for (let i = 0; i < categ_flange.length; i++) {   
                results.push(categ_flange[i].word)
            }
            break;
        // case "":
        //     for (let i = 0; i < .length; i++) {   
        //         results.push([i].word)
        //     }
        //     break;       
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