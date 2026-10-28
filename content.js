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
      "I qualify materials for spacecraft solar arrays and structures: substrates, dielectric films, structural adhesives, composite laminates, and harness materials. Each has to survive the thermal cycling, vacuum, and radiation of its orbit, whether that\u2019s low Earth orbit (LEO), medium Earth orbit (MEO), geosynchronous orbit (GEO), or the lunar surface. I also write the procedures that turn new designs into flight hardware."
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
              photos: [ { src: "img/log/kirigami-disc.jpg", alt: "Spiral kirigami disc cut from clear polycarbonate", caption: "0.020 in polycarbonate, cut by hand", w: 1400, h: 1400 } ]
            },
            {
              date: "Aug 2026", title: "Origami: The Flasher Fold", shape: "lotus",
              text: "Deployable space structures lean on origami: arrays, antennas, and starshades launch folded and open in orbit. A flasher pattern winds a large sheet into a small bundle and unfolds it in one motion. I folded paper and card stock from a stencil until the sequence was repeatable. Carbon fiber cracks if you crease it, so the hinge became the problem to solve.",
              photos: [ { src: "img/log/flasher-closed-open.jpg", alt: "Card stock flasher fold, closed and open", caption: "Flasher fold in card stock, closed and open", w: 1616, h: 800 } ]
            },
            {
              date: "Sep 2026", title: "Hinges: Kapton, Then Printed Tiles", shape: "lotus",
              text: "Kapton film hinges were too flimsy to carry the panels. I moved to 3D-printed PETG tiles, pausing each print halfway to lay silk mesh across the gap so the next layers lock it in as a flexible hinge that bends without fatigue cracking. The hinges worked, but the panels lacked the stiffness a radiator needs to hold its shape, so I pivoted to a different architecture.",
              photos: []
            },
            {
              date: "Sep 2026", title: "CTE Mismatch", shape: "strip",
              text: "Every material grows a little when heated. How much it grows per degree is its coefficient of thermal expansion, or CTE. Bond two metals with different CTEs and the strip bends as the temperature changes, the same way a dial thermometer turns its needle. That bend was my first candidate actuator. Drag the slider to heat or cool the strip.",
              photos: [ { video: "img/log/cte-mismatch.mp4", src: "img/log/cte-mismatch.jpg", alt: "Bimetal strip bending as it heats and flattening as it cools", caption: "A bimetal strip bending as it heats, then flattening as it cools. 2.5x speed", w: 1200, h: 600 } ]
            },
            {
              date: "Sep 2026", title: "Bimetal Finger Tests", shape: "strip",
              text: [
                "I bonded zinc, aluminum, and steel into 14 bimetal strips, each 1 x 6 inches with layer thickness as the only variable. Each one was heated toward 120\u00b0C, with deflection read off a ruler and surface temperature off an infrared thermometer every 20 seconds.",
                "In all three metal pairs, the 0.1 and 0.2 mm steel layers bent the most. The best strip, 0.5 mm zinc on 0.1 mm steel, bowed 10.7 mm for a 120\u00b0C rise. Heated the same way, the nitinol springs grew about 31 mm, so the petals run on nitinol.",
                "Zinc also disqualifies itself for flight: it sublimates in vacuum, the vapor redeposits as a conductive film that can short electronics, and it grows whiskers. NASA\u2019s parts program prohibits zinc plating on space electronics for exactly these reasons, the same kind of material screening I do every day at Lockheed."
              ],
              photos: [ { src: "img/log/bimetal-samples.jpg", alt: "Fourteen bonded bimetal samples labeled by metal pair and thickness", caption: "The 14 bonded samples, labeled by metal pair and layer thickness", w: 1600, h: 844 }, { src: "img/log/bimetal-bow.png", alt: "Bow versus surface temperature for each bimetal strip, grouped by metal pair", caption: "Bow against measured surface temperature, one line per strip. The zinc on aluminum strip is not shown", w: 1600, h: 2040 } ]
            },
            {
              date: "Oct 2026", title: "Two-Way Nitinol", shape: "spring",
              text: "Nitinol is a nickel-titanium shape memory alloy. A two-way spring changes length on its own as it crosses its transition temperatures: these finish contracting near 30°C and finish expanding near 60°C. Heated with a heat gun to roughly 80 to 100\u00b0C, all nine springs I bought grew 27 to 38 mm, about 2.7 times their room-temperature length. The springs are not the innovation. They are the most direct way to prove the mechanism moves on temperature alone. Drag the slider across 30 to 60°C.",
              photos: [ { video: "img/log/nitinol-spring.mp4", src: "img/log/nitinol-spring.jpg", alt: "Two-way nitinol spring lengthening along a ruler as it heats", caption: "A two-way nitinol spring heating against a ruler", w: 1200, h: 600 }, { src: "img/log/nitinol-springs.png", alt: "Length of nine two-way nitinol springs at room temperature and heated", caption: "All nine springs, room temperature and heated", w: 1600, h: 1240 } ]
            },
            {
              date: "Oct 2026", title: "Half-Scale Prototype", shape: "mini",
              text: "Eight petals on a fixed skeleton, all driven by one central nitinol spring through a sliding plate and eight links, so every petal moves together. Designed as a parametric CAD model and checked for collisions through the full range of motion before printing. PETG conducts heat poorly, so this one proves the motion, not the cooling.",
              photos: [ { video: "img/log/half-scale-test.mp4", src: "img/log/half-scale-test.jpg", alt: "Half-scale prototype opening under heat, with a thermocouple readout", caption: "First test: nitinol thermal actuation. 4x speed", w: 1280, h: 720 }, { src: "img/log/half-scale-closed-open.jpg", alt: "Half-scale Nyx prototype in black PETG, closed and open", caption: "Half-scale prototype assembled in PETG, closed and open", w: 1616, h: 640 } ]
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
          intro: "Receivers I built at home to locate radio signals, using software-defined radios and testing different antennas: Vivaldi, a 2.4 GHz patch, an omnidirectional whip, and a GPS antenna.",
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
              photos: [ { src: "img/log/vivaldi-rail.jpg", alt: "Two Vivaldi antennas hanging from wooden rails", caption: "Two Vivaldi antennas on wooden bars, one fixed, one sliding", w: 1600, h: 1137 } ]
            },
            {
              date: "Sep 2026", title: "Synthetic Aperture Imaging", shape: "rf", control: "sweep",
              text: "Sliding one antenna through many positions along the rail while the other stays fixed turns two small antennas into one long virtual array. Combining the phase measured at each position produces an angle map of where signal energy arrives from, overlaid on a photo of the scene. A straight rail resolves direction along its axis, side to side, not distance or height. To test it, I left my Wi-Fi router where it was, about 20\u00b0 right of the rail\u2019s forward direction, and turned the rail 0\u00b0, 30\u00b0, 45\u00b0, and 90\u00b0. The strongest source tracked the router at every step: 21\u00b0 right, 7\u00b0 left, 39\u00b0 left, and 62\u00b0 left, against roughly 20\u00b0 right, 10\u00b0 left, 25\u00b0 left, and 70\u00b0 left expected. Every reading landed within one 22\u00b0 resolution cell, including at 90\u00b0, where the router is outside the camera frame.",
              photos: [ { video: "img/log/sar-four-angles.mp4", src: "img/log/sar-four-angles.jpg", alt: "Radio images over photos of the room as the rail turns, blue tiles on the router", caption: "The rail turned 0\u00b0, 30\u00b0, 45\u00b0, and 90\u00b0. Blue tiles mark where the router\u2019s signal arrives from", w: 1600, h: 960 } ]
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

  // ---------------------------------------------------------------- links (bottom of every page)
  // leave href empty ("") to hide a link. Email looks like "mailto:you@example.com"
  links: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/danielewis" },
    { label: "GitHub", href: "https://github.com/danielewis1019" },
    { label: "Resume", href: "resume.pdf" },
    { label: "Email", href: "mailto:danielewis2002@gmail.com" }
  ]
};
