const structure = [
    abut_mns,
    adjg_mns,
    actg_mns,
    adjt_mns,
    arches,
    arm,
    axle,
    bail,
    band,
    base,
    beam,
    cntvr_bm,
    simpl_bm,
    belt,
    bsng_mns,
    blade,
    bladder,
    blower,
    body,
    broom,
    brace ,
    branch ,
    bracket ,
    carriage ,
    cap ,
    cse ,
    cstrs ,
    channel ,
    chute ,
    clip ,
    column ,
    collar ,
    container ,
    converyor ,
    cover ,
    device ,
    die ,
    drum ,
    enclosure ,
    finger ,
    flange ,
    foot ,
    frame ,
    gate ,
    gauges ,
    guide ,
    handle ,
    hinge ,
    head ,
    holder ,
    housing ,
    jacket ,
    jaw ,
    laminate ,
    leg ,
    ling ,
    lug ,
    member ,
    membrane ,
    mntg_plt ,
    manifold ,
    neck ,
    object ,
    optng_mns ,
    particle ,
    partition ,
    plate ,
    platform ,
    plug ,
    receptcl ,
    ram ,
    retaining ,
    reinforcing ,
    rib ,
    ring ,
    rod ,
    saddle ,
    seat ,
    sheet ,
    shell ,
    shoe ,
    shoulder ,
    sleeve ,
    soul ,
    spcg_mns ,
    spindle ,
    stop_mmbr,
    stem ,
    step ,
    strut ,
    spprt_mns ,
    teeth ,
    tongue ,
    track ,
    truss ,
    upright ,
    wall ,
    wheel ,
    web 
];
const mounting_method = [
    abut,
    attach,
    bolt,
    couple,
    demntbly,
    engage,
    fix 
];
function search(word) {
    results = [];
    if (word == "structure") {
        for (let i = 0; i < structure.length; i++) {   
            results.push(structure[i])
        }
    } else if (word == "mounting method") {
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


function getCateg(thing) {
    switch (thing.value) {
        case 'shp':
            alert('shape');
            break;
        case 'mat':
            alert('material');
            break;
        case 'mvt':
            alert('movement');
            break;
        case 'fnt':
            alert('function');
            break;
        case 'rtn':
            alert('relationship');
            break;
        default:
            alert('other');
    }
}