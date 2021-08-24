// Structure

const abut_mns = "abutment means";
const adjg_mns = "adjoining means";
const actg_mns = "actuating means";
const adjt_mns = "adjustment means";
const arches = "arches";
const arm = "arm";
const axle = "axle";
const bail = "bail";
const band = "band";
const base = "base";
const beam = "beam";
const cntvr_bm = "cantilever beam";
const simpl_bm = "simple beam";
const belt = "belt";
const bsng_mns = "biasing means";
const blade = "blade";
const bladder = "bladder";
const blower = "blower";
const body = "body";
const broom = "broom";

// Mounting Method
const abut = "abut";
const attach = "attach";
const bolt = "bolt";
const couple = "couple";
const demntbly = "demountably";
const engage = "engage";
const fix = "fix";


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
    broom
    
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
            results.push(mounting_method[i])
        }
    }
    let lcHtml = '<ul>'
    for (let i = 0; i < results.length; i++) {
        lcHtml = lcHtml + '<li>'+results[i]+'</li>'
    }
    lcHtml = lcHtml + '</ul>'
    document.getElementById("results").innerHTML = lcHtml;
}