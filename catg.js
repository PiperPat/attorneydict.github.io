const categ_structure = [
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
const categ_mounting_method = [
    abut,
    attach,
    bolt,
    couple,
    demntbly,
    engage,
    fix 
];
const categ_fastener = [
    bolt,
    cable,
    clip,
    clamp,
    connection,
    coupling,
    dowel,
    hld_dwn,
    hook,
    joint,
    unv_jnt,
    keeper,
    key,
    latch,
    lock,
    lug,
    nail,
    nut,
    pin,
    rivet,
    screw,
    seam
];
const categ_bearing = [
    ant_frcn,
    ant_fr_ball,
    ant_fr_nedl,
    ant_fr_roller,
    ant_fr_tp_rlr,
    bushing,
    fulcrum,
    journal,
    pivot,
    radial,
    seal,
    seat,
    sliding,
    support,
    thrust
];
const categ_spring = [
    air,
    bias,
    element,
    coil,
    helical,
    helcl_comp,
    helcl_tnsn,
    leaf,
    torsional
];
const categ_numbers = [
    multiplicity,
    plurality,
    several
];
const categ_placement = [
    abut,
    adjacent,
    aligned,
    attached,
    axial,
    cantilever,
    complmtry,
    concentric,
    eccentric,
    contiguous,
    distal_prox,
    divided,
    disposed,
    engaged,
    extended,
    inclined,
    integral,
    intermediate,
    interposed,
    juxtaposed,
    located,
    lateral,
    mating,
    meshing,
    normal,
    offset,
    opposed,
    overlapping,
    perpendclr,
    parallel,
    planar,
    positioned,
    projecting,
    proximate,
    radial,
    removable,
    rectilinear,
    resting,
    retractable,
    spacer,
    staggered,
    superposed,
    supported,
    surrounding,
    symmetrical
];
const categ_voids = [
    aperture,
    bore,
    cavity,
    chamber,
    duct,
    groove,
    hole,
    hollow,
    notch,
    open_ended,
    opening,
    orifice,
    recess,
    passage,
    slit,
    slot,
    socket,
];
const categ_shapes = [
    x_shaped,
    t_shaped,
    annular,
    arch,
    arculate,
    barrel,
    bevel,
    buldged,
    bucket,
    chamfered,
    channel,
    circular,
    concave,
    convex,
    conical,
    corrugated,
    cuboid,
    cup,
    cylinder,
    cylindroid,
    depression,
    disc,
    dome,
    elliptical,
    fin,
    flange,
    fold,
    fork,
    frusto,
    groove,
    helical,
    hook,
    hr_gls_shp,
    inclinded,
    oblong,
    parabolic,
    plane,
    phombic,
    rectangular,
    round,
    sheet,
    shelf,
    sinusoidal,
    spherical,
    square,
    stepped,
    taper,
    trapezoid,
    triangular,
    truncate,
    trough,
    tubular,
    twist,
    waisted,
    web,
    wedge
];
const categ_material_prop = [
    collapsible,
    contractable,
    deformable,
    dense,
    elastic,
    enlarged,
    expandable,
    embiggened,
    flexible,
    foldable,
    foraminous,
    fixed,
    insulation,
    opaque,
    permeable,
    porous,
    resilient,
    rigid,
    translucent,
    transparent
];
const categ_optical = [
    bezel,
    bulb,
    fluorescent_bulb,
    incandescent_bulb,
    lamp,
    light_ray,
    light_beam,
    reflection,
    refraction,
    transmission,
    wndw
];
const categ_fluid_flow = [
    accumulator,
    aspirator,
    bellows,
    conduit,
    connector,
    convection,
    cylinder_piston,
    cylinder_rod,
    dashpot,
    diaphragm,
    discharge,
    dispenser,
    filter,
    flue,
    gasket,
    hose,
    hydraulic,
    medium,
    nozzle,
    outlet,
    pipe,
    plunger,
    port,
    inlet_port,
    outlet_port,
    pump,
    centrifugal_pump,
    gear_pump,
    piston_pump,
    vane_pump,
    reservoir,
    seal,
    siphon,
    tank,
    tube,
    valve,
    ball_check_valve,
    control_valve,
    gate_valve,
    shut_off_valve,
    non_return,
    one_way
];
const categ_position = [
    angle,
    oblique_angle,
    obtuse_angle,
    axial,
    bottom_top,
    close_open,
    crest,
    edge,
    external_internal,
    face,
    film,
    horizontal_vertical,
    lateral,
    layer,
    lower_upper,
    normal_to_parallel,
    rim,
    section,
    slant,
    surface,
    tilt
];
const categ_materials = [
    adhesive,
    concrete,
    cork,
    fabric,
    fibre,
    fluid,
    insulation,
    liquid,
    metal,
    plastic,
    refractory,
    sand,
    wood,
    scrn
];
const categ_sequence = [
    alternate,
    cyclic,
    interval,
    lag_lead,
    simultaneously,
    consecutive
];
const categ_movement = [
    compression,
    downward_upward,
    drag,
    eccentric,
    emergent,
    extensible,
    extrude,
    grinding,
    hinge,
    impact,
    inertia,
    oscillate,
    crank,
    pivot,
    pressing,
    pulverize,
    sagging,
    severing,
    slidable,
    terminating,
    transverse,
    traversing,
    vibrating
];
const categ_electrical = [
    contact,
    electrode,
    electromagnet,
    filament,
    insulator,
    lead,
    line_cord,
    motor,
    power_supply,
    resistance,
    socket,
    solenoid,
    swtch,
    transformer,
    wire
];
const categ_rot_to_trnsln = [
    longitudinal,
    bell,
    cam,
    circ_to_reportical,
    cam_movement,
    propelling,
    connecting_rod,
    crank_arm,
    jack,
    radius_bar,
    screw,
    winch,
    yoke
];
const categ_trnsln_to_trnsln = [
    inclined_plane,
    lever,
    linkage,
    parallel,
    straight_line,
    motion,
    toggle
];
const categ_rot_to_rot = [
    brake,
    band,
    disc,
    shoe,
    chain,
    clutch,
    centrifugal,
    sprag,
    toothed,
    one_way,
    drive,
    belt,
    pulley,
    sheave,
    toothed,
    friction,
    gear,
    bvl_crwn_int,
    non_circular,
    pinion,
    right_angle,
    spur,
    worm_n_wheel,
    intermittent,
    geneva,
    pawl_n_ratchet,
    pendulum,
    journal,
    variable_speed,
    flex_coupling_sprocket
];
const categ_extenal = [
    body,
    box,
    block,
    brace,
    bracket,
    cage,
    cs,
    casing,
    chassis,
    compartment,
    cradle,
    enclosure,
    frame,
    framework,
    housing,
    rack,
    scaffold,
    skeleton,
    stator,
    stretcher,
    support,
    spprt_struct
];
const categ_member = [
    arm_mbr,
    assembly,
    auxiliary,
    bar,
    bifurcated,
    bit,
    block,
    box,
    brace,
    branch_mbr,
    bulkhead,
    bulwark,
    caliper,
    cantilevar,
    compartment_mbr,
    component,
    connecting_rod,
    crank,
    coupling_mbr,
    extension,
    flag,
    foot_mbr,
    fork,
    foundation,
    guide_mbr,
    haft,
    handle,
    head_mbr,
    key,
    knob,
    leg_mbr,
    lever,
    limb,
    link,
    means,
    member,
    mounting,
    pallet,
    panel,
    pawl,
    pedal,
    pedestal,
    pin,
    plurality,
    portion,
    pike,
    prop,
    rack,
    rib,
    rod,
    roller,
    rung,
    section,
    segment,
    shank,
    sleeve,
    slide,
    splint,
    stake,
    stanchion,
    support_mbr,
    tappet,
    tenon,
    trestle,
    trigger,
    tripod,
    wall_mbr
];
const categ_projection = [
    aux_member,
    boss,
    dog,
    dump,
    ear,
    extension,
    finger,
    flange,
    guide,
    handle,
    hump,
    key,
    knob,
    lip,
    lobe,
    lug,
    male_member,
    nib,
    peg,
    projection,
    prong,
    protrusion,
    ramp,
    rib,
    ridge,
    tang,
    tenon,
    sawtooth,
    skirt,
    trunnion,
    tongue,
    wedge
];
const categ_limit = [
    abutment,
    apex,
    base,
    cease,
    circumference,
    enough,
    final_degree,
    finish,
    foot,
    gauge,
    guide,
    hammer,
    lap,
    ledge,
    limit,
    peak,
    perimeter,
    periphery,
    pinnacle,
    rest,
    rim,
    shelf,
    shoulder,
    sill,
    stp,
    sufficient
];
const categ_flange = [
    chimb,
    chime,
    collar,
    edge,
    flange,
    flat,
    ledge,
    lip,
    platfarm,
    rtrn,
    rib,
    ridge,
    rim,
    shelf,
    shoulder,
    support,
    sill,
    skirt,
    slat
];
const categ_edge = [
    boundary ,
    cheek ,
    corner_ext ,
    cornice ,
    edge ,
    edge ,
    face ,
    flank ,
    profile ,
    ridge ,
    rim ,
    screen ,
    shape ,
    side ,
    skimmer 
];
const categ_wedge = [
    angled_surface ,
    cam_means ,
    force_fit ,
    incline ,
    inclined_surface ,
    key ,
    pin ,
    ramp ,
    screw ,
    slope ,
    edge 
];
const categ_point = [
    apex ,
    cornice ,
    crest ,
    crown ,
    ad ,
    head ,
    heel ,
    knob ,
    terminus ,
    tail ,
    tip ,
    toe ,
    top ,
    vertex ,
    zenith 
];  
const categ_slab_categ = [
    bar ,
    billet ,
    base ,
    bed ,
    block ,
    chunky ,
    ceiling ,
    staunchion ,
    floor ,
    flange ,
    foundation ,
    ground ,
    mat  ,
    plank ,
    plane ,
    platform ,
    rest ,
    shelf ,
    slab ,
    stage ,
    slice 
];
const categ_sheet = [
    film ,
    foil ,
    laminate ,
    layer ,
    membrane ,
    plate ,
    scale ,
    sheet ,
    sliver ,
    slab ,
    slice ,
    wafer ,
    bearer ,
    boom ,
    brace ,
    column ,
    guy ,
    loading_bearing ,
    mast ,
    pillar ,
    pole ,
    prop ,
    rigging ,
    spar ,
    stay ,
    stave ,
    stud ,
    staunchion ,
    upright ,
    BEAM ,
    arch ,
    beam ,
    cantilever ,
    chord ,
    girder ,
    jamb ,
    joist ,
    lintel ,
    prop ,
    rafter ,
    RSJ ,
    tie_bar ,
    tie_beam ,
    transom ,
    truss 
];
const categ_beam = [
    axis ,
    axle ,
    bar ,
    cordon ,
    castor ,
    column ,
    counter_shaft ,
    crank ,
    king_pin ,
    mandrel ,
    nip_bw_rllrs ,
    pillar ,
    pin ,
    pivot ,
    pole ,
    rod ,
    roll ,
    roller ,
    rotor ,
    shaft  ,
    shank ,
    spindle ,
    stub_axl_shft ,
    support ,
    trunnion ,
    tube ,
    wheel 
];
const categ_bearing_again = [
    articulated ,
    ball_b ,
    bearing ,
    bush ,
    chuck ,
    castor ,
    fulcrum ,
    hinge ,
    jewel ,
    joint ,
    journal ,
    king_pin ,
    knife_edge ,
    mandrel ,
    needle ,
    pivot ,
    plummer ,
    roller_b ,
    saddle ,
    slipper ,
    swing ,
    swivel 
];
    