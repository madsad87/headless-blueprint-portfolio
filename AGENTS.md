# AGENTS.md

## Purpose
This file documents the project structure, data flow, and guardrails for agentic development. The goal is to preserve WordPress-driven content models while iterating on the front-end UI/UX.

## Project snapshot
- **Stack**: Next.js + Faust.js (FaustWP) with Apollo Client and WPGraphQL. See package dependencies and scripts in `package.json` and Faust config in `faust.config.js`.
- **Headless WP data**: Data is fetched via GraphQL fragments and queries in `wp-templates/*` and component fragments, rendered by Faust’s `WordPressTemplate` system.
- **Blueprint content**: The repo includes an ACM blueprint export (`acm-blueprint.zip`) used to seed WordPress content types (projects, testimonials, etc.). See `DEVELOPMENT.md` for import/export flow.

## Runtime data flow (high level)
1. **Routing**: `pages/[...wordpressNode].js` uses `getWordPressProps` and `WordPressTemplate` for WP-driven routes.
2. **Template mapping**: `faust.config.js` maps WordPress template slugs to components in `wp-templates/`.
3. **GraphQL**: Each template declares its own `Component.query` and `Component.variables` to fetch data for that route.
4. **Components & fragments**: Components expose GraphQL fragments for reuse (e.g., navigation menus, posts, testimonials).

## WordPress content models
- **Posts** (blog), **Pages**, **Projects** (custom post type), **Testimonials** (custom post type).
- **Menus**: Header and footer menus use `MenuLocationEnum` and are driven by constants in `constants/menus`.

## Key directories
- `pages/`: Next.js routes; `[...wordpressNode].js` is the Faust catch-all for WP content.
- `wp-templates/`: Faust templates for `front-page`, `page`, `single` (posts), `project` (custom CPT), and `archive` views.
- `components/`: Reusable UI pieces; some export GraphQL fragments (e.g., `Posts`, `Testimonials`, `NavigationMenu`).
- `fragments/`: Shared GraphQL fragments (e.g., `GeneralSettings`).
- `queries/`: Shared queries (search, etc.).
- `styles/`: SCSS modules and global styles.
- `app.config.js`: Application config (posts-per-page, theme color, social links, etc.).
- `plugins/`: Faust/Apollo plugins (custom template selection and relay-style pagination).

## Guardrails for redesign work
When redesigning the UI, **keep the WordPress content structure intact**:
- **Do not rename or remove GraphQL fields** used by templates (e.g., `projectFields`, `testimonialFields`, `featuredImage`, `content`, `title`, `summary`).
- **Keep template query shapes** stable unless the WordPress schema is updated in tandem.
- **Preserve `Component.variables` behaviors** (menu locations, pagination settings, preview mode).
- **Avoid hard-coding copy** that should remain editable in WordPress. Prefer data-driven text via WP fields.

## Template-specific notes
- **Front page** (`wp-templates/front-page.js`): Uses latest posts + testimonials with CTA sections.
- **Single post** (`wp-templates/single.js`): Renders `content` with taxonomy terms (categories, tags).
- **Project** (`wp-templates/project.js`): Uses `projectFields` (`projectTitle`, `summary`, `contentArea`).
- **Archive** (`wp-templates/archive.js`): Uses relay-style pagination for category/tag/content-type archives.

## Plugins & pagination
- `ProjectTemplatePlugin`: Ensures `Project` nodes map to the `project` template.
- `RelayStylePaginationPlugin`: Enables relay-style pagination for posts, projects, and content nodes.

## Common commands
- `npm run dev`: Start dev server.
- `npm run build`: Production build.
- `npm run lint`: Linting.
- `npm run format`: Prettier formatting.

## Notes for future agentic work
- Prefer incremental style changes in `components/` and `styles/` to avoid breaking data flow.
- Use `app.config.js` for global settings rather than hardcoding values in components.
- When adding new WP fields, update the relevant GraphQL fragments and templates together.
