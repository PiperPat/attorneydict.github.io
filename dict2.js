const categ_mounting_method = {
    code: "mmt",
    contents: [
        abut, attach, bolt, couple, demntbly,
        engage, fix 
    ]
};
const categ_fastener = {
    code: "fst",
    contents: [
        bolt, cable, clip, clamp, connection,
        coupling, dowel, hld_dwn, hook,joint,
        unv_jnt, keeper, key, latch, lock,
        lug, nail, nut, pin, rivet, screw,
        seam
    ]
};
const categ_bearing = {
    code: "brg",
    contents: [
        ant_frcn, ant_fr_ball, ant_fr_nedl, ant_fr_roller,
        ant_fr_tp_rlr, bushing, fulcrum, journal, pivot,
        radial, seal, seat, sliding, support, thrust
    ]
};
categories = [categ_mounting_method, categ_fastener, categ_bearing];

function search(query){
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
        lcHtml = '<ul>'
        for (let i = 0; i < results.length; i++) {
            lcHtml = lcHtml + '<li>'+results[i]+'</li>';
        }
        lcHtml = lcHtml + '</ul>';
    }
    document.getElementById("results").innerHTML = lcHtml;
}
