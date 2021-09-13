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
categ_materials = {
	code: "mat",
	contents: [
	    adhesive,	    concrete,	    cork,	    fabric,	    fibre,	    
		fluid,	    insulation,	    liquid,	    metal,	    plastic,	    
		refractory,	    sand,	    wood,	    scrn	
	]
};
categ_electrical = {
	code: "ele",
	contents: [
	    contact,	    electrode,	    electromagnet,	    filament,	    
		insulator,	    lead,	    line_cord,	    motor,	    power_supply,	    
		resistance,	    socket,	    solenoid,	    swtch,	    transformer,	    
		wire	
	]
};
categ_rot_to_trnsln = {
	code: "rtt",
	contents: [
	    longitudinal,	    bell,	    cam,	    circ_to_reportical,	    
		cam_movement,	    propelling,	    connecting_rod,	    crank_arm,	    
		jack,	    radius_bar,	    screw,	    winch,	    yoke	
	]
};
categ_trnsln_to_trnsln = {
	code: "ttt",
	contents: [
	    inclined_plane,	    lever,	    linkage,	    parallel,	    
		straight_line,	    motion,	    toggle	
	]
};
categ_sequence = {
	code: "seq",
	contents: [
	    alternate,	    cyclic,	    interval,	    lag_lead,	    
		simultaneously,	    consecutive	
	]
};
categ_movement = {
	code: "mvt",
	contents: [
	    compression,	    downward_upward,	    drag,	    eccentric,	    
		emergent,	    extensible,	    extrude,	    grinding,	    
		hinge,	    impact,	    inertia,	    oscillate,	    crank,	    
		pivot,	    pressing,	    pulverize,	    sagging,	    severing,	    
		slidable,	    terminating,	    transverse,	    traversing,	    
		vibrating	
	]
};
categ_rot_to_rot = {
	code: "rtr",
	contents: [
	    brake,	    band,	    disc,	    shoe,	    chain,	    
		clutch,	    centrifugal,	    sprag,	    toothed,	    
		one_way,	    drive,	    belt,	    pulley,	    sheave,	    
		toothed,	    friction,	    gear,	    bvl_crwn_int,	    
		non_circular,	    pinion,	    right_angle,	    spur,	    
		worm_n_wheel,	    intermittent,	    geneva,	    pawl_n_ratchet,	    
		pendulum,	    journal,	    variable_speed,	    
		flex_coupling_sprocket	
	]
};
categ_extenal = {
	code: "ext",
	contents: [
	    body,	    box,	    block,	    brace,	    bracket,	    
		cage,	    cs,	    casing,	    chassis,	    compartment,	    
		cradle,	    enclosure,	    frame,	    framework,	    housing,	    
		rack,	    scaffold,	    skeleton,	    stator,	    stretcher,	    
		support,	    spprt_struct	
	]
};
categ_member = {
	code: "mbr",
	contents: [
	    arm_mbr,	    assembly,	    auxiliary,	    bar,	    
		bifurcated,	    bit,	    block,	    box,	    brace,	    
		branch_mbr,	    bulkhead,	    bulwark,	    caliper,	    
		cantilevar,	    compartment_mbr,	    component,	    connecting_rod,	    
		crank,	    coupling_mbr,	    extension,	    flag,	    foot_mbr,	    
		fork,	    foundation,	    guide_mbr,	    haft,	    handle,	    
		head_mbr,	    key,	    knob,	    leg_mbr,	    lever,	    
		limb,	    link,	    means,	    member,	    mounting,	    pallet,	    
		panel,	    pawl,	    pedal,	    pedestal,	    pin,	    plurality,	    
		portion,	    pike,	    prop,	    rack,	    rib,	    rod,	    
		roller,	    rung,	    section,	    segment,	    shank,	    sleeve,	    
		slide,	    splint,	    stake,	    stanchion,	    support_mbr,	    
		tappet,	    tenon,	    trestle,	    trigger,	    tripod,	    
		wall_mbr	
	]
};
categ_projection = {
	code: "prj",
	contents: [
	    aux_member,	    boss,	    dog,	    dump,	    ear,	    
		extension,	    finger,	    flange,	    guide,	    handle,	    
		hump,	    key,	    knob,	    lip,	    lobe,	    
		lug,	    male_member,	    nib,	    peg,	    
		projection,	    prong,	    protrusion,	    ramp,	    rib,	    
		ridge,	    tang,	    tenon,	    sawtooth,	    skirt,	    
		trunnion,	    tongue,	    wedge	
	]
};
categ_limit = {
	code: "lmt",
	contents: [
	    abutment,	    apex,	    base,	    cease,	    circumference,	    
		enough,	    final_degree,	    finish,	    foot,	    gauge,	    
		guide,	    hammer,	    lap,	    ledge,	    limit,	    peak,	    
		perimeter,	    periphery,	    pinnacle,	    rest,	    rim,	    
		shelf,	    shoulder,	    sill,	    stp,	    sufficient	
	]
};
categ_flange = {
	code: "flg",
	contents: [
	    chimb,	    chime,	    collar,	    edge,	    flange,	    flat,	    
		ledge,	    lip,	    platfarm,	    rtrn,	    rib,	    ridge,	    
		rim,	    shelf,	    shoulder,	    support,	    sill,	    
		skirt,	    slat	
	]
};
categ_edge = {
	code: "edg",
	contents: [
	    boundary ,	    cheek ,	    corner_ext ,	    cornice ,	    edge ,	    
		face ,	    flank ,	    profile ,	    ridge ,	    rim ,	    screen ,	    
		shape ,	    side ,	    skimmer 	
	]
};
categ_wedge = {
	code: "wdg",
	contents: [
	    angled_surface ,	    cam_means ,	    force_fit ,	    incline ,	    
		inclined_surface ,	    key ,	    pin ,	    ramp ,	    screw ,	    
		slope ,	    edge 	
	]
};
categ_point = {
	code: "pnt",
	contents: [
	    apex ,	    cornice ,	    crest ,	    crown ,	    ad ,	    
		head ,	    heel ,	    knob ,	    terminus ,	    tail ,	    
		tip ,	    toe ,	    top ,	    vertex ,	    zenith 	
	]
};  	
categ_slab = {
	code: "slb",
	contents: [	    
		bar ,	    billet ,	    base ,	    bed ,	    block ,	    
		chunky ,	    ceiling ,	    staunchion ,	    floor ,	    
		flange ,	    foundation ,	    ground ,	    mat  ,	    
		plank ,	    plane ,	    platform ,	    rest ,	    shelf ,	    
		slab ,	    stage ,	    slice 	
	]
};
categ_sheet = {
	code: "sht",
	contents: [
	    film ,	    foil ,	    laminate ,	    layer ,	    membrane ,	    
		plate ,	    scale ,	    sheet ,	    sliver ,	    slab ,	    
		slice ,	    wafer ,	    bearer ,	    boom ,	    brace ,	    
		column ,	    guy ,	    loading_bearing ,	    mast ,	    
		pillar ,	    pole ,	    prop ,	    rigging ,	    spar ,	    
		stay ,	    stave ,	    stud ,	    staunchion ,	    upright 
	]
};	    
categ_beam = {
	code: "bem",
	contents: [
	    arch ,	    beam ,	    cantilever ,	    chord ,	    girder,
		jamb ,	    joist ,	    lintel ,	    prop ,	    rafter ,	    
		RSJ ,	    tie_bar ,	    tie_beam ,	    transom ,	    truss 	
	]
};
categ_shaft = {
	code: "sft",
	contents: [
	    axis ,	    axle ,	    bar ,	    cordon ,	    castor ,	    
		column ,	    counter_shaft ,	    crank ,	    king_pin ,	    mandrel ,	    
		nip_bw_rllrs ,	    pillar ,	    pin ,	    pivot ,	    pole ,	    
		rod ,	    roll ,	    roller ,	    rotor ,	    shaft  ,	    
		shank ,	    spindle ,	    stub_axl_shft ,	    support ,	    trunnion ,	    
		tube ,	    wheel 	
	]
};
categ_bearing_again = {
	code: "bg2",
	contents: [
	    articulated ,	    ball_b ,	    bearing ,	    bush ,	    chuck ,	    
		castor ,	    fulcrum ,	    hinge ,	    jewel ,	    joint ,	    
		journal ,	    king_pin ,	    knife_edge ,	    mandrel ,	    
		needle ,	    pivot ,	    plummer ,	    roller_b ,	    saddle ,	    
		slipper ,	    swing ,	    swivel 	
	]
};

categories = [
    categ_structure, categ_mounting_method, categ_fastener, categ_bearing, 
    categ_spring, categ_numbers, categ_placement, categ_voids, categ_shapes, 
    categ_material_prop, categ_optical, categ_fluid_flow, categ_position, 
    categ_materials, categ_sequence, categ_movement, categ_electrical, 
    categ_rot_to_trnsln, categ_trnsln_to_trnsln, categ_rot_to_rot, categ_extenal, 
    categ_member, categ_projection, categ_limit, categ_flange, categ_edge, 
    categ_wedge, categ_point, categ_slab, categ_sheet, categ_beam, 
    categ_bearing_again
];