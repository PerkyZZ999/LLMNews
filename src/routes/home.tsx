import { BriefingPopover } from '../components/briefing-popover'
import { Button } from '../components/ui/button'

const feed = [
  {
    title: 'Vendor release radar',
    detail: 'Watch frontier labs, open-weight launches, and API changelogs in one place.',
  },
  {
    title: 'Early signal scoring',
    detail: 'Flag launches by freshness, source confidence, and downstream impact.',
  },
  {
    title: 'Research-first summaries',
    detail: 'Turn dense release notes into quick, scannable briefs for builders.',
  },
]

const launches = [
  {
    source: 'Open model labs',
    title: 'New reasoning model family ships with faster tool use',
    meta: '8 minutes ago · benchmark shift detected',
  },
  {
    source: 'API platforms',
    title: 'Context window upgrade lands for multimodal assistants',
    meta: '27 minutes ago · docs diff pending review',
  },
  {
    source: 'Research feeds',
    title: 'Fresh paper points to smaller models beating larger baselines',
    meta: '1 hour ago · editorial summary queued',
  },
]

export function HomePage() {
  return (
    <main className="page-shell">
      <section className="hero card">
        <div className="hero__copy">
          <p className="eyebrow">AI model intelligence, first</p>
          <h1>Catch new LLM launches before they become yesterday&apos;s news.</h1>
          <p className="lede">
            LLMNews is being built as a fast, minimalist newsroom for new models, eval shifts,
            and ecosystem signals across frontier labs and open-source releases.
          </p>
          <div className="hero__actions">
            <BriefingPopover />
            <Button variant="secondary">Explore roadmap</Button>
          </div>
        </div>
        <div className="hero__panel">
          <p className="panel-label">Current product focus</p>
          <ul className="focus-list">
            <li>Minimalist light UI</li>
            <li>Typed TanStack routing foundation</li>
            <li>Base UI primitives for accessible interactions</li>
            <li>Evlog-backed observability planned for ingestion</li>
          </ul>
        </div>
      </section>

      <section className="section-block">
        <div className="section-heading">
          <p className="eyebrow">Why this project</p>
          <h2>The first version is optimized for speed, clarity, and source trust.</h2>
        </div>
        <div className="feature-grid">
          {feed.map((item) => (
            <article className="card feature-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-block">
        <div className="section-heading">
          <p className="eyebrow">Early signal feed</p>
          <h2>A starter feed shell for the kinds of updates LLMNews will publish.</h2>
        </div>
        <div className="launch-list">
          {launches.map((launch) => (
            <article className="card launch-card" key={launch.title}>
              <div>
                <p className="launch-card__source">{launch.source}</p>
                <h3>{launch.title}</h3>
              </div>
              <p className="launch-card__meta">{launch.meta}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
