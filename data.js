const newsData = {
    home: Array.from({ length: 16 }, (_, i) => ({
        id: i,
        tag: 'Trending',
        title: `Next-Gen AI Chips Are Changing the Computing Landscape ${i + 1}`,
        description: 'Explore how new chipset architectures are revolutionizing machine learning efficiency.',
        img: `https://picsum.photos/seed/home${i}/800/600.webp`
    })),
    news: [
        { id: 1, tag: 'Bio-AI', title: 'Generative AI Redesigning Cellular Pathways for Carbon Sequestration', description: 'Exploring the latest breakthroughs in synthetic neural models applied to climate-resilient biology.', img: 'https://picsum.photos/seed/bioai/800/600.webp' },
        { id: 2, tag: 'Breaking', title: 'Global Tech Summit 2026: The Rise of Biological Computing', description: 'Computing pioneers gather to discuss the ethical boundaries of integrating wetware with silicon.', img: 'https://picsum.photos/seed/summit/800/600.webp' },
        { id: 3, tag: 'Clinical', title: 'Phase III Trials Reveal AI-Optimized Personalized Cancer Therapies', description: 'Machine learning algorithms reduce treatment side effects by 40% in recent clinical breakthroughs.', img: 'https://picsum.photos/seed/clinical/800/600.webp' },
        { id: 4, tag: 'Synthetic', title: 'Stackly Labs Announces Milestone in Synthetic Organoid Diagnostics', description: 'Our latest R&D milestone paves the way for non-invasive real-time biological data tracking.', img: 'https://picsum.photos/seed/stacklylab/800/600.webp' },
        { id: 5, tag: 'Quantum', title: 'Quantum Sensors Achieving Single-Cell Resolution in Live Imaging', description: 'A massive leap in diagnostic clarity as quantum interference patterns map intracellular activity.', img: 'https://picsum.photos/seed/quantum/800/600.webp' },
        { id: 6, tag: 'Data', title: 'Securing the Bio-Economy: AI Defense Against Genomic Data Leaks', description: 'New cryptographic layers are protecting the integrity of global population-scale health datasets.', img: 'https://picsum.photos/seed/data/800/600.webp' },
        { id: 7, tag: 'Robotics', title: 'Nanoscale Swarm Robots Delivering Targeted Therapeutics in Vivo', description: 'Micro-robotic fleets are navigating complex vascular environments to deliver precise drug payloads.', img: 'https://picsum.photos/seed/robotics/800/600.webp' },
        { id: 8, tag: 'Future', title: 'The 2030 Roadmap: Integrating DNA-Storage into Enterprise Data Centers', description: 'What happens when biological storage capacity exceeds traditional magnetic and solid-state limits?', img: 'https://picsum.photos/seed/storage/800/600.webp' },
        { id: 9, tag: 'Trending', title: 'Consumer Bio-Wearables Shift from Step-Tracking to Real-Time Labs', description: 'The next generation of wrist-worn tech includes microfluidic sensors for blood-gas analysis.', img: 'https://picsum.photos/seed/wearable/800/600.webp' },
        { id: 10, tag: 'Ethics', title: 'Global Collaborative Framework Proposed for AI-Regulated Bio-Engineering', description: 'Leaders call for a unified ethics protocol for autonomous genetic interventions at the Salem Summit.', img: 'https://picsum.photos/seed/ethics/800/600.webp' },
        { id: 11, tag: 'Discovery', title: 'Ancient Viral DNA Repurposed as High-Efficiency Gene-Editing Vectors', description: 'Researchers successfully harness 100,000-year-old viral sequences for non-toxic gene delivery.', img: 'https://picsum.photos/seed/ancient/800/600.webp' },
        { id: 12, tag: 'Tech-Bio', title: 'Modular CRISPR Toolkits: The App Store Approach to Rapid Prototyping', description: 'How democratized access to genetic editing libraries is accelerating global biotech startups.', img: 'https://picsum.photos/seed/crispr/800/600.webp' },
        { id: 13, tag: 'Intelligence', title: 'Living Computer: Silicon-Protein Hybrid Logic Gates Achieve High Clock speeds', description: 'Engineers achieve a 1GHz barrier in a hybrid computing model utilizing stabilized neural proteins.', img: 'https://picsum.photos/seed/proteinlogic/800/600.webp' },
        { id: 14, tag: 'Space-Bio', title: 'Zero-G Protein Crystallography: High-Resolution Insights from the ISS', description: 'Recent breakthroughs in low-gravity protein growth reveal new targets for drug discovery.', img: 'https://picsum.photos/seed/zerog/800/600.webp' },
        { id: 15, tag: 'Eco-Tech', title: 'Real-Time Forest-Scale Genomic Monitoring deployed in the Amazon', description: 'Autonomous sensor networks are tracking real-time biodiversity shifts at a molecular level.', img: 'https://picsum.photos/seed/amazon/800/600.webp' },
        { id: 16, tag: 'Neuro-Link', title: 'Wireless Neural Interface Achieves High-Bandwidth Motor Control', description: 'The latest non-invasive headband allows users to control complex robotic systems with near-zero latency.', img: 'https://picsum.photos/seed/neurolink/800/600.webp' },
        { id: 17, tag: 'Defense', title: 'AI-Powered Bio-Security: Detecting Synthetic Pathogens in Real-Time', description: 'Global security agencies deploy first-of-their-kind rapid response genomic sequence scanners.', img: 'https://picsum.photos/seed/defense/800/600.webp' },
        { id: 18, tag: 'Materials', title: 'Bio-Fabricated Graphene: Utilizing Bacteria to Scale Super-Material Production', description: 'New bacterial strains are being engineered to secrete high-purity graphene flakes at scale.', img: 'https://picsum.photos/seed/graphene/800/600.webp' },
        { id: 19, tag: 'Energy', title: 'Photosynthetic Bio-Photovoltaics: Powering Remote Sensors with Algae', description: 'Algae-based fuel cells are achieving record-high conversion efficiencies in low-light environments.', img: 'https://picsum.photos/seed/algae/800/600.webp' },
        { id: 20, tag: 'Pharma', title: 'Automated Microfluidic Labs Accelerating Drug Discovery by 500%', description: 'How miniature laboratories-on-a-chip are performing millions of experiments per hour.', img: 'https://picsum.photos/seed/labchip/800/600.webp' },
        { id: 21, tag: 'Robo-Bio', title: 'Soft Robotic Exoskeletons Powered by Synthetic Muscle Fibers', description: 'High-strength synthetic fibers are providing new levels of mobility for individuals with spinal injuries.', img: 'https://picsum.photos/seed/muscle/800/600.webp' },
        { id: 22, tag: 'Security', title: 'Blockchain-Verified Genomic Passports: The Final Frontier of Privacy', description: 'Securing the world’s genetic heritage through immutable decentralized verification layers.', img: 'https://picsum.photos/seed/genomicpass/800/600.webp' }
    ],
    about: Array.from({ length: 16 }, (_, i) => ({
        id: i,
        tag: 'Company',
        title: `Stackly Milestone: Our Journey in Tech Journalism ${i + 1}`,
        description: 'How we became the leading source for technology insights worldwide.',
        img: `https://picsum.photos/seed/about${i}/800/600.webp`
    })).filter(item => ![5, 6, 8, 9].includes(item.id)), // Removed unwanted placeholders 6, 7, 9, and 10
    service: Array.from({ length: 16 }, (_, i) => ({
        id: i,
        tag: 'Services',
        title: `Enterprise Tech Consulting: Scaling with AI ${i + 1}`,
        description: 'Building custom solutions for the modern digital era.',
        img: `https://picsum.photos/seed/service${i}/800/600.webp`
    })).filter(item => ![0, 1, 2, 3, 8, 9, 10, 11].includes(item.id)), // Removed unwanted mountain/mug placeholders
    contact: Array.from({ length: 16 }, (_, i) => ({
        id: i,
        tag: 'Support',
        title: `Global Support Centers: 24/7 Tech Coverage ${i + 1}`,
        description: 'Our team is ready to help you navigate complex tech challenges.',
        img: `https://picsum.photos/seed/contact${i}/800/600.webp`
    })).filter(item => ![0, 1, 2, 3, 8, 9, 10, 11, 12, 13, 14, 15].includes(item.id)), // Removed unwanted non-tech support placeholders
    trends: Array.from({ length: 16 }, (_, i) => ({
        id: i,
        tag: 'Trends',
        title: `The Rise of Neural Networks in Consumer Electronics ${i + 1}`,
        description: 'Smart devices are getting smarter with edge-side AI integration.',
        img: `https://picsum.photos/seed/trends${i}/800/600.webp`
    })),
    technology: Array.from({ length: 16 }, (_, i) => ({
        id: i,
        tag: 'Tech',
        title: `Blockchain Beyond Crypto: Securing the Internet of Things ${i + 1}`,
        description: 'Decentralized ledgers are finding new life in IoT security protocols.',
        img: `https://picsum.photos/seed/tech${i}/800/600.webp`
    })),
    innovations: Array.from({ length: 16 }, (_, i) => ({
        id: i,
        tag: 'Innovation',
        title: `Graphene Superconductors: The Future of Energy Storage ${i + 1}`,
        description: 'New materials are slashing battery charging times by 90%.',
        img: `https://picsum.photos/seed/inno${i}/800/600.webp`
    })),
    future: Array.from({ length: 16 }, (_, i) => ({
        id: i,
        tag: 'Future',
        title: `Predicting the 2030 Tech Landscape: Post-Quantum World ${i + 1}`,
        description: 'What happens when computing power exceeds our wildest dreams?',
        img: `https://picsum.photos/seed/future${i}/800/600.webp`
    })),
    security: Array.from({ length: 16 }, (_, i) => ({
        id: i,
        tag: 'Security',
        title: `Cybersecurity in the Era of Autonomous Systems ${i + 1}`,
        description: 'Protecting neural pathways from malicious actor interventions.',
        img: `https://picsum.photos/seed/sec${i}/800/600.webp`
    }))
};

window.newsData = newsData;
