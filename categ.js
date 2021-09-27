categ_structure = {
    code: "str",
	tags: ["structure"],
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
	tags: ["mounting method"],
    contents: [
        abut, attach, bolt, couple, demntbly,
        engage, fix 
    ]
};
categ_fastener = {
    code: "fst",
	tags: ["fastener", "attachment"],
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
	tags: ["bearing"],
    contents: [
        ant_frcn, ant_fr_ball, ant_fr_nedl, ant_fr_roller,
        ant_fr_tp_rlr, bushing, fulcrum, journal, pivot,
        radial, seal, seat, sliding, support, thrust
    ]
};
categ_spring = {
    code: "spr",
	tags: ["spring"],
    contents: [
        air,    bias,    element,    coil,    helical,    
        helcl_comp,    helcl_tnsn,    leaf,    torsional
    ]
};
categ_numbers = {
    code: "num",
	tags: ["numbers", "numeric"],
    contents: [
        multiplicity,    plurality,    several
    ]
};
categ_placement = {
    code: "plc",
	tags: ["placement"],
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
	tags: ["voids", "empty", "negative", "space"],
    contents: [
        aperture,     bore,     cavity,     chamber,     
        duct,     groove,     hole,     hollow,     notch,     
        open_ended,     opening,     orifice,     recess,     
        passage,     slit,     slot,     socket
    ]
};
categ_shapes = {
    code: "shp",
	tags: ["shapes", "geometry"],
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
	tags: ["material properties"],
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
	tags: ["optic", "light"],
    contents: [
        bezel,    bulb,    fluorescent_bulb,    incandescent_bulb,    
        lamp,    light_ray,    light_beam,    reflection,    refraction,    
        transmission,    wndw
    ]
};
categ_fluid_flow = {
    code: "fld",
	tags: ["fluid", "liquid", "valve"],
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
	tags: ["position"],
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
	tags: ["materials"],
	contents: [
	    adhesive,	    concrete,	    cork,	    fabric,	    fibre,	    
		fluid,	    insulation,	    liquid,	    metal,	    plastic,	    
		refractory,	    sand,	    wood,	    scrn	
	]
};
categ_electrical = {
	code: "ele",
	tags: ["electric"],
	contents: [
	    contact,	    electrode,	    electromagnet,	    filament,	    
		insulator,	    lead,	    line_cord,	    motor,	    power_supply,	    
		resistance,	    socket,	    solenoid,	    swtch,	    transformer,	    
		wire	
	]
};
categ_rot_to_trnsln = {
	code: "rtt",
	tags: ["rotation", "translation"],
	contents: [
	    longitudinal,	    bell,	    cam,	    circ_to_reportical,	    
		cam_movement,	    propelling,	    connecting_rod,	    crank_arm,	    
		jack,	    radius_bar,	    screw,	    winch,	    yoke	
	]
};
categ_trnsln_to_trnsln = {
	code: "ttt",
	tags: ["-----"],
	contents: [
	    inclined_plane,	    lever,	    linkage,	    parallel,	    
		straight_line,	    motion,	    toggle	
	]
};
categ_sequence = {
	code: "seq",
	tags: ["-----"],
	contents: [
	    alternate,	    cyclic,	    interval,	    lag_lead,	    
		simultaneously,	    consecutive	
	]
};
categ_movement = {
	code: "mvt",
	tags: ["-----"],
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
	tags: ["-----"],
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
	tags: ["-----"],
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
	tags: ["-----"],
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
	tags: ["-----"],
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
	tags: ["-----"],
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
	tags: ["-----"],
	contents: [
	    chimb,	    chime,	    collar,	    edge,	    flange,	    flat,	    
		ledge,	    lip,	    platfarm,	    rtrn,	    rib,	    ridge,	    
		rim,	    shelf,	    shoulder,	    support,	    sill,	    
		skirt,	    slat	
	]
};
categ_edge = {
	code: "edg",
	tags: ["-----"],
	contents: [
	    boundary ,	    cheek ,	    corner_ext ,	    cornice ,	    edge ,	    
		face ,	    flank ,	    profile ,	    ridge ,	    rim ,	    screen ,	    
		shape ,	    side ,	    skimmer 	
	]
};
categ_wedge = {
	code: "wdg",
	tags: ["-----"],
	contents: [
	    angled_surface ,	    cam_means ,	    force_fit ,	    incline ,	    
		inclined_surface ,	    key ,	    pin ,	    ramp ,	    screw ,	    
		slope ,	    edge 	
	]
};
categ_point = {
	code: "pnt",
	tags: ["-----"],
	contents: [
	    apex ,	    cornice ,	    crest ,	    crown ,	    ad ,	    
		head ,	    heel ,	    knob ,	    terminus ,	    tail ,	    
		tip ,	    toe ,	    top ,	    vertex ,	    zenith 	
	]
};  	
categ_slab = {
	code: "slb",
	tags: ["-----"],
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
	tags: ["-----"],
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
	tags: ["-----"],
	contents: [
	    arch ,	    beam ,	    cantilever ,	    chord ,	    girder,
		jamb ,	    joist ,	    lintel ,	    prop ,	    rafter ,	    
		tie_bar ,	    tie_beam ,	    transom ,	    truss 	
	]
};
categ_shaft = {
	code: "sft",
	tags: ["-----"],
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
	tags: ["-----"],
	contents: [
	    articulated ,	    ball_b ,	    bearing ,	    bush ,	    chuck ,	    
		castor ,	    fulcrum ,	    hinge ,	    jewel ,	    joint ,	    
		journal ,	    king_pin ,	    knife_edge ,	    mandrel ,	    
		needle ,	    pivot ,	    plummer ,	    roller_b ,	    saddle ,	    
		slipper ,	    swing ,	    swivel 	
	]
};
categ_plug = {
	code: "plg",
	tags: ["-----"],
	contents: [
		bung,   check, clack_v, cock,    cork,   diaphram_v,    flap,   
		gate_v,    globe_v,    needle, non_return,  plug, poppet,  relief_v, 
		spigot,  stopper,  tap,  throttle, valve,   
	]
};
categ_gear = {
	code: "gea",
	tags: ["-----"],
	contents: [
		bevel_g,    cam,    cog,    comb,   differential_gear, gear_train,  
		gear_ratio,   helical_g, pawl,    pinion, rack,    ratchet,    screw,  
		spiral,   spoke, sprocket,    spur_g, toothed_wheel,   worm_g,    
		cable,  cable_hook,   crane, dead_end,    dead_eye,   ferrule,   hoist, 
		pulley,  roller,   runner,    snatch, block,   tackle,    sheave, 
	]
};
categ_jaws = {
	code: "jws",
	tags: ["-----"],
	contents: [
		bolt_cutter,    clamp,  cutters,  fibro_cutter, foot_prints, 
		g_clamp, grips,   
	]
};

