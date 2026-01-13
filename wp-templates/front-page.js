import * as MENUS from 'constants/menus';

import { useQuery, gql } from '@apollo/client';
import { FaArrowRight } from 'react-icons/fa';
import styles from 'styles/pages/_Home.module.scss';
import appConfig from 'app.config';
import {
  Main,
  Button,
  Heading,
  CTA,
  NavigationMenu,
  SEO,
  Header,
  Footer,
  Posts,
  Projects,
  Testimonials,
  FeaturedImage,
} from 'components';
import { BlogInfoFragment } from 'fragments/GeneralSettings';

const postsPerPage = 3;
const projectsPerPage = 3;

export default function Component() {
  const { data, loading } = useQuery(Component.query, {
    variables: Component.variables(),
  });
  if (loading) {
    return null;
  }

  const { title: siteTitle, description: siteDescription } =
    data?.generalSettings;
  const primaryMenu = data?.headerMenuItems?.nodes ?? [];
  const footerMenu = data?.footerMenuItems?.nodes ?? [];
  const frontPage = data?.frontPage;
  const heroTitle = frontPage?.title ?? appConfig.portfolioHeadline ?? siteTitle;
  const heroDescription =
    frontPage?.content ?? appConfig.portfolioSubhead ?? siteDescription;
  const heroImage = frontPage?.featuredImage?.node;

  return (
    <>
      <SEO title={siteTitle} description={siteDescription} />

      <Header
        title={siteTitle}
        description={siteDescription}
        menuItems={primaryMenu}
      />

      <Main className={styles.home}>
        <section className={styles.hero}>
          <div className="container">
            <div className={styles.heroGrid}>
              <div className={styles.heroContent}>
                <span className={styles.heroBadge}>
                  {appConfig.portfolioIntroLabel}
                </span>
                <Heading className={styles.heroTitle} level="h1">
                  {heroTitle}
                </Heading>
                <div
                  className={styles.heroDescription}
                  dangerouslySetInnerHTML={{ __html: heroDescription ?? '' }}
                />
                <div className={styles.actions}>
                  <Button styleType="primary" href="/projects">
                    View My Work
                  </Button>
                  <Button styleType="secondary" href="/contact-us">
                    Contact Me
                  </Button>
                </div>
              </div>
              <div className={styles.heroVisualPanel}>
                <div className={styles.heroVisual}>
                  <div className={styles.heroCards}>
                    {appConfig.portfolioStats.map((stat) => (
                      <div key={stat.label} className={styles.statCard}>
                        <p className={styles.statLabel}>{stat.label}</p>
                        <p className={styles.statValue}>{stat.value}</p>
                        <p className={styles.statNote}>{stat.description}</p>
                      </div>
                    ))}
                  </div>
                  <div className={styles.terminalCard}>
                    <span className={styles.terminalPrompt}>&gt;</span>
                    <span> initializing_agent…</span>
                    <span className={styles.terminalAccent}>
                      &gt; edge_optimization_complete
                    </span>
                  </div>
                  {heroImage && (
                    <div className={styles.heroImage}>
                      <FeaturedImage image={heroImage} priority />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.expertise}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <Heading level="h2">Technical Expertise</Heading>
              <p>{appConfig.expertiseIntro}</p>
            </div>
            <div className={styles.expertiseGrid}>
              {appConfig.expertiseAreas.map((area) => (
                <article key={area.title} className={styles.expertiseCard}>
                  <Heading level="h3">{area.title}</Heading>
                  <p>{area.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.projects}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <Heading level="h2">Featured Projects</Heading>
              <p>
                A selection of headless builds, infrastructure upgrades, and
                automation wins.
              </p>
            </div>
            <Projects projects={data.projects?.nodes ?? []} id="projects-list" />
          </div>
        </section>

        <section className={styles.ctaSection}>
          <div className="container">
            <CTA
              Button={() => (
                <Button href="/posts">
                  View Insights <FaArrowRight style={{ marginLeft: `1rem` }} />
                </Button>
              )}
            >
              <span>
                Read strategies on Core Web Vitals, edge caching, and headless
                architecture built for resilient WordPress stacks.
              </span>
            </CTA>
          </div>
        </section>

        <section className={styles.posts}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <Heading level="h2">Latest Insights</Heading>
              <p>Thought leadership on scaling WordPress beyond the monolith.</p>
            </div>
            <Posts posts={data.posts?.nodes} id="posts-list" />
          </div>
        </section>

        <section className={styles.testimonials}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <Heading level="h2">Testimonials</Heading>
              <p>Trusted by teams modernizing their WordPress stacks.</p>
            </div>
            <Testimonials testimonials={data?.testimonials?.nodes} />
          </div>
        </section>
      </Main>
      <Footer title={siteTitle} menuItems={footerMenu} />
    </>
  );
}

Component.variables = () => {
  return {
    headerLocation: MENUS.PRIMARY_LOCATION,
    footerLocation: MENUS.FOOTER_LOCATION,
    first: postsPerPage,
    projectsFirst: projectsPerPage,
  };
};

Component.query = gql`
  ${BlogInfoFragment}
  ${NavigationMenu.fragments.entry}
  ${Posts.fragments.entry}
  ${Projects.fragments.entry}
  ${Testimonials.fragments.entry}
  ${FeaturedImage.fragments.entry}
  query GetPageData(
    $headerLocation: MenuLocationEnum
    $footerLocation: MenuLocationEnum
    $first: Int
    $projectsFirst: Int
  ) {
    posts(first: $first) {
      nodes {
        ...PostsItemFragment
      }
    }
    projects(first: $projectsFirst) {
      nodes {
        ...ProjectsFragment
      }
    }
    testimonials {
      nodes {
        ...TestimonialsFragment
      }
    }
    frontPage: pageBy(uri: "/") {
      title
      content
      ...FeaturedImageFragment
    }
    generalSettings {
      ...BlogInfoFragment
    }
    headerMenuItems: menuItems(where: { location: $headerLocation }) {
      nodes {
        ...NavigationMenuItemFragment
      }
    }
    footerMenuItems: menuItems(where: { location: $footerLocation }) {
      nodes {
        ...NavigationMenuItemFragment
      }
    }
  }
`;
