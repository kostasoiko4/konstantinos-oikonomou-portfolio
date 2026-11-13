export const translations = {
  en: {
    translation: {
      seo: {
        title: "Konstantinos Oikonomou | Frontend & Full-Stack Engineer",
        description: "Frontend & Full-Stack Engineer in Thessaloniki, Greece. Web platforms for municipalities, research institutions and public bodies, with React and Next.js.",
        shareDescription: "Web platforms for municipalities, research institutions and public bodies, from React frontends to full-stack Next.js applications. 20+ live deployments across Greece.",
        locale: "en_US",
        alternateLocale: "el_GR",
      },
      nav: {
        work: "Work",
        projects: "Projects",
        experience: "Experience",
        skills: "Skills",
        about: "About",
        services: "Services",
        contact: "Contact",
      },
      hero: {
        name: "Konstantinos Oikonomou",
        headline: "Frontend & <gold>Full-Stack</gold> Engineer",
        subhead: "Web platforms for municipalities, research institutions and public bodies, from React frontends to full-stack Next.js applications.",
        stats: {
          deployments: "live deployments",
          municipalities: "municipalities",
        },
        cta: {
          primary: "View selected work",
          secondary: "Download CV",
        },
      },
      work: {
        title: "Selected Work",
        subtitle: "A closer look at the most substantial projects: the challenge, the role and the key contributions.",
        labels: {
          challenge: "Challenge",
          role: "Role",
          built: "Key contributions",
          installations: "Live installations",
          internal: "Internal system · login required",
          visit: "Visit site",
        },
        products: {
          cityEvents: "City Events",
          sync2mycity: "Sync2myCity",
          act4mycity: "Act4myCity",
        },
        cases: {
          patras: {
            kind: "Team coordination · Tightest deadline",
            title: "Interoperability Centre, Patras",
            challenge: "A large-scale municipal dashboard covering sensors, environment, mobility, cleaning, finances, tickets and ML predictions, built on an already complex codebase under the tightest deadline in the portfolio.",
            role: "Coordination of a section of the team and presentation of the platform to the client during review.",
            built: [
              "Broke a complex section of the codebase into tasks with clear goals and instructions, enabling parallel work across the team.",
              "Kept delivery on schedule under the tightest deadline in the portfolio.",
              "Presented the platform at client review, demonstrating how existing functionality already addressed many of the additional requests.",
              "Development across the application's modules with React, Ant Design, Leaflet and MapLibre maps, and Chart.js.",
            ],
          },
          vourla: {
            kind: "Full-stack · Next.js · End-to-end ownership",
            title: "Interoperability Centre, Kamena Vourla",
            challenge: "A ground-up redesign and re-architecture of the KED platform as a single full-stack application for the Municipality of Kamena Vourla, receiving sensor readings and municipal records from external providers.",
            role: "End-to-end ownership: architecture, data model, API, interface, testing and deployment.",
            built: [
              "Next.js App Router application in TypeScript, backed by PostgreSQL with PostGIS for zones and locations.",
              "Data API with per-provider keys; incoming readings generate notifications.",
              "Dashboards for environment, mobility, waste and finance, with maps and charts over the latest readings.",
              "Unit tests with Vitest and end-to-end tests with Playwright across Chromium, Firefox and WebKit, run against an isolated database.",
              "Containerised deployment with Docker Compose behind nginx.",
            ],
          },
          monorepo: {
            kind: "Monorepo · 3 products · 10 installations",
            title: "One codebase for every municipality",
            challenge: "Each municipality ran its own copy of the application, so every fix and feature had to be repeated per installation while new municipalities arrived on strict deadlines.",
            role: "Architecture of Sync2myCity as the company's first monorepo, which initiated the move from many codebases to one; City Events and Act4myCity followed the same model.",
            built: [
              "Shared core package, with each municipality as a thin application defining its own environment, page metadata, texts and a small set of component overrides.",
              "Override registry that lets an installation replace components while the core remains unaware of which municipality it serves.",
              "Shared Vite configuration, per-installation builds and Bitbucket Pipelines deployments.",
              "Delivery of City Events, and of Act4myCity's move to multiple installations, under very strict deadlines.",
            ],
          },
          ekt: {
            kind: "Fully custom UI · Open data",
            title: "EKT Open Data Platform",
            challenge: "A public front end for the National Documentation Centre's CKAN open data catalogue, built to a fully custom design without exposing CKAN's write API.",
            role: "Front-end development and the serving layer; established the custom-component approach adopted in subsequent projects.",
            built: [
              "No UI library: every component written from scratch in React 19 and plain CSS to match the design precisely.",
              "Dataset search and discovery for science, culture and research on top of the CKAN API.",
              "Node proxy in front of CKAN, with nginx permitting read requests and blocking writes.",
              "Docker setup running alongside CKAN on a shared network.",
            ],
          },
        },
      },
      places: {
        argostoli: "Argostoli",
        oropos: "Oropos",
        paionia: "Paionia",
        kallithea: "Kallithea",
        kozani: "Kozani",
        konitsa: "Konitsa",
        pydna: "Pydna",
        veroia: "Veroia",
        kalamaria: "Kalamaria",
        centralMacedonia: "Central Macedonia",
      },
      projects: {
        title: "More Projects",
        subtitle: "Additional platforms and websites, followed by independent work.",
        sideLabel: "Independent work",
        source: "View on GitHub",
        viewAll: "More on GitHub",
        items: {
          smartCity: {
            title: "Smart City Platform",
            description: "Public city dashboards for five municipalities, presenting live data from weather stations, smart bins, Wi-Fi hotspots, energy consumption and other sensors.",
          },
          pkm: {
            title: "Region of Central Macedonia (PKM)",
            description: "Citizen e-services portal of the Region of Central Macedonia, providing digital services and online applications.",
          },
          tremorWatch: {
            title: "Tremor Watch Trikala",
            description: "Real-time seismic activity monitoring and public alerts for the Municipality of Trikala.",
          },
          menr: {
            title: "MENR Azerbaijan (FAO)",
            description: "Unified view of Azerbaijan's specially protected natural areas for the Ministry of Ecology and Natural Resources: environmental data, a digital library and GIS maps.",
          },
          knossos: {
            title: "Knossos Palace",
            description: "Digital tour guide to the Palace of Knossos and the archaeological sites of Heraklion, with maps, routes and a timeline in five languages.",
          },
          eata: {
            title: "Athens Development (EATA)",
            description: "Free digital tools programme for Athens businesses: applications, document submission and result tracking, with TaxisNet authentication.",
          },
          tee: {
            title: "Technical Chamber of Greece (TEE)",
            description: "Digital repository of the pre-industrial and industrial heritage of the Dodecanese, for the Chamber's Dodecanese branch.",
          },
          academyAthens: {
            title: "Academy of Athens",
            description: "The Academy's digital repository and the websites of two of its research centres: KENDI (Modern Greek dialects) and KEFAK (atmospheric physics and climatology).",
          },
          apokorona: {
            title: "Museums of Apokoronas",
            description: "Online portal to the museums of the Municipality of Apokoronas, Crete, presenting their exhibits and the area's cultural heritage.",
          },
        },
        side: {
          endofdawn: {
            kind: "Website · Music",
            title: "End of Dawn",
            description: "Official website of a symphonic gothic black metal band from Thessaloniki: music, live dates, merchandise store and press kit, in four languages.",
          },
          gemluxury: {
            kind: "Website · Hospitality",
            title: "Gem Rooms Luxury Apartments",
            description: "Bilingual website for a luxury apartment rental, presenting rooms and location, with an integrated accessibility widget.",
          },
          thesis: {
            kind: "Open source · Thesis",
            title: "Anomaly Detection in Autonomous Driving Agents Using World Models",
            description: "A two-tier safety monitor for DreamerV3 driving agents in CARLA: a CNN detects obstacles by comparing real and imagined frames, while a KL monitor flags when the world model no longer fits the scene.",
          },
        },
      },
      experience: {
        title: "Professional Journey",
        subtitle: "Digital products across the public and private sectors",
        current: "Current",
        earlier: "Earlier roles",
        cv: "Download CV",
        companies: {
          dotsoft: { name: "Dotsoft", period: "May 2024 - Present" },
          weblogic: { name: "Weblogic", period: "Sep 2022 - May 2024" },
          instashop: { name: "Instashop", period: "Jan 2022 - Mar 2022" },
          renvis: { name: "Renvis", period: "Jul 2021 - Sep 2021" },
        },
        roles: {
          dotsoftSenior: {
            title: "Senior Developer",
            period: "2026 - Present",
            points: [
              "Led the transition from one codebase per installation to a monorepo architecture, now running 10 installations across Sync2myCity, City Events and Act4myCity, delivered under very strict deadlines.",
              "Redesigned and re-architected the KED interoperability platform as a full-stack Next.js application, with end-to-end ownership of architecture, data model, API, testing and deployment.",
              "Coordinated part of the KED Patras team under the tightest deadline in the portfolio, defining tasks with clear goals and representing the platform at client review.",
            ],
          },
          dotsoftMidSenior: {
            title: "Mid-Senior Developer",
            period: "May 2025 - 2026",
            points: [
              "Delivered the EKT open data platform with a fully custom interface (React and plain CSS, no UI library), setting the approach for subsequent projects.",
              "Delivered citizen-facing municipal platforms, including a volunteering network and real-time seismic monitoring with public alerts.",
            ],
          },
          dotsoftMid: {
            title: "Mid-Level Developer",
            period: "May 2024 - May 2025",
            points: [
              "Developed and maintained web applications for public bodies and organisations, including the Academy of Athens, the Region of Central Macedonia and the Ministry of Ecology and Natural Resources of Azerbaijan.",
              "Digital repositories, research centre websites and administration panels in React, Redux Toolkit, Bootstrap and Ant Design.",
            ],
          },
          weblogicLead: {
            title: "Lead Developer",
            period: "Jun 2023 - May 2024",
            points: [
              "Led front-end development of three React Native mobile applications: Bus Driver, Bus Passenger and Hotel Booking.",
              "Translated customer requirements into scoped tasks and distributed the workload across the team.",
              "Onboarded and mentored new team members.",
              "Owned version control and quality assurance.",
            ],
          },
          weblogicFrontend: {
            title: "Frontend Developer",
            period: "Sep 2022 - May 2024",
            points: [
              "Developed a platform for hotels and travel agencies to create and manage chatbots.",
              "Built the embeddable chat widget and its specialised components.",
              "Translated business requirements into platform updates.",
            ],
          },
          instashop: {
            title: "Full Stack Engineer",
            period: "Jan 2022 - Mar 2022",
            summary: "Full-stack development and support, including legacy project upgrades and customer data management, within an international team.",
          },
          renvis: {
            title: "Full Stack Intern",
            period: "Jul 2021 - Sep 2021",
            summary: "Contributed to a basketball academy management application from design through to production.",
          },
        },
      },
      expertise: {
        title: "Technical Expertise",
        subtitle: "Core technologies in daily use, alongside tools from earlier projects and research.",
        groups: {
          frontend: { title: "Frontend", caption: "Primary focus" },
          mobile: { title: "Mobile", caption: "Cross-platform apps for iOS and Android" },
          backend: { title: "Backend & Data", caption: "APIs and data behind the interface" },
          workflow: { title: "Workflow & Tooling", caption: "Planning, delivery and tooling" },
          other: { title: "Additional experience", caption: "Earlier frameworks, and languages from university and research" },
        },
      },
      about: {
        title: "About",
        bio: "Frontend & Full-Stack Engineer based in Thessaloniki, Greece, building platforms for municipalities and public institutions at Dotsoft: smart city dashboards, citizen services, open data portals and digital repositories, in use across more than 15 Greek municipalities and organisations such as the Academy of Athens and the National Documentation Centre.",
        background: "Computer Science studies at Aristotle University of Thessaloniki, with a thesis on anomaly detection in autonomous driving agents using world models.",
        interests: "Outside of work: music (playing and writing), martial arts, brewing and cooking, and hands-on crafts.",
        educationLabel: "Education",
        degree: "Computer Science",
        university: "Aristotle University of Thessaloniki",
        thesisLink: "Thesis repository",
        programmesLabel: "Business programmes",
        programmes: [
          "NGB Business Seeds, 14th Innovation and Technology Competition (2023)",
          "OkThess! acceleration programme, 14th cycle (2021)",
        ],
        certificationsLabel: "Certifications",
        verify: "Verify",
        certs: {
          pm2: { title: "PM² Agile Certification", issuer: "PM² Alliance", date: "2026" },
          react: { title: "React - The Complete Guide (incl. Next.js, Redux)", issuer: "Udemy · Academind", date: "2026" },
          gdpr: { title: "GDPR - General Data Protection Regulation", issuer: "Sphynx", date: "2026" },
          ai: { title: "AI Applications in Business Marketing & Management", issuer: "GlobalCert · ESYD accredited", date: "2025" },
        },
      },
      services: {
        title: "Services",
        subtitle: "Services for organisations with similar needs, and how a typical engagement runs.",
        items: {
          webDev: {
            title: "Web Application Development",
            description: "Dashboards, digital repositories, admin panels and citizen-facing portals, from React frontends to full-stack Next.js applications with PostgreSQL and PostGIS.",
            proof: "View the Kamena Vourla case study",
          },
          mobile: {
            title: "Mobile Applications",
            description: "Cross-platform iOS and Android applications with React Native, such as the bus driver, bus passenger and hotel booking apps delivered at Weblogic.",
            proof: "View the Weblogic roles",
          },
          legacy: {
            title: "Legacy Modernization",
            description: "Consolidation of per-client codebases into a single monorepo with a thin application per installation, and upgrades of legacy applications to a modern React stack.",
            proof: "View the monorepo case study",
          },
        },
        processTitle: "How an engagement works",
        process: {
          discovery: { title: "Discovery", text: "Requirements, users and existing systems reviewed together at the outset." },
          build: { title: "Build", text: "Delivery in small, reviewable increments, with progress visible from early on." },
          launch: { title: "Launch", text: "Deployment, data migration and a clean handover." },
          support: { title: "Support", text: "Fixes, new features and new installations after launch." },
        },
      },
      footer: {
        title: "Got a project? <gold>Let's talk.</gold>",
        tagline: "A short outline of the project and its timeline is enough to start. Email is the fastest way to get in touch.",
        cta: "Send an email",
        copy: "Copy email address",
        copied: "Copied to clipboard",
        location: "Thessaloniki, Greece",
        built: "Built with React, TypeScript & Tailwind CSS",
      },
    },
  },
  el: {
    translation: {
      seo: {
        title: "Κωνσταντίνος Οικονόμου | Frontend & Full-Stack Engineer",
        description: "Frontend & Full-Stack Engineer στη Θεσσαλονίκη. Web πλατφόρμες για δήμους, ερευνητικά ιδρύματα και δημόσιους φορείς, με React και Next.js.",
        shareDescription: "Web πλατφόρμες για δήμους, ερευνητικά ιδρύματα και δημόσιους φορείς, από React frontends έως full-stack εφαρμογές Next.js. 20+ εφαρμογές σε λειτουργία στην Ελλάδα.",
        locale: "el_GR",
        alternateLocale: "en_US",
      },
      nav: {
        work: "Έργα",
        projects: "Λοιπά έργα",
        experience: "Εμπειρία",
        skills: "Δεξιότητες",
        about: "Σχετικά",
        services: "Υπηρεσίες",
        contact: "Επικοινωνία",
      },
      hero: {
        name: "Κωνσταντίνος Οικονόμου",
        headline: "Frontend & <gold>Full-Stack</gold> Engineer",
        subhead: "Web πλατφόρμες για δήμους, ερευνητικά ιδρύματα και δημόσιους φορείς, από React frontends έως full-stack εφαρμογές Next.js.",
        stats: {
          deployments: "εφαρμογές σε λειτουργία",
          municipalities: "δήμοι",
        },
        cta: {
          primary: "Επιλεγμένα έργα",
          secondary: "Λήψη βιογραφικού",
        },
      },
      work: {
        title: "Επιλεγμένα Έργα",
        subtitle: "Αναλυτική ματιά στα σημαντικότερα έργα: η πρόκληση, ο ρόλος και οι βασικές συνεισφορές.",
        labels: {
          challenge: "Πρόκληση",
          role: "Ρόλος",
          built: "Βασικές συνεισφορές",
          installations: "Εγκαταστάσεις σε λειτουργία",
          internal: "Εσωτερικό σύστημα · απαιτείται σύνδεση",
          visit: "Επίσκεψη",
        },
        products: {
          cityEvents: "City Events",
          sync2mycity: "Sync2myCity",
          act4mycity: "Act4myCity",
        },
        cases: {
          patras: {
            kind: "Συντονισμός ομάδας · Το πιο αυστηρό deadline",
            title: "Κέντρο Διαλειτουργικότητας, Πάτρα",
            challenge: "Ένα μεγάλης κλίμακας δημοτικό dashboard με αισθητήρες, περιβάλλον, κινητικότητα, καθαριότητα, οικονομικά, αιτήματα και προβλέψεις ML, πάνω σε ήδη πολύπλοκο κώδικα και με το πιο αυστηρό deadline του portfolio.",
            role: "Συντονισμός μέρους της ομάδας και παρουσίαση της πλατφόρμας στον πελάτη κατά την αξιολόγηση.",
            built: [
              "Διάσπαση ενός πολύπλοκου τμήματος του κώδικα σε tasks με σαφείς στόχους και οδηγίες, για παράλληλη εργασία της ομάδας.",
              "Τήρηση του χρονοδιαγράμματος υπό το πιο αυστηρό deadline του portfolio.",
              "Παρουσίαση της πλατφόρμας στην αξιολόγηση του πελάτη, με ανάδειξη του πώς η υπάρχουσα λειτουργικότητα κάλυπτε ήδη πολλά από τα επιπλέον αιτήματα.",
              "Ανάπτυξη σε όλα τα modules της εφαρμογής με React, Ant Design, χάρτες Leaflet και MapLibre και Chart.js.",
            ],
          },
          vourla: {
            kind: "Full-stack · Next.js · Πλήρης ευθύνη",
            title: "Κέντρο Διαλειτουργικότητας, Καμένα Βούρλα",
            challenge: "Επανασχεδιασμός και νέα αρχιτεκτονική της πλατφόρμας KED από την αρχή, ως ενιαία full-stack εφαρμογή για τον Δήμο Καμένων Βούρλων, με μετρήσεις αισθητήρων και δημοτικά αρχεία από εξωτερικούς παρόχους.",
            role: "Πλήρης ευθύνη από άκρη σε άκρη: αρχιτεκτονική, μοντέλο δεδομένων, API, περιβάλλον χρήστη, testing και deployment.",
            built: [
              "Εφαρμογή Next.js (App Router) σε TypeScript, με PostgreSQL και PostGIS για ζώνες και τοποθεσίες.",
              "Data API με κλειδί ανά πάροχο· οι εισερχόμενες μετρήσεις δημιουργούν ειδοποιήσεις.",
              "Dashboards για περιβάλλον, κινητικότητα, απόβλητα και οικονομικά, με χάρτες και γραφήματα για τις πιο πρόσφατες μετρήσεις.",
              "Unit tests με Vitest και end-to-end tests με Playwright σε Chromium, Firefox και WebKit, σε απομονωμένη βάση δεδομένων.",
              "Deployment σε containers με Docker Compose πίσω από nginx.",
            ],
          },
          monorepo: {
            kind: "Monorepo · 3 προϊόντα · 10 εγκαταστάσεις",
            title: "Ένας κώδικας για κάθε δήμο",
            challenge: "Κάθε δήμος είχε το δικό του αντίγραφο της εφαρμογής, οπότε κάθε διόρθωση και λειτουργία έπρεπε να επαναληφθεί ανά εγκατάσταση, ενώ οι νέοι δήμοι έρχονταν με αυστηρά deadlines.",
            role: "Αρχιτεκτονική του Sync2myCity ως το πρώτο monorepo της εταιρείας, που ξεκίνησε τη μετάβαση από πολλά codebases σε ένα· το City Events και το Act4myCity ακολούθησαν το ίδιο μοντέλο.",
            built: [
              "Κοινό core package, με κάθε δήμο ως μια μικρή εφαρμογή με δικό της περιβάλλον, metadata σελίδας, κείμενα και λίγα αντικατεστημένα components.",
              "Override registry που επιτρέπει σε κάθε εγκατάσταση να αντικαθιστά components, χωρίς ο πυρήνας να γνωρίζει ποιον δήμο εξυπηρετεί.",
              "Κοινό Vite configuration, builds ανά εγκατάσταση και deployments με Bitbucket Pipelines.",
              "Παράδοση του City Events, καθώς και της μετάβασης του Act4myCity σε πολλαπλές εγκαταστάσεις, με πολύ αυστηρά deadlines.",
            ],
          },
          ekt: {
            kind: "Πλήρως custom UI · Ανοικτά δεδομένα",
            title: "Πλατφόρμα Ανοικτών Δεδομένων ΕΚΤ",
            challenge: "Δημόσιο frontend για τον κατάλογο ανοικτών δεδομένων CKAN του Εθνικού Κέντρου Τεκμηρίωσης, σε πλήρως custom σχεδιασμό και χωρίς έκθεση του write API του CKAN.",
            role: "Ανάπτυξη του frontend και του επιπέδου εξυπηρέτησης· καθιέρωσε την προσέγγιση custom components που υιοθετήθηκε στα επόμενα έργα.",
            built: [
              "Χωρίς UI library: κάθε component γραμμένο από την αρχή σε React 19 και απλό CSS, για ακριβή αντιστοίχιση με τον σχεδιασμό.",
              "Αναζήτηση και ανακάλυψη δεδομένων για την επιστήμη, τον πολιτισμό και την έρευνα πάνω στο CKAN API.",
              "Node proxy μπροστά από το CKAN, με το nginx να επιτρέπει αιτήματα ανάγνωσης και να μπλοκάρει τις εγγραφές.",
              "Docker setup που λειτουργεί δίπλα στο CKAN σε κοινό δίκτυο.",
            ],
          },
        },
      },
      places: {
        argostoli: "Αργοστόλι",
        oropos: "Ωρωπός",
        paionia: "Παιονία",
        kallithea: "Καλλιθέα",
        kozani: "Κοζάνη",
        konitsa: "Κόνιτσα",
        pydna: "Πύδνα",
        veroia: "Βέροια",
        kalamaria: "Καλαμαριά",
        centralMacedonia: "Κεντρική Μακεδονία",
      },
      projects: {
        title: "Λοιπά Έργα",
        subtitle: "Επιπλέον πλατφόρμες και ιστότοποι, καθώς και ανεξάρτητη δουλειά.",
        sideLabel: "Ανεξάρτητη δουλειά",
        source: "Δείτε στο GitHub",
        viewAll: "Περισσότερα στο GitHub",
        items: {
          smartCity: {
            title: "Πλατφόρμα Έξυπνης Πόλης",
            description: "Δημόσια dashboards πόλης για πέντε δήμους, με ζωντανά δεδομένα από μετεωρολογικούς σταθμούς, έξυπνους κάδους, WiFi hotspots, κατανάλωση ενέργειας και άλλους αισθητήρες.",
          },
          pkm: {
            title: "Περιφέρεια Κεντρικής Μακεδονίας (ΠΚΜ)",
            description: "Πύλη ηλεκτρονικών υπηρεσιών της Περιφέρειας Κεντρικής Μακεδονίας για τους πολίτες, με ψηφιακές υπηρεσίες και ηλεκτρονικές αιτήσεις.",
          },
          tremorWatch: {
            title: "Tremor Watch Τρίκαλα",
            description: "Παρακολούθηση σεισμικής δραστηριότητας σε πραγματικό χρόνο και ειδοποιήσεις κοινού για τον Δήμο Τρικκαίων.",
          },
          menr: {
            title: "MENR Αζερμπαϊτζάν (FAO)",
            description: "Ενιαία εικόνα των ειδικά προστατευόμενων φυσικών περιοχών του Αζερμπαϊτζάν για το Υπουργείο Οικολογίας και Φυσικών Πόρων: περιβαλλοντικά δεδομένα, ψηφιακή βιβλιοθήκη και χάρτες GIS.",
          },
          knossos: {
            title: "Ανάκτορο Κνωσού",
            description: "Ψηφιακός οδηγός περιήγησης στο Ανάκτορο της Κνωσού και στους αρχαιολογικούς χώρους του Ηρακλείου, με χάρτες, διαδρομές και χρονολόγιο σε πέντε γλώσσες.",
          },
          eata: {
            title: "Αναπτυξιακή Αθήνας (ΕΑΤΑ)",
            description: "Πρόγραμμα δωρεάν ψηφιακών εργαλείων για επιχειρήσεις της Αθήνας: αιτήσεις, υποβολή δικαιολογητικών και παρακολούθηση αποτελεσμάτων, με αυθεντικοποίηση μέσω TaxisNet.",
          },
          tee: {
            title: "Τεχνικό Επιμελητήριο Ελλάδας (ΤΕΕ)",
            description: "Ψηφιακό αποθετήριο της προβιομηχανικής και βιομηχανικής κληρονομιάς της Δωδεκανήσου, για το Τμήμα Δωδεκανήσου του ΤΕΕ.",
          },
          academyAthens: {
            title: "Ακαδημία Αθηνών",
            description: "Το ψηφιακό αποθετήριο της Ακαδημίας και οι ιστότοποι δύο ερευνητικών κέντρων της: ΚΕΝΔΙ (νεοελληνικές διάλεκτοι) και ΚΕΦΑΚ (φυσική της ατμόσφαιρας και κλιματολογία).",
          },
          apokorona: {
            title: "Μουσεία Αποκορώνου",
            description: "Διαδικτυακή πύλη για τα μουσεία του Δήμου Αποκορώνου στην Κρήτη, με τα εκθέματά τους και την πολιτιστική κληρονομιά της περιοχής.",
          },
        },
        side: {
          endofdawn: {
            kind: "Ιστοσελίδα · Μουσική",
            title: "End of Dawn",
            description: "Η επίσημη ιστοσελίδα ενός symphonic gothic black metal συγκροτήματος από τη Θεσσαλονίκη: μουσική, συναυλίες, κατάστημα merchandise και press kit, σε τέσσερις γλώσσες.",
          },
          gemluxury: {
            kind: "Ιστοσελίδα · Φιλοξενία",
            title: "Gem Rooms Luxury Apartments",
            description: "Δίγλωσση ιστοσελίδα για ενοικίαση πολυτελών διαμερισμάτων, με παρουσίαση δωματίων και τοποθεσίας και ενσωματωμένο εργαλείο προσβασιμότητας.",
          },
          thesis: {
            kind: "Open source · Διπλωματική",
            title: "Anomaly Detection in Autonomous Driving Agents Using World Models",
            description: "Σύστημα παρακολούθησης ασφάλειας δύο επιπέδων για πράκτορες οδήγησης DreamerV3 στο CARLA: ένα CNN εντοπίζει εμπόδια συγκρίνοντας πραγματικά και «φανταστικά» καρέ, ενώ ένας KL monitor σημαίνει συναγερμό όταν το world model παύει να ταιριάζει με το περιβάλλον.",
          },
        },
      },
      experience: {
        title: "Επαγγελματική Πορεία",
        subtitle: "Ψηφιακά προϊόντα σε δημόσιο και ιδιωτικό τομέα",
        current: "Τρέχουσα",
        earlier: "Προηγούμενες θέσεις",
        cv: "Λήψη βιογραφικού",
        companies: {
          dotsoft: { name: "Dotsoft", period: "Μάι 2024 - Παρόν" },
          weblogic: { name: "Weblogic", period: "Σεπ 2022 - Μάι 2024" },
          instashop: { name: "Instashop", period: "Ιαν 2022 - Μαρ 2022" },
          renvis: { name: "Renvis", period: "Ιούλ 2021 - Σεπ 2021" },
        },
        roles: {
          dotsoftSenior: {
            title: "Senior Developer",
            period: "2026 - Παρόν",
            points: [
              "Ηγεσία της μετάβασης από ένα codebase ανά εγκατάσταση σε αρχιτεκτονική monorepo, που σήμερα εξυπηρετεί 10 εγκαταστάσεις των Sync2myCity, City Events και Act4myCity, με παράδοση υπό πολύ αυστηρά deadlines.",
              "Επανασχεδιασμός και νέα αρχιτεκτονική της πλατφόρμας διαλειτουργικότητας KED ως full-stack εφαρμογή Next.js, με πλήρη ευθύνη για αρχιτεκτονική, μοντέλο δεδομένων, API, testing και deployment.",
              "Συντονισμός μέρους της ομάδας του KED Πάτρας υπό το πιο αυστηρό deadline του portfolio, με ορισμό tasks με σαφείς στόχους και εκπροσώπηση της πλατφόρμας στην αξιολόγηση του πελάτη.",
            ],
          },
          dotsoftMidSenior: {
            title: "Mid-Senior Developer",
            period: "Μάι 2025 - 2026",
            points: [
              "Παράδοση της πλατφόρμας ανοικτών δεδομένων του ΕΚΤ με πλήρως custom interface (React και απλό CSS, χωρίς UI library), που καθόρισε την προσέγγιση των επόμενων έργων.",
              "Παράδοση δημοτικών πλατφορμών για πολίτες, όπως δίκτυο εθελοντισμού και παρακολούθηση σεισμικής δραστηριότητας σε πραγματικό χρόνο με ειδοποιήσεις κοινού.",
            ],
          },
          dotsoftMid: {
            title: "Mid-Level Developer",
            period: "Μάι 2024 - Μάι 2025",
            points: [
              "Ανάπτυξη και συντήρηση web εφαρμογών για δημόσιους φορείς και οργανισμούς, όπως η Ακαδημία Αθηνών, η Περιφέρεια Κεντρικής Μακεδονίας και το Υπουργείο Οικολογίας και Φυσικών Πόρων του Αζερμπαϊτζάν.",
              "Ψηφιακά αποθετήρια, ιστότοποι ερευνητικών κέντρων και admin panels σε React, Redux Toolkit, Bootstrap και Ant Design.",
            ],
          },
          weblogicLead: {
            title: "Lead Developer",
            period: "Ιούν 2023 - Μάι 2024",
            points: [
              "Ηγεσία της frontend ανάπτυξης τριών mobile εφαρμογών React Native: Bus Driver, Bus Passenger και Hotel Booking.",
              "Μετατροπή των απαιτήσεων των πελατών σε οριοθετημένα tasks και κατανομή του φόρτου εργασίας στην ομάδα.",
              "Εισαγωγή και καθοδήγηση νέων μελών της ομάδας.",
              "Ευθύνη για version control και διασφάλιση ποιότητας.",
            ],
          },
          weblogicFrontend: {
            title: "Frontend Developer",
            period: "Σεπ 2022 - Μάι 2024",
            points: [
              "Ανάπτυξη πλατφόρμας δημιουργίας και διαχείρισης chatbots για ξενοδοχεία και ταξιδιωτικά γραφεία.",
              "Ανάπτυξη του ενσωματώσιμου chat widget και των εξειδικευμένων components του.",
              "Μετατροπή επιχειρησιακών απαιτήσεων σε ενημερώσεις της πλατφόρμας.",
            ],
          },
          instashop: {
            title: "Full Stack Engineer",
            period: "Ιαν 2022 - Μαρ 2022",
            summary: "Full-stack ανάπτυξη και υποστήριξη, με αναβαθμίσεις legacy έργων και διαχείριση δεδομένων πελατών, σε διεθνή ομάδα.",
          },
          renvis: {
            title: "Full Stack Intern",
            period: "Ιούλ 2021 - Σεπ 2021",
            summary: "Συμμετοχή στην ανάπτυξη εφαρμογής διαχείρισης ακαδημίας μπάσκετ, από τον σχεδιασμό έως την παραγωγή.",
          },
        },
      },
      expertise: {
        title: "Τεχνική Εξειδίκευση",
        subtitle: "Οι βασικές τεχνολογίες καθημερινής χρήσης, μαζί με εργαλεία από προηγούμενα έργα και την έρευνα.",
        groups: {
          frontend: { title: "Frontend", caption: "Κύρια εστίαση" },
          mobile: { title: "Mobile", caption: "Cross-platform εφαρμογές για iOS και Android" },
          backend: { title: "Backend & Δεδομένα", caption: "APIs και δεδομένα πίσω από το interface" },
          workflow: { title: "Workflow & Εργαλεία", caption: "Σχεδιασμός, παράδοση και εργαλεία" },
          other: { title: "Επιπλέον εμπειρία", caption: "Παλαιότερα frameworks και γλώσσες από το πανεπιστήμιο και την έρευνα" },
        },
      },
      about: {
        title: "Σχετικά",
        bio: "Frontend & Full-Stack Engineer με έδρα τη Θεσσαλονίκη, με αντικείμενο την ανάπτυξη πλατφορμών για δήμους και δημόσιους φορείς στη Dotsoft: dashboards έξυπνης πόλης, υπηρεσίες για πολίτες, πύλες ανοικτών δεδομένων και ψηφιακά αποθετήρια, σε χρήση σε περισσότερους από 15 δήμους και σε φορείς όπως η Ακαδημία Αθηνών και το Εθνικό Κέντρο Τεκμηρίωσης.",
        background: "Σπουδές Πληροφορικής στο Αριστοτέλειο Πανεπιστήμιο Θεσσαλονίκης, με διπλωματική εργασία στην ανίχνευση ανωμαλιών σε πράκτορες αυτόνομης οδήγησης με χρήση world models.",
        interests: "Εκτός εργασίας: μουσική (εκτέλεση και σύνθεση), πολεμικές τέχνες, ζυθοποιία και μαγειρική, και χειροτεχνίες.",
        educationLabel: "Σπουδές",
        degree: "Πληροφορική",
        university: "Αριστοτέλειο Πανεπιστήμιο Θεσσαλονίκης",
        thesisLink: "Αποθετήριο διπλωματικής",
        programmesLabel: "Επιχειρηματικά προγράμματα",
        programmes: [
          "NGB Business Seeds, 14ος Διαγωνισμός Καινοτομίας και Τεχνολογίας (2023)",
          "OkThess!, πρόγραμμα επιτάχυνσης, 14ος κύκλος (2021)",
        ],
        certificationsLabel: "Πιστοποιήσεις",
        verify: "Επαλήθευση",
        certs: {
          pm2: { title: "PM² Agile Certification", issuer: "PM² Alliance", date: "2026" },
          react: { title: "React - The Complete Guide (incl. Next.js, Redux)", issuer: "Udemy · Academind", date: "2026" },
          gdpr: { title: "GDPR - Γενικός Κανονισμός Προστασίας Δεδομένων", issuer: "Sphynx", date: "2026" },
          ai: { title: "Εφαρμογές Τεχνητής Νοημοσύνης στο Business Marketing & Management", issuer: "GlobalCert · διαπίστευση ΕΣΥΔ", date: "2025" },
        },
      },
      services: {
        title: "Υπηρεσίες",
        subtitle: "Υπηρεσίες για οργανισμούς με παρόμοιες ανάγκες και ο τρόπος που εξελίσσεται μια συνεργασία.",
        items: {
          webDev: {
            title: "Ανάπτυξη Web Εφαρμογών",
            description: "Dashboards, ψηφιακά αποθετήρια, admin panels και πύλες πολιτών, από React frontends έως full-stack εφαρμογές Next.js με PostgreSQL και PostGIS.",
            proof: "Δείτε το έργο στα Καμένα Βούρλα",
          },
          mobile: {
            title: "Mobile Εφαρμογές",
            description: "Cross-platform εφαρμογές iOS και Android με React Native, όπως οι εφαρμογές Bus Driver, Bus Passenger και Hotel Booking που παραδόθηκαν στη Weblogic.",
            proof: "Δείτε τις θέσεις στη Weblogic",
          },
          legacy: {
            title: "Εκσυγχρονισμός Legacy Συστημάτων",
            description: "Ενοποίηση ξεχωριστών codebases ανά πελάτη σε ένα monorepo με μια μικρή εφαρμογή ανά εγκατάσταση και αναβάθμιση legacy εφαρμογών σε σύγχρονο React stack.",
            proof: "Δείτε το έργο monorepo",
          },
        },
        processTitle: "Πώς εξελίσσεται μια συνεργασία",
        process: {
          discovery: { title: "Ανάλυση", text: "Από κοινού επισκόπηση απαιτήσεων, χρηστών και υπαρχόντων συστημάτων από την αρχή." },
          build: { title: "Υλοποίηση", text: "Παράδοση σε μικρά, ελέγξιμα βήματα, με ορατή πρόοδο από νωρίς." },
          launch: { title: "Παράδοση", text: "Deployment, μεταφορά δεδομένων και ομαλή παράδοση." },
          support: { title: "Υποστήριξη", text: "Διορθώσεις, νέες λειτουργίες και νέες εγκαταστάσεις μετά την παράδοση." },
        },
      },
      footer: {
        title: "Έχετε ένα έργο; <gold>Ας μιλήσουμε.</gold>",
        tagline: "Μια σύντομη περιγραφή του έργου και του χρονοδιαγράμματος αρκεί για να ξεκινήσουμε. Ο πιο γρήγορος τρόπος επικοινωνίας είναι το email.",
        cta: "Αποστολή email",
        copy: "Αντιγραφή διεύθυνσης email",
        copied: "Αντιγράφηκε",
        location: "Θεσσαλονίκη, Ελλάδα",
        built: "Φτιαγμένο με React, TypeScript & Tailwind CSS",
      },
    },
  },
};
