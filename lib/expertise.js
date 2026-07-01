export const EXPERTISE_ITEMS = [
    {
        title: 'Brand Building',
        slug: 'brand-building',
        kicker: 'Positioning / Identity / Trust',
        summary:
            'Build a brand system with a clear story, premium positioning, visual direction, and launch-ready assets.',
        description:
            'From raw idea to market-facing brand, Rajnish shapes the core offer, naming direction, audience clarity, positioning, and creative system so every touchpoint feels intentional.',
        image: 'https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?auto=format&fit=crop&w=1400&q=85',
        accent: 'Brand DNA',
        metrics: ['Positioning', 'Identity', 'Launch Assets'],
        outcomes: [
            'Founder story and category positioning',
            'Brand voice, offer architecture, and visual direction',
            'Launch-ready website, content, and authority assets',
        ],
    },
    {
        title: 'Manufacturing Consultancy',
        slug: 'manufacturing-consultancy',
        kicker: 'Vendors / Production / Quality',
        summary:
            'Connect product ambition with practical manufacturing decisions, vendor clarity, costing, and production flow.',
        description:
            'Rajnish helps founders understand the production path before they spend heavily: supplier fit, MOQ realities, packaging dependencies, quality control, and launch feasibility.',
        image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1400&q=85',
        accent: 'Production Map',
        metrics: ['Vendor Fit', 'Costing', 'QC Flow'],
        outcomes: [
            'Manufacturing roadmap and vendor shortlisting',
            'Packaging, procurement, and production planning',
            'Quality checkpoints for reliable launch execution',
        ],
    },
    {
        title: 'Formulation Development',
        slug: 'formulation-development',
        kicker: 'Perfume / Cosmetic / Ayurveda',
        summary:
            'Develop product concepts into stable, desirable, market-ready formulations with category fit.',
        description:
            'This track connects sensory direction, ingredient understanding, product claims, stability expectations, and customer experience into a formulation workflow founders can actually execute.',
        image: 'https://images.unsplash.com/photo-1518152006812-edab29b069ac?auto=format&fit=crop&w=1400&q=85',
        accent: 'Lab to Launch',
        metrics: ['Concept', 'Stability', 'Sampling'],
        outcomes: [
            'Product brief, fragrance profile, and sample direction',
            'Ingredient, claim, and category-fit guidance',
            'Testing and iteration process before production',
        ],
    },
    {
        title: 'Legal & Business Support',
        slug: 'legal-business-support',
        kicker: 'Structure / Compliance / Readiness',
        summary:
            'Prepare the business side of the launch with registration, compliance direction, documents, and operating clarity.',
        description:
            'Founders get a practical view of what must be ready before going public: business structure, compliance dependencies, vendor agreements, documentation, and market-entry basics.',
        image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1400&q=85',
        accent: 'Launch Ready',
        metrics: ['Compliance', 'Docs', 'Setup'],
        outcomes: [
            'Business registration and operating structure guidance',
            'Compliance roadmap for product category and market',
            'Vendor, documentation, and launch-risk checklist',
        ],
    },
    {
        title: 'Sales & Growth Systems',
        slug: 'sales-growth-systems',
        kicker: 'Funnels / Acquisition / Scale',
        summary:
            'Install practical systems for lead generation, sales conversion, channel growth, and repeatable campaigns.',
        description:
            'Instead of scattered promotion, Rajnish helps brands build the offer, funnel, channel plan, content rhythm, and conversion assets needed for measurable growth.',
        image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1400&q=85',
        accent: 'Growth Engine',
        metrics: ['Funnels', 'Channels', 'Sales'],
        outcomes: [
            'Lead-generation and conversion funnel planning',
            'Sales scripts, landing pages, and campaign structure',
            'Channel roadmap for paid, organic, and partnership growth',
        ],
    },
    {
        title: 'Hero Launch Systems',
        slug: 'hero-launch-systems',
        kicker: 'Strategy / Execution / Momentum',
        summary:
            'Turn the full launch into a coordinated system: product, brand, operations, legal, sales, and growth working together.',
        description:
            'This is the complete launch layer for founders who need the whole system planned together, with priorities, timelines, decision checkpoints, and execution rhythm.',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=85',
        accent: 'Full Stack Launch',
        metrics: ['Roadmap', 'Execution', 'Scale'],
        outcomes: [
            'End-to-end launch roadmap and accountability rhythm',
            'Brand, product, operations, and growth alignment',
            'Founder decision system for faster market movement',
        ],
    },
];

export const getExpertiseBySlug = (slug) => EXPERTISE_ITEMS.find((item) => item.slug === slug);