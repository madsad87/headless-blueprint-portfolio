/**
 * Global application config file
 */
const appConfig = {
  /**
   * The number of posts to fetch per 'page'.
   */
  postsPerPage: 9,

  /**
   * The number of projects to fetch per 'page'.
   */
  projectsPerPage: 5,

  /**
   * The number of post featured images that are above the fold for most screen sizes.
   * These images will be considered high priority and preloaded.
   */
  postsAboveTheFold: 6,

  /**
   * The number of project featured images that are above the fold for most screen sizes.
   * These images will be considered high priority and preloaded.
   */
  projectsAboveTheFold: 3,

  /**
   * Displays a default Featured Image when a Post does not have one.
   */
  archiveDisplayFeaturedImage: true,

  /**
   * This app's primary color.
   * @see {@link https://github.com/wpengine/atlas-blueprint-portfolio/blob/main/src/components/ThemeStyles/ThemeStyles.js}
   */
  themeColor: 'earth',

  /**
   * Portfolio content defaults for hero + expertise.
   */
  portfolioIntroLabel: 'Available for new projects',
  portfolioHeadline: 'Architecting Digital Intelligence',
  portfolioSubhead:
    'Specializing in WordPress cloud hosting, Cloudflare optimization, headless development, and agentic solution design for modern teams.',
  portfolioStats: [
    {
      label: 'Uptime',
      value: '99.99%',
      description: 'High-availability WP hosting',
    },
    {
      label: 'Projects',
      value: '50+',
      description: 'Cloud and headless launches',
    },
    {
      label: 'Edge Performance',
      value: '<150ms',
      description: 'Global caching + WAF',
    },
  ],
  expertiseIntro:
    'Mastering the intersection of infrastructure, automation, and intelligent agents.',
  expertiseAreas: [
    {
      title: 'WordPress Cloud Hosting',
      description:
        'Resilient multi-region hosting stacks with observability, backups, and auto-scaling.',
    },
    {
      title: 'Cloudflare Utilization',
      description:
        'Edge caching, WAF hardening, and DNS automation for secure performance gains.',
    },
    {
      title: 'Headless Development',
      description:
        'Faust.js, WPGraphQL, and modern front-end systems for fast, flexible CMS delivery.',
    },
    {
      title: 'Agentic Solution Design',
      description:
        'Workflow orchestration, AI agents, and toolchains that streamline content and ops.',
    },
  ],

  /**
   * @type {[key: 'twitterUrl' | 'facebookUrl' | 'instagramUrl' | 'youtubeUrl' | 'githubUrl' | 'linkedinUrl']: string}
   */
  socialLinks: {
    twitterUrl: 'https://twitter.com/wpengine',
    facebookUrl: 'https://www.facebook.com/wpengine',
    instagramUrl: 'https://www.instagram.com/wpengine/',
    youtubeUrl: 'https://youtube.com/wpengine',
    githubUrl: 'https://github.com/wpengine',
    linkedinUrl: 'https://www.linkedin.com/company/wpengine',
  },
  siteTitle: 'Blueprint Portfolio',
  footerNote: 'Built with WordPress, Cloudflare, and headless architecture.',
};

export default appConfig;