categ_spring_again = {
	code: "spr",
	tags: ["-----"],
	contents: [
		biassing_means, buffer,  coil, compression_s,   corkscrew, eliptical_s, 
		extensible_tendon,   helical_s, helix,   leaf_s,    resilient,  semi_eliptical,   
		spiral_s,  torsion_bar,  torsion_s,    threaded,   urging_means,  vortex,   
		load,  inertial_body,    gross_weight,   mass,  tare_weight,  
	]
};
categ_lift = {
	code: "lft",
	tags: ["-----"],
	contents: [
		capstan,    cable_hoist,    conveyor,   crane, derrick, elevator,    
		hoist,  jack, jemmy,   lever, lift,    scaffold,   support,   winch, windlass,    
	]
};
categ_fibre = {
	code: "fbr",
	tags: ["-----"],
	contents: [
		band,   braided,   cable, chain,   cord,  fibre,    fibril, filament,    
		hemp_filament,  lace_filament,    line_filament,  rope_filament,    sheet,  
		strand,   strap, string,  strip,    tape,   tendril,   twisted,   warp,  
		weft, wire,    winding,    yarn,   
	]
};
categ_receptacle = {
	code: "rec",
	tags: ["-----"],
	contents: [
		ampoule,    bag,    barrel, beaker,  bin,  bladder,  bottle,   bowl,  box,  
		bunker,   calabash,  can,  capsule,  carton,   case_word, catchment,   cellar,    
		chamber,    cistern,    coffer, container,   depot, drain,   drum,  dump, gourd,   
		hod,   hold,  hopper,   jar,   jug,   pan,   phial, receptacle,  reservoir,   
		slot,   socket,    spline, trough,  well,  
	]
};
categ_interior = {
	code: "int",
	tags: ["-----"],
	contents: [
		cavity, centre,  chamber,  focus_word,    hollow, inside,  interior, opening, 
		recess,  
	]
};
categ_tube = {
	code: "tub",
	tags: ["-----"],
	contents: [
		aqua,   barrel,    bore,   canal, cannula, causeway,    channel,    chimney,    
		circuit,    cloaca, conduit, corridor,    dike,   ditch, downpipe,    drain,  
		duct, egress,  fall, flexible_hose,   flue,  funnel,   gallery,   guide, hose,    
		hosepipe,   ingress,   main,  manifold, passage, path,    pipe,   pipeline,  race, 
		run_o_pipe,  scupper,  sewer,    stand_pipe, syphon,  sluice,   trough,    tube,   
		tunnel,    vein,   vent,  viaduct,  
	]
};
categ_orifice = {
	code: "ori",
	tags: ["-----"],
	contents: [
		aperture,   bight, bore,    breech, calibre, cavity,  chasm,    crack,  entrance, 
		egress,  eye,  exhaust,  gap,  gate, hatch,   hole,  ingress,  inlet,    nozzle, 
		opening, pin_hole,    slit,   venturi,   
	]
};
categ_closure = {
	code: "cls",
	tags: ["-----"],
	contents: [
		bung,   cap,   closure,   cork,  cover,    door,   dome,  flap, lacing,  
		lid,  lug,  occlusion,    plug,   ram,   throttle,  top_word,  trap, 
		stopper, seal,    shive,  zip,  
	]
};
categ_cover = {
	code: "cvr",
	tags: ["-----"],
	contents: [
		awning, cap, capsule, hat, coat,    coating,    cocoon, cover,   enclosure, 
		envelope,    file,   lid,   
	]
};
categ_append = {
	code: "apd",
	tags: ["-----"],
	contents: [
		attach,     affix,      bond,      braze,      coalesce,     
		contact,      draw,      embrace,    engage,       fasten,     
		fix,     fuse,    grip,    hold,     latch,      limit,     
		lock,       mount,     partially_embrace,     place,   retain,      
		secure,        solder,     weld,       
	]
};
categ_relinquish = {
	code: "req",
	tags: ["-----"],
	contents: [
		collapse,       amount,     derange,     detach,  disassemble,     
		discharge,      disengage,     dislodge,       dismantle,     displace,  
		disperse,        ejaculate,      eject,      emit,     enclose,      
		furl,      recede,     reject,       release,       relinquish,    
		remove,    retract,      stow,   tip,  throw_word,      trigger,    
		trip,     withdraw,       yield,     
	]
};
categ_material_struct = {
	code: "mst",
	tags: ["-----"],
	contents: [
		alloy,      amorphous,      anhydrous,    anisotropic,      adsorbent,      
		bound,    brittle,      composite,      combustile,   capactive,    
		conductive,      coriaceous,   corious,  crisp,       crumbly,    
		deformable,      diaelectric,      diamagnetic,      diffuse,      
		deliquescent,     distortable,      elastic,       elastomer,  elastomeric,     
		electrolytic,       emulsified,    ferromagnetic,     fissible,     
		flexible,  fluid,       insulative,     foraminous,  fragile,     frangible,      
		friable,       frothy,     fume,    gas,     gel,      gelatinous,        
		glutinous,      homogenous,     homologous,       hydrated,      hydroscopic,       
		immovable,  inductive,       isotropic,  juice,       lacerable,  lacteal,     
		liquid,     magnetic,  malleable,       mastic,     metallic,    molten,      
		nebulous,     opaque,       ossified,      paramagnetic,      pectinate,      
		permeable,    
	]
};
categ_unknown = {
	code: "???",
	tags: ["-----"],
	contents: [
		undecahedron,       washer,     
	]
};
categ_relationship = {
	code: "rln",
	tags: ["-----"],
	contents: [
		abut,       alignment,  communicating,       contact,    dangle,      
		depend,   extend,   hang,    intermediate,      interpose,    
		operatively_assoc,        pendancy,       planetary,  protrude,        
		radiating,      suspend,    telescope,        truncate,       
	]
};
categ_movement_again = {
	code: "mv2",
	tags: ["-----"],
	contents: [
		abrasion,       acceleration,   action,      attrition,     beat,       
		circination,       circulation,       circumgyration,    circumrevolution,      
		compression,      conduction,   convection,   convolution,     convulsion,    
		fluctuation,     friction,     gyration,  idle,        vibration,      movement,   
		nutation,     orbit,   oscillation,     pendular_motion,   pendulous,       
		precession,    pulsation,     quiver,       reciprocation,     recirculation,     
		recycling,   retraction,      revolution,        rock,       roll,   rotation,    
		shake,     stationary,       suspension,    swing,     tension,      tick,      
		turbination,    undulation,       vacillation,    vibration,   vibratiuncle,     
		vortex,  waggle,      wiggle,     zig_zag,      
	]
};
categ_geometric = {
	code: "geo",
	tags: ["-----"],
	contents: [
		adaxial,        anterior,       arcuate,    axial,   coaxial,  co_extensive,        
		concave,        convergent,     diagonal,       diametrically_opposed,     
		diametrically_opposite,    divergent,   dorsal,   lateral,     lenticular,    
		longitudinal,    posterior,        prehensible,        radiating,      rotund,     
		transverse,       truncated,     sectioned,     ventral,     
	]
};
categ_contact = {
	code: "con",
	tags: ["-----"],
	contents: [
		abut,       bias,   bond,    compress,      contact,      depress,      
		embed,    extend,       expand,     force,   fuse,    hit,   inject,   
		insert,      interpose,     pass_over,      pull,      push,   straddle,     
		touch,   urge,    
	]
};
categ_physical_prop = {
	code: "phy",
	tags: ["-----"],
	contents: [
		plasma,         plastic,        pliable,    pliant,      polymeric,         
		porous,       paste,         refractory,         resilient,        
		resistive,         rigid,      sap,       semi_permeable,       
		sequacious,        solid,        spongy,         steam,    stringy,      
		supple,      tenacious,       thermoplastic,    thermosetting,           
		transparent,        translucent,         tumescent,        vacuous,       
		vapour,         viscous,           vulcanised,         yieldable,      
	]
};
categ_plane_curves_2D = {
	code: "c2D",
	tags: ["-----"],
	contents: [
		conic_section, serpentine, wavy_line, zig_zag, spiral, semicricle,
		loop, cycloid,
		quadrilateral,
		polygon 
	]
};
categ_3D_curves_solids = {
	code: "c3D",
	tags: ["-----"],
	contents: [
		helix, prism, pyramid, cylinder, cone, sphere
	]
};
categ_patterns_surface = {
	code: "pats",
tags: ["-----"],
	contents: [
		spotted, marked_strokes, marked_dots_strokes, lineated, hatched, irregular_stripes,
		tessellated, speckled, grained, streaked, watered, designations,
		jagged, toothed, scalloped, curled, panelled, granulated,
		fluted, plaited, ribbed, milled, crosswise, corrugated,
	]
};
// categ_ = {
// 	code: "",
// tags: ["-----"],
// 	contents: [

// 	]
// };
categories = [
    categ_structure, categ_mounting_method, categ_fastener, categ_bearing, 
    categ_spring, categ_numbers, categ_placement, categ_voids, categ_shapes, 
    categ_material_prop, categ_optical, categ_fluid_flow, categ_position, 
    categ_materials, categ_sequence, categ_movement, categ_electrical, 
    categ_rot_to_trnsln, categ_trnsln_to_trnsln, categ_rot_to_rot, categ_extenal, 
    categ_member, categ_projection, categ_limit, categ_flange, categ_edge, 
    categ_wedge, categ_point, categ_slab, categ_sheet, categ_beam, 
    categ_bearing_again, categ_plug, categ_jaws, categ_spring_again,
	categ_lift, categ_fibre, categ_receptacle, categ_interior, categ_tube,
	categ_orifice, categ_closure, categ_cover, categ_append, categ_relinquish,
	categ_material_struct, categ_unknown, categ_relationship, categ_movement_again,
	categ_geometric, categ_contact,	categ_physical_prop,
	categ_plane_curves_2D, categ_3D_curves_solids, categ_patterns_surface
];