// site content. index.html renders everything from this object.
// text: string or array of strings (one paragraph each). sub: italic line under a title.
// shape: earth leo geo moon rf lotus mini strip spring dust. control: mast | sweep.

window.CONTENT = {

  hero: {
    first: "Daniel",
    last: "Lewis",
    photo: "img/me.jpg",
    role: "Materials and Processes Engineer, Lockheed Martin Space",
    bio: [
      "I support material selection and qualification for spacecraft solar arrays and structures: substrates, dielectric systems, structural adhesives, composite laminates, harness materials. Low Earth orbit (LEO), medium Earth orbit (MEO), geosynchronous orbit (GEO), and the lunar surface each impose their own hostile environment consisting of thermal cycling, vacuum, and radiation. My role is allocating the right material to withstand each environment for the full extent of the mission."
    ],
    line: "B.S. Mechanical Engineering, UC Merced. Mountain View, CA.",
    // the blue dot on the globe
    lat: 37.39, lon: -122.08, coordsLabel: "37.39N 122.08W", place: "Mountain View, CA"
  },

  worlds: [

    // ---------------------------------------------------------------- home
    {
      id: "home", nav: "Home", scene: "home", accent: "159,211,255",
      logs: [
        {
          title: "Programs Supported",
          intro: "Materials and Processes, Solar Array Manufacturing Center, Lockheed Martin Space. July 2025 to present.",
          entries: [
            {
              date: "2025 to now", title: "Tranche 1 / Tranche 2, LEO", shape: "leo",
              sub: "Space Development Agency constellation in low Earth orbit.",
              text: [
                "Materials verification for the solar arrays: substrate structural integrity, bonding surfaces, dielectric materials, adhesives.",
                "Qualification of the automated cell bonding robot.",
                "Hands-on deflection testing of substrates."
              ],
              photos: []
            },
            {
              date: "2025 to now", title: "GPS III, Next Gen GEO, LM 400", shape: "geo",
              sub: "Large rigid arrays for MEO navigation and GEO missions.",
              text: [
                "Qualifying the automated robots for solar cell bonding and welding.",
                "Materials verification across the full array: composite substrates, Kapton dielectric film, adhesives, yokes/booms, fasteners, harness wiring, staking compounds.",
                "Designed experiments on bonding process changes. Root-cause investigations on flight hardware.",
                "Built a Python image-processing tool that measures bonded area between cell and substrate. It catches voids the previous method missed, cut turnaround from three weeks to one day, and now certifies production lots."
              ],
              photos: []
            },
            {
              date: "2026 to now", title: "LVSAT, Lunar Vertical Solar Array Technology", shape: "moon", control: "mast",
              sub: "NASA-selected R&D program to power the lunar south pole.",
              text: [
                "At the south pole the sun sits on the horizon. The array deploys vertically up to 65 feet, then retracts autonomously so it can be relocated. Lockheed has tested it in simulated lunar gravity, on slopes, in extreme cold.",
                "I support its materials and structures, plus deployment and retraction testing. The goal is power for Artemis, the first piece of infrastructure a lunar habitat needs."
              ],
              photos: []
            }
          ]
        }
      ]
    },

    // ---------------------------------------------------------------- materials
    {
      id: "materials", nav: "Materials", scene: "materials", accent: "180,140,255",
      tile: { kicker: "Materials", title: "Nyx", line: "A flower-shaped radiator that opens to shed heat in lunar day and seals shut through the lunar night.", dates: "2026 to now", shape: "lotus" },
      slider: true,   // shows the lunar temperature slider that drives the Nyx shapes
      logs: [
        {
          title: "Nyx",
          intro: "A passive thermal regulator. Spacecraft have to throw heat away in sunlight and hold on to it in the dark, and a lunar night lasts about two weeks. Nyx opens like a flower when it runs hot, so its high-emissivity inner faces radiate heat to space, and closes into a sealed bud when it gets cold. No motor, no sensor, no power.",
          entries: [
            {
              date: "May 2026", title: "Inspiration", shape: "lotus",
              text: [
                "A large part of my work is accounting for thermal cycling. A spacecraft bus sits under thermal blankets, but its solar arrays have to face the sun to make power. Every pass through Earth's shadow takes them from full sunlight to deep cold and back, about every 90 minutes in LEO, for years. It cannot be avoided, so every material and every bond on an array is qualified against it.",
                "That got me asking whether those hot and cold swings could be harnessed instead of only survived. Flowers already do it. Nyctinasty is the opening and closing of flowers between day and night, and it gave Nyx its name."
              ],
              photos: []
            },
            {
              date: "Jul 2026", title: "First Concept: A Laminate That Curls", shape: "lotus",
              text: "Carbon fiber laid up unevenly bends as it cures and changes shape with temperature. My first design was a six-petal carbon fiber iris meant to curl open on its own. The motion was small and hard to control, and I wanted a mechanism I could reason about, not a material that happens to warp.",
              photos: []
            },
            {
              date: "Jul 2026", title: "Spiral Kirigami Disc", shape: "lotus",
              text: "Next I cut a spiral kirigami disc from 0.020 in polycarbonate by hand, with a compass, a ruler, and a razor blade. Twisting the hub made all eight arms buckle out of plane together. It moved, but it did not read as opening and closing.",
              photos: []
            },
            {
              date: "Aug 2026", title: "Origami: The Flasher Fold", shape: "lotus",
              text: "Deployable space structures lean on origami: arrays, antennas, and starshades launch folded and open in orbit. A flasher pattern winds a large sheet into a small bundle and unfolds it in one motion. I folded paper and card stock from a stencil until the sequence was repeatable. Carbon fiber cracks if you crease it, so the hinge became the problem to solve.",
              photos: []
            },
            {
              date: "Sep 2026", title: "Hinges: Kapton, Then Printed Tiles", shape: "lotus",
              text: "Kapton film hinges were too flimsy to carry the panels. I moved to 3D-printed PETG tiles, pausing each print halfway to lay silk mesh across the gap so the next layers lock it in as a flexible hinge that bends without fatigue cracking. The hinges worked, but the panels lacked the stiffness a radiator needs to hold its shape, so I pivoted to a different architecture.",
              photos: []
            },
            {
              date: "Sep 2026", title: "CTE Mismatch", shape: "strip",
              text: "Every material grows a little when heated. How much it grows per degree is its coefficient of thermal expansion, or CTE. Bond two metals with different CTEs and the strip bends as the temperature changes, the same way a dial thermometer turns its needle. That bend was my first candidate actuator. Drag the slider to heat or cool the strip.",
              photos: []
            },
            {
              date: "Sep 2026", title: "Bimetal Finger Tests", shape: "strip",
              text: [
                "I bonded zinc, aluminum, and steel into 14 bimetal strips, each 1 x 6 inches with layer thickness as the only variable. Each one was heated toward 120\u00b0C, with deflection read off a ruler and surface temperature off an infrared thermometer every 20 seconds.",
                "I checked every strip against Timoshenko\u2019s bimetal theory: 12 of 14 bent within a factor of two of prediction, and the most responsive used 0.1 to 0.2 mm steel. Peak deflection was 10.7 mm at 120\u00b0C. A two-way nitinol spring gave 31 mm of stroke at 80\u00b0C, so the petals run on nitinol.",
                "Zinc also disqualifies itself for flight: it sublimates in vacuum, the vapor redeposits as a conductive film that can short electronics, and it grows whiskers. NASA\u2019s parts program prohibits zinc plating on space electronics for exactly these reasons, the same kind of material screening I do every day at Lockheed."
              ],
              photos: []
            },
            {
              date: "Oct 2026", title: "Two-Way Nitinol", shape: "spring",
              text: "Nitinol is a nickel-titanium shape memory alloy. A two-way spring changes length on its own as it crosses its transition temperatures: these finish contracting near 30°C and finish expanding near 60°C. The springs are not the innovation. They are the most direct way to prove the mechanism moves on temperature alone. Drag the slider across 30 to 60°C.",
              photos: []
            },
            {
              date: "Oct 2026", title: "Half-Scale Prototype", shape: "mini",
              text: "Eight petals on a fixed skeleton, all driven by one central nitinol spring through a sliding plate and eight links, so every petal moves together. Designed as a parametric CAD model and checked for collisions through the full range of motion before printing. PETG conducts heat poorly, so this one proves the motion, not the cooling.",
              photos: []
            },
            {
              date: "Oct 2026", title: "Full-Size Prototype, In Build", shape: "lotus",
              text: [
                "Eight petals, one nitinol spring each. Four inner petals form the walls of the closed bud. Four outer petals close over the seams and meet as the roof, with a foam gasket along each seam. Each petal is counterweighted to balance on its hinge, the way flight hardware is offloaded for ground tests, so the springs only have to overcome friction.",
                "Open, every petal lies flat with its high-emissivity face up. Closed, the bud encloses a payload whose temperature I will log through thermal cycles that mimic a lunar day and night and other orbits. All eight petals are printed. The base and drive hardware are next."
              ],
              photos: []
            },
            {
              date: "Next", title: "Next Steps: Carbon Fiber and Measured Data", shape: "lotus",
              text: "Rebuild the petals in carbon fiber, which carries heat out to the petal tips far better than plastic, and measure how much the bud slows heat loss when closed and speeds it up when open.",
              photos: []
            }
          ]
        }
      ]
    },

    // ---------------------------------------------------------------- RF
    {
      id: "rf", nav: "RF", scene: "rf", accent: "255,210,63",
      tile: { kicker: "Radio frequency", title: "RF Lab", line: "Two-antenna receivers built to find where a radio signal comes from.", dates: "2025 to now", shape: "rf" },
      logs: [
        {
          title: "RF Lab",
          intro: "Receivers I built to answer one question about a radio signal: where is it coming from?",
          entries: [
            {
              date: "Feb 2025", title: "Learning the Basics", shape: "rf",
              text: "Started with a HackRF One software-defined radio. I wrote a spectrum analyzer on a 2048-point FFT with a classifier that labels more than 60 FCC band segments, then worked through waterfall displays, raw IQ samples, and antenna comparisons: a 2.4 GHz patch, a GPS antenna, and a telescopic whip.",
              photos: []
            },
            {
              date: "Summer 2026", title: "Stanford EE 261: The Fourier Transform", shape: "rf",
              text: "I took EE 261 at Stanford to put real math under these tools. Everything after this leans on it: phase, cross-spectra, and what a fixed antenna spacing does to an angle estimate.",
              photos: []
            },
            {
              date: "Aug 2026", title: "HALOSCAN: Direction Finding", shape: "rf",
              text: "Two Vivaldi antennas feed a two-channel bladeRF 2.0. A signal reaches one antenna slightly before the other, and that phase difference should give its direction. Real-time bearings never held steady. I traced it to phase ambiguity: with the antennas spaced wide, one phase reading fits several angles. That diagnosis is what the rail was built to work around.",
              photos: []
            },
            {
              date: "Aug 2026", title: "The Rail", shape: "rf",
              text: "Two Vivaldi boards hang from a pair of wooden rails. One is fixed. The other slides, adjustable from 0.5 to 60 cm apart.",
              photos: []
            },
            {
              date: "Sep 2026", title: "Synthetic Aperture Imaging", shape: "rf", control: "sweep",
              text: "Sliding one antenna through many positions along the rail while the other stays fixed turns two small antennas into one long virtual array. Combining the phase measured at each position produces an angle map of where signal energy arrives from, overlaid on a photo of the scene. A straight rail resolves direction along its axis, side to side, not distance or height. Pointed so my Wi-Fi router sat at 0°, 30°, 45°, and 90°, it placed the energy on the router every time.",
              photos: []
            },
            {
              date: "Next", title: "Baseline Sweep", shape: "rf",
              text: "Spacing decides what the pair can see. Close together, the bearing is unambiguous but coarse. Far apart, it is precise but repeats, so one phase reading fits several angles. The fix I am building toward: step through several spacings and keep only the angle every spacing agrees on.",
              photos: []
            }
          ]
        }
      ]
    },

    // ---------------------------------------------------------------- photography (its own page)
    {
      id: "photos", nav: "Photography", scene: "photo", accent: "214,220,232",
      gallery: {
        title: "Photography",
        intro: "",
        // add photos as { src: "img/photos/name.jpg", alt: "what it shows", caption: "optional line under the photo" }
        // order here is the order on the page
        photos: [
          { src: "img/photos/storm-clouds.jpg", alt: "Storm clouds over the coast at dusk", w: 1800, h: 1200 },
          { src: "img/photos/peacock.jpg", alt: "Peacock", w: 1800, h: 1200 },
          { src: "img/photos/daisy.jpg", alt: "White and violet daisy", w: 1800, h: 1200 },
          { src: "img/photos/ball-python.jpg", alt: "Ball python", w: 1800, h: 1200 },
          { src: "img/photos/agapanthus.jpg", alt: "Agapanthus", w: 1800, h: 1200 },
          { src: "img/photos/croton.jpg", alt: "Croton leaves", w: 1800, h: 1200 },
          { src: "img/photos/begonia.jpg", alt: "Begonia", w: 1800, h: 1200 },
          { src: "img/photos/grass-sunset.jpg", alt: "Grass against the sunset", w: 1800, h: 1200 },
          { src: "img/photos/dome.jpg", alt: "Painted dome", w: 1800, h: 1231 }
        ],
        // shown only while photos is empty, so the page has a shape before the pictures arrive
        placeholders: ["Moon", "Flowers", "Lightning", "Moon", "Night sky", "Flowers"]
      }
    }
  ],

  // ---------------------------------------------------------------- record (home page, after the programs)
  record: {
    title: "Record",
    groups: [
      {
        heading: "Experience",
        items: [
          { title: "Materials and Processes Engineer, Solar Array Manufacturing Center", where: "Lockheed Martin Space, Sunnyvale, CA", date: "Jul 2025 to now",
            text: "Bonding process development and qualification, designed experiments, root-cause investigations, and material compliance review across GPS III, Next Gen GEO, LM 400, and smallsat arrays. Qualified 50+ flight harness crimp combinations by pull test to NASA and IPC requirements." },
          { title: "Electronic Materials and Processes Intern", where: "Lockheed Martin Space, Littleton, CO", date: "May 2024 to Jul 2025",
            text: "Summer, then part-time through senior year. Reconciled 200,000+ part numbers across four business units for cross-division purchasing. Wrote test plans comparing Vertrel and IPA flux cleaning on circuit cards." },
          { title: "Engineering Intern", where: "Electrified Adventures, Orange, CA", date: "May to Aug 2023",
            text: "Integrated battery packs, controllers, and three-phase motors into e-bike drivetrains. Debugged faults with an oscilloscope." }
        ]
      },
      {
        heading: "Education",
        items: [
          { title: "B.S. Mechanical Engineering, cum laude", where: "University of California, Merced", date: "2021 to 2025", text: "GPA 3.7" },
          { title: "EE 261: The Fourier Transform and Its Applications", where: "Stanford University", date: "Summer 2026", text: "" }
        ]
      },
      {
        heading: "Research",
        lines: [
          ["Plasma", "Ran a 50 kV plasma reactor fixing nitrogen from air into water; treated water matched nitrogen-enriched soil in plant growth. Dr. Venkattraman Ayyaswamy, 2023 to 2025"],
          ["Aeroelasticity", "Modeled the Pazy benchmark wing in HyperMesh and OptiStruct; stringers in place of solid material cut structural mass 44%. Dr. Sachin Goyal, 2024 to 2025"],
          ["Capstone", "Processed raw guayule rubber into tensile and compression samples, adapting a deli slicer to cut repeatable 2 mm slices. Dr. Kara McCloskey, 2024 to 2025"],
          ["Biophysics", "Simulated kinesin-2 and OSM-3 cargo transport blockage in Python. Dr. Ajay Gopinathan, 2021 to 2022"]
        ]
      },
      {
        heading: "Skills",
        lines: [
          ["Materials and test", "Adhesive qualification, designed experiments, lap-shear and tensile testing, microscopy, failure analysis, ASTM E595"],
          ["Fabrication", "Composite layup, fixture machining, FDM printing (PETG), flight harness crimping"],
          ["RF hardware", "bladeRF 2.0, HackRF One, Vivaldi antenna arrays, phase interferometry, synthetic aperture imaging"],
          ["Software", "Python (NumPy, image processing, FFT and DSP), HyperMesh and OptiStruct"],
          ["Certifications", "IPC/WHMA-A-620 cable and harness assemblies, NAR Level 1 high-power rocketry"]
        ]
      }
    ]
  },

  // ---------------------------------------------------------------- links (bottom of every page)
  // leave href empty ("") to hide a link. Email looks like "mailto:you@example.com"
  links: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/danielewis" },
    { label: "GitHub", href: "https://github.com/danielewis1019" },
    { label: "Resume", href: "resume.pdf" },
    { label: "Email", href: "mailto:danielewis2002@gmail.com" }
  ]
};
