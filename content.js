// Everything a visitor reads lives in this file. Edit text here; the page rebuilds itself from it.
// Rules of thumb:
//   - text can be one string or a list of strings; each string becomes its own paragraph
//   - write text inside "double quotes" so apostrophes like don't are safe
//   - photos go in the img folder; reference them as "img/whatever.jpg". A missing photo just hides itself
//   - shape picks what the particles build while that entry is on the center line:
//       earth, leo, geo, moon, rf, lotus (full-size Nyx), mini (half-scale Nyx), strip (bimetal finger),
//       spring (two-way nitinol spring), dust (loose drifting particles)
//   - (photography lives in the last world below; drop photos in img/photos and list them there)
//   - control (optional): "mast" raises the LVSAT mast with scroll, "sweep" slides the RF antenna with scroll
//   - sub (optional): one italic line under an entry's title
//   - to add an entry, copy one { ... } block, paste it where you want it, and change the words
//   - to remove one, delete its { ... } block and the comma after it
// Keep Lockheed proprietary information out of this file. Public program information and your own role only.

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
          intro: "Materials and Processes, Solar Array Manufacturing, Lockheed Martin Space. 2024 to present.",
          entries: [
            {
              date: "2024 to now", title: "Tranche 1 / Tranche 2, LEO", shape: "leo",
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
                "Built a Python image-processing tool that measures bonded area between cell and substrate. It catches voids the previous method missed and cut turnaround from weeks to days."
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
      tile: { kicker: "materials", title: "Nyx", photo: "", shape: "lotus" },
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
              text: "I bonded zinc to steel and cut 1 x 6 inch samples, varying only sheet thickness, then heated them toward 120°C, recording deflection against a ruler and surface temperature with an infrared thermometer every 20 seconds. They deflected, but not far enough to swing a petal. Zinc also disqualifies itself for flight: it sublimates in vacuum, the vapor redeposits as a conductive film that can short electronics, and it grows whiskers. NASA's parts program prohibits zinc plating on space electronics for exactly these reasons, the same kind of material screening I do every day at Lockheed.",
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
                "Open, every petal lies flat with its high-emissivity face up. Closed, the bud encloses a payload whose temperature I will log through thermal cycles that mimic a lunar day and night and other orbits. Inner petals are printed. Outer petals are next."
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
      tile: { kicker: "radio frequency", title: "RF Lab", photo: "", shape: "rf" },
      logs: [
        {
          title: "RF Lab",
          intro: "Receivers I built to answer one question about a radio signal: where is it coming from?",
          entries: [
            {
              date: "Feb 2025", title: "Learning the Basics", shape: "rf",
              text: "Started with a HackRF One software-defined radio: spectrum analysis, waterfall displays, reading raw IQ samples, and comparing antennas, including a 2.4 GHz patch, a GPS antenna, and a telescopic whip.",
              photos: []
            },
            {
              date: "Summer 2026", title: "Stanford EE 261: The Fourier Transform", shape: "rf",
              text: "I took EE 261 at Stanford to put real math under these tools. Everything after this leans on it: phase, cross-spectra, and what a fixed antenna spacing does to an angle estimate.",
              photos: []
            },
            {
              date: "Aug 2026", title: "HALOSCAN: Direction Finding", shape: "rf",
              text: "Two Vivaldi antennas feed a two-channel bladeRF. A signal reaches one antenna slightly before the other, and that phase difference gives its direction. HALOSCAN detects emitters and follows them as the rig pans. The open problem is holding a stable bearing on intermittent signals.",
              photos: []
            },
            {
              date: "Aug 2026", title: "The Rail", shape: "rf",
              text: "Two Vivaldi boards hang from a pair of wooden rails. One is fixed. The other slides, adjustable from about half a centimeter to two feet apart.",
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
        // add photos as { src: "img/photos/moon-1.jpg", caption: "Waxing gibbous, Oct 2026" }
        // order here is the order on the page. caption is optional.
        photos: [],
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
          { title: "Materials and Processes Engineer", where: "Lockheed Martin Space, Sunnyvale, CA", date: "2024 to now",
            text: "Solar array materials verification, adhesive bonding qualification, composite process control, root-cause analysis and designed experiments on flight hardware. Intern, then part-time through my final year at UC Merced, full-time since 2025." },
          { title: "Electronic Materials and Processes Intern", where: "Lockheed Martin Space, Littleton, CO", date: "",
            text: "Materials and processes support for spacecraft electronics." },
          { title: "Engineering Intern", where: "Electrified Adventures", date: "",
            text: "Three-phase motor systems and DC-to-AC motor controllers for electric bikes." }
        ]
      },
      {
        heading: "What I Work With",
        lines: [
          ["Composites", "Honeycomb sandwich panels, carbon fiber laminates and layup, rollable composite booms"],
          ["Bonding", "Adhesive qualification, solar cell bonding, bonded-area measurement, failure investigation"],
          ["Space environment", "Dielectric films, outgassing, thermal cycling and vacuum compliance, staking compounds"],
          ["Electrical", "Flight harness wiring and crimping, IPC/WHMA-A-620 certified"],
          ["Test and analysis", "Designed experiments, deflection testing, Python data and image processing"],
          ["Fabrication", "FDM printing, fabric-embedded printed hinges, hand layup, bonding fixtures"],
          ["RF", "Software-defined radio (HackRF One, bladeRF), phase interferometry, Fourier analysis"]
        ]
      },
      {
        heading: "Education",
        items: [
          { title: "B.S. Mechanical Engineering, cum laude", where: "University of California, Merced", date: "2025", text: "" },
          { title: "EE 261: The Fourier Transform and Its Applications", where: "Stanford University", date: "Summer 2026", text: "" }
        ]
      },
      {
        heading: "Research",
        lines: [
          ["Aeroelasticity", "Finite element analysis of the Pazy benchmark wing in HyperMesh and OptiStruct, with Dr. Sachin Goyal"],
          ["Plasma", "Plasma-driven nitrogen fixation, Non-Equilibrium Plasma and Fluids Lab, with Dr. Venkattraman Ayyaswamy"],
          ["Biophysics", "Molecular motors moving along the cytoskeleton, with Dr. Ajay Gopinathan"],
          ["Capstone", "Guayule natural rubber processing, with Dr. Kara McCloskey. We used an industrial deli slicer as the precision cutting tool"]
        ]
      },
      {
        heading: "Certifications",
        lines: [
          ["IPC/WHMA-A-620", "Cable and wire harness assemblies"],
          ["NAR Level 1", "High-power rocketry"]
        ]
      }
    ]
  },

  // ---------------------------------------------------------------- links (bottom of every page)
  // leave href empty ("") to hide a link. Email looks like "mailto:you@example.com"
  links: [
    { label: "LinkedIn", href: "" },
    { label: "GitHub", href: "https://github.com/danielewis1019" },
    { label: "Resume", href: "resume.pdf" },
    { label: "Email", href: "" }
  ]
};
