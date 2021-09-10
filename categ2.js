categ_structure = {
    code: "str",
    contents: [
        abut_mns,    adjg_mns,    actg_mns,    adjt_mns,    arches,
        arm,    axle,    bail,    band,    base,    beam,    cntvr_bm,
        simpl_bm,    belt,    bsng_mns,    blade,    bladder,    
        blower,    body,    broom,    brace ,    branch ,    bracket ,    
        carriage ,    cap ,    cse ,    cstrs ,    channel ,    chute ,    
        clip ,    column ,    collar ,    container ,    converyor ,    
        cover ,    device ,    die ,    drum ,    enclosure ,    finger ,    
        flange ,    foot ,    frame ,    gate ,    gauges ,    guide ,    
        handle ,    hinge ,    head ,    holder ,    housing ,    
        jacket ,    jaw ,    laminate ,    leg ,    ling ,    lug ,    
        member ,    membrane ,    mntg_plt ,    manifold ,    neck ,    
        object ,    optng_mns ,    particle ,    partition ,    plate ,    
        platform ,    plug ,    receptcl ,    ram ,    retaining ,    
        reinforcing ,    rib ,    ring ,    rod ,    saddle ,    seat ,    
        sheet ,    shell ,    shoe ,    shoulder ,    sleeve ,    soul ,    
        spcg_mns ,    spindle ,    stop_mmbr,    stem ,    step ,    
        strut ,    spprt_mns ,    teeth ,    tongue ,    track ,    
        truss ,    upright ,    wall ,    wheel ,    web 
    ]
};
categ_mounting_method = {
    code: "mmt",
    contents: [
        abut, attach, bolt, couple, demntbly,
        engage, fix 
    ]
};
categ_fastener = {
    code: "fst",
    contents: [
        bolt, cable, clip, clamp, connection,
        coupling, dowel, hld_dwn, hook,joint,
        unv_jnt, keeper, key, latch, lock,
        lug, nail, nut, pin, rivet, screw,
        seam
    ]
};
categ_bearing = {
    code: "brg",
    contents: [
        ant_frcn, ant_fr_ball, ant_fr_nedl, ant_fr_roller,
        ant_fr_tp_rlr, bushing, fulcrum, journal, pivot,
        radial, seal, seat, sliding, support, thrust
    ]
};
categ_spring = {
    code: "spr",
    contents: [
        air,    bias,    element,    coil,    helical,    
        helcl_comp,    helcl_tnsn,    leaf,    torsional
    ]
};
categories = [
    categ_structure, categ_mounting_method, categ_fastener, categ_bearing, 
    categ_spring, 
    // categ_numbers, categ_placement, categ_voids, categ_shapes, 
    // categ_material_prop, categ_optical, categ_fluid_flow, categ_position, 
    // categ_materials, categ_sequence, categ_movement, categ_electrical, 
    // categ_rot_to_trnsln, categ_trnsln_to_trnsln, categ_rot_to_rot, categ_extenal, 
    // categ_member, categ_projection, categ_limit, categ_flange, categ_edge, 
    // categ_wedge, categ_point, categ_slab_categ, categ_sheet, categ_beam, 
    // categ_bearing_again
];