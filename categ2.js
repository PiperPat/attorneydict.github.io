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
categ_numbers = {
    code: "num",
    contents: [
        multiplicity,    plurality,    several
    ]
};
categ_placement = {
    code: "plc",
    contents: [
        abut,     adjacent,     aligned,     attached,     
        axial,     cantilever,     complmtry,     concentric,     
        eccentric,     contiguous,     distal_prox,     divided,     
        disposed,     engaged,     extended,     inclined,     
        integral,     intermediate,     interposed,     juxtaposed,     
        located,     lateral,     mating,     meshing,     normal,     
        offset,     opposed,     overlapping,     perpendclr,     
        parallel,     planar,     positioned,     projecting,     
        proximate,     radial,     removable,     rectilinear,     
        resting,     retractable,     spacer,     staggered,     
        superposed,     supported,     surrounding,     symmetrical
    ]
};
categ_voids = {
    code: "vds",
    contents: [
        aperture,     bore,     cavity,     chamber,     
        duct,     groove,     hole,     hollow,     notch,     
        open_ended,     opening,     orifice,     recess,     
        passage,     slit,     slot,     socket
    ]
};
categ_shapes = {
    code: "shp",
    contents: [
        x_shaped,     t_shaped,     annular,     arch,     
        arculate,     barrel,     bevel,     buldged,     
        bucket,     chamfered,     channel,     circular,     
        concave,     convex,     conical,     corrugated,     
        cuboid,     cup,     cylinder,     cylindroid,     
        depression,     disc,     dome,     elliptical,     
        fin,     flange,     fold,     fork,     frusto,     
        groove,     helical,     hook,     hr_gls_shp,     
        inclinded,     oblong,     parabolic,     plane,     
        phombic,     rectangular,     round,     sheet,     
        shelf,     sinusoidal,     spherical,     square,     
        stepped,     taper,     trapezoid,     triangular,     
        truncate,     trough,     tubular,     twist,     
        waisted,     web,     wedge
    ]
};
categ_material_prop = {
    code: "map",
    contents: [
        collapsible,    contractable,    deformable,    dense,    
        elastic,    enlarged,    expandable,    embiggened,    
        flexible,    foldable,    foraminous,    fixed,    insulation,    
        opaque,    permeable,    porous,    resilient,    rigid,    
        translucent,    transparent
    ]
};
categ_optical = {
    code: "opt",
    contents: [
        bezel,    bulb,    fluorescent_bulb,    incandescent_bulb,    
        lamp,    light_ray,    light_beam,    reflection,    refraction,    
        transmission,    wndw
    ]
};
categ_fluid_flow = {
    code: "fld",
    contents: [
        accumulator,    aspirator,    bellows,    conduit,    
        connector,    convection,    cylinder_piston,    cylinder_rod,    
        dashpot,    diaphragm,    discharge,    dispenser,    filter,    
        flue,    gasket,    hose,    hydraulic,    medium,    nozzle,    
        outlet,    pipe,    plunger,    port,    inlet_port,    
        outlet_port,    pump,    centrifugal_pump,    gear_pump,    
        piston_pump,    vane_pump,    reservoir,    seal,    siphon,    
        tank,    tube,    valve,    ball_check_valve,    control_valve,    
        gate_valve,    shut_off_valve,    non_return,    one_way
    ]
};
categ_position = {
    code: "pos",
    contents: [
        angle,    oblique_angle,    obtuse_angle,    axial,    
        bottom_top,    close_open,    crest,    edge,    external_internal,    
        face,    film,    horizontal_vertical,    lateral,    layer,    
        lower_upper,    normal_to_parallel,    rim,    section,    slant,    
        surface,    tilt
    ]
};
categories = [
    categ_structure, categ_mounting_method, categ_fastener, categ_bearing, 
    categ_spring, categ_numbers, categ_placement, categ_voids, categ_shapes, 
    categ_material_prop, categ_optical, categ_fluid_flow, categ_position, 
    // categ_materials, categ_sequence, categ_movement, categ_electrical, 
    // categ_rot_to_trnsln, categ_trnsln_to_trnsln, categ_rot_to_rot, categ_extenal, 
    // categ_member, categ_projection, categ_limit, categ_flange, categ_edge, 
    // categ_wedge, categ_point, categ_slab_categ, categ_sheet, categ_beam, 
    // categ_bearing_again
];