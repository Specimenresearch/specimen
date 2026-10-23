import { useState } from 'react';
import './App.css'

const researchNotes = [
  {
    number: '001',
    category: 'OBSERVATION',
    title: 'The emergence of internet organisms',
    description:
      'A cultural artifact rarely appears in isolation. It emerges from shared references, social context, and the accumulated language of an online community.',
    question: 'What conditions allow a new cultural artifact to emerge?',
    tags: ['CULTURAL ORIGINS', 'CONTEXT'],
    status: 'FOUNDATIONAL NOTE',
evidenceStatus: 'NOT EMPIRICALLY VERIFIED',
observationDate: '',
sourceTitle:
  'Memes in a Digital World: Reconciling with a Conceptual Troublemaker',
sourceAuthor: 'Limor Shifman',
sourceYear: '2013',
sourceUrl: 'https://doi.org/10.1111/jcc4.12013',
sourceNote:
  'Develops a conceptual framework for analyzing internet memes through content, form, and stance. This framework helps describe how cultural artifacts are expressed and replicated, but does not directly establish the conditions under which new cultural artifacts emerge.',


  },
  {
    number: '002',
    category: 'HYPOTHESIS',
    title: 'Mutation is the mechanism',
    description:
      'Repetition rarely produces perfect copies. Captions change, images are remixed, and meanings shift as an idea moves between communities.',
    question: 'Does variation help an idea reach new audiences?',
    tags: ['VARIATION', 'REMIX'],
    status: 'WORKING HYPOTHESIS',
    evidenceStatus: 'NOT EMPIRICALLY VERIFIED',
    observationDate: '',
sourceTitle:
  'Assessing global diffusion with Web memetics: The spread and evolution of a popular joke',
sourceAuthor: 'Limor Shifman and Mike Thelwall',
sourceYear: '2009',
sourceUrl: 'https://doi.org/10.1002/asi.21185',
sourceNote:
  'Uses quantitative and qualitative web analysis to trace the variants, evolution, and global diffusion of one widely circulated joke. The case illustrates how memes can adapt across linguistic and cultural contexts, but does not establish that variation always helps an idea reach new audiences.',


  },
  {
    number: '003',
    category: 'OBSERVATION',
    title: 'Attention shapes propagation',
    description:
      'Visibility can accelerate cultural transmission. Yet exposure alone may not explain why some ideas are repeated while others are ignored.',
    question: 'What is the relationship between attention and repetition?',
    tags: ['DISTRIBUTION', 'ATTENTION'],
    status: 'OPEN INVESTIGATION',
    evidenceStatus: 'NOT EMPIRICALLY VERIFIED',
    observationDate: '',
    sourceTitle: 'What Makes Online Content Viral?',
    sourceAuthor: 'Jonah Berger and Katherine L. Milkman',
    sourceYear: '2012',
    sourceUrl: 'https://doi.org/10.1509/JMR.10.0353',
    sourceNote:
  'Examines New York Times articles and finds that emotional arousal is associated with online sharing. The findings offer a basis for studying content propagation, but do not directly establish how attention relates to meme repetition across online communities.',


  },
  
  {
    number: '004',
    category: 'HYPOTHESIS',
    title: 'Communities act as selection environments',
    description:
      'Different online communities reward different forms of humor, identity, timing, and shared knowledge. An idea may thrive in one environment and fail in another.',
    question: 'How does community context influence cultural survival?',
    tags: ['COMMUNITIES', 'SELECTION'],
    status: 'WORKING HYPOTHESIS',
    evidenceStatus: 'NOT EMPIRICALLY VERIFIED',
    observationDate: '',
    sourceTitle: 'A Web-Scale Analysis of the Community Origins of Image Memes',
    sourceAuthor: 'Durim Morina and Michael S. Bernstein',
    sourceYear: '2022',
    sourceUrl: 'https://doi.org/10.1145/3512921',
    sourceNote:
  'Analyzes the origins and diffusion of image memes across online communities. The findings show that conclusions about meme diffusion can differ between web-scale and single-community analyses, providing a basis for investigating how community context relates to cultural spread without directly establishing the proposed selection mechanism.',

  },

  
  {
    number: '005',
    category: 'OPEN QUESTION',
    title: 'When does a meme lose its meaning?',
    description:
      'An idea can outlive the context that originally made it meaningful. Familiarity may preserve its form even as its original meaning fades.',
    question: 'Can a cultural artifact survive after its original context disappears?',
    tags: ['MEANING', 'CULTURAL MEMORY'],
    status: 'UNRESOLVED',
    evidenceStatus: 'OPEN QUESTION',
    observationDate: '',
    sourceTitle: 'Memes in a Digital World: Reconciling with a Conceptual Troublemaker',
    sourceAuthor: 'Limor Shifman',
    sourceYear: '2013',
    sourceUrl: 'https://doi.org/10.1111/jcc4.12013',
    sourceNote:
  'Provides a framework for examining meme content, form, and stance. This offers a conceptual starting point for investigating how meaning may change across contexts, but does not directly establish when a meme loses its original meaning.',

  },

  
  {
    number: '006',
    category: 'OPEN QUESTION',
    title: 'What survives the feed?',
    description:
      'Digital culture moves through changing platforms, formats, and audiences. Long-term persistence may depend on more than immediate popularity.',
    question: 'Which characteristics contribute to cultural persistence?',
    tags: ['PERSISTENCE', 'DIGITAL CULTURE'],
    status: 'UNRESOLVED',
    evidenceStatus: 'OPEN QUESTION',
    observationDate: '',
    sourceTitle: 'Entropy and complexity unveil the landscape of memes evolution',
    sourceAuthor: 'Carlo M. Valensise et al.',
    sourceYear: '2021',
    sourceUrl: 'https://doi.org/10.1038/s41598-021-99468-6',
    sourceNote:
  'Analyzes approximately two million visual memes from Reddit between 2011 and 2020. The study finds that longer-lasting meme templates are associated with strong early adoption, providing a research basis for investigating cultural persistence within this specific dataset.',

  },

]


const methodologySteps = [
  {
    number: '01',
    title: 'Observe',
    label: 'CULTURAL DATA COLLECTION',
    description:
      'Document memes, recurring narratives, visual formats, community references, and visible signals of attention. Record the context and source before assigning meaning.',
    output: 'OBSERVATION RECORD',
  },
  {
    number: '02',
    title: 'Classify',
    label: 'PATTERN IDENTIFICATION',
    description:
      'Compare observations across relevant dimensions, including replication, mutation, distribution, community context, and the relationship between a cultural narrative and its associated token.',
    output: 'CLASSIFIED PATTERN',
  },
  {
    number: '03',
    title: 'Interpret',
    label: 'HYPOTHESIS FORMATION',
    description:
      'Develop a testable explanation for an observed pattern. Separate direct observations from assumptions, and treat cultural attention as distinct from token demand or market performance.',
    output: 'WORKING HYPOTHESIS',
  },
  {
    number: '04',
    title: 'Reassess',
    label: 'EVIDENCE & LIMITATIONS',
    description:
      'Review interpretations as new evidence emerges. Document uncertainty, consider alternative explanations, and never treat correlation as proof of causation.',
    output: 'REVISED RESEARCH NOTE',
  },
];



function App() {
  const [activeFilter, setActiveFilter] = useState('ALL NOTES');
  const [searchQuery, setSearchQuery] = useState('');
  
const filteredResearchNotes = researchNotes.filter((note) => {
  const matchesCategory =
    activeFilter === 'ALL NOTES' ||
    note.category === activeFilter;

  const searchableText = [
    note.number,
    note.category,
    note.title,
    note.description,
    note.question,
    ...note.tags,
    note.status,
    note.sourceTitle,
    note.sourceAuthor,
  ]
    .join(' ')
    .toLowerCase();

  const matchesSearch = searchableText.includes(
    searchQuery.trim().toLowerCase()
  );

  return matchesCategory && matchesSearch;
});

  return (
    <main className="site-shell">
      <nav className="navbar">
        <a className="wordmark" href="#home">
          <span className="brand-mark">S.</span>
          SPECIMEN
        </a>

        <div className="nav-links">
          <a href="#thesis">Thesis</a>
          <a href="#research">Research</a>
          <a href="#protocol">Protocol</a>
        </div>

        <a className="nav-status" href="#protocol">
          <span className="status-dot" />
          RESEARCH IN PROGRESS
        </a>
      </nav>

      <section className="hero" id="home">
        <div className="hero-meta">
          <span>INTERNET CULTURE RESEARCH PROJECT</span>
          <span>EST. 2026 — SOLANA</span>
        </div>

        <div className="hero-content">
          <p className="eyebrow">A STUDY OF DIGITAL LIFE</p>
          <h1>
            Culture is
            <br />
            <span>an organism.</span>
          </h1>

          <p className="hero-description">
            An ongoing investigation into how internet culture emerges,
            mutates, propagates, and disappears.
          </p>

          <div className="hero-actions">
            <a className="button button-dark" href="#thesis">
              Read the thesis <span>↗</span>
            </a>
            <a className="text-link" href="#research">
              Explore field notes <span>↓</span>
            </a>
          </div>
        </div>

        <div className="specimen-visual" aria-label="Abstract scientific specimen illustration">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="orbit orbit-three" />
          <div className="specimen-core">
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <div className="visual-label label-top">FIG. 001 / CULTURAL MATTER</div>
          <div className="visual-label label-bottom">UNCLASSIFIED · UNDER OBSERVATION</div>
          <div className="crosshair crosshair-one">+</div>
          <div className="crosshair crosshair-two">+</div>
        </div>

        <div className="hero-footer">
          <span>OBSERVE WHAT SPREADS.</span>
          <span>UNDERSTAND WHAT SURVIVES.</span>
          <a href="#thesis" aria-label="Scroll to thesis">↓</a>
        </div>
      </section>

      
<section className="thesis-section" id="thesis">
  <div className="section-label">
    <span>01 / CENTRAL THESIS</span>
    <span>SPECIMEN RESEARCH FRAMEWORK</span>
  </div>

  <div className="thesis-layout">
    <div className="thesis-main">
      <p className="eyebrow">A WORKING THEORY OF INTERNET CULTURE</p>
      <h2>
        Culture does not stand still.
        <br />
        It <em>replicates, mutates,</em>
        <br />
        and competes for attention.
      </h2>
      <p className="thesis-lead">
        Internet memes are not merely images or jokes.
        They are cultural artifacts shaped by imitation,
        variation, distribution, and the communities
        that give them meaning.
      </p>
<a className="thesis-method-link" href="#methodology">
  EXPLORE THE METHOD <span aria-hidden="true">↗</span>
</a>

    </div>

    <aside className="thesis-aside">
      <span className="aside-index">THESIS / 001</span>
      <div className="aside-rule" />
      <p>
        SPECIMEN studies meme culture as an evolving
        digital ecosystem. It documents observable
        patterns and develops hypotheses about how
        cultural artifacts emerge, spread, and persist.
      </p>
      <span className="aside-status">
        STATUS: WORKING FRAMEWORK
      </span>
    </aside>
  </div>

  <div className="thesis-principles">
    <article className="principle">
      <span className="principle-number">01</span>
      <h3>Replication</h3>
      <p>
        Ideas travel through repetition, reference,
        imitation, and recognizable formats.
      </p>
      <span className="principle-note">TRANSMISSION</span>
    </article>

    <article className="principle">
      <span className="principle-number">02</span>
      <h3>Mutation</h3>
      <p>
        Remixes and reinterpretations alter an artifact
        as it moves between people and communities.
      </p>
      <span className="principle-note">VARIATION</span>
    </article>

    <article className="principle">
      <span className="principle-number">03</span>
      <h3>Selection</h3>
      <p>
        Cultural and platform contexts influence which
        variations receive attention and are repeated.
      </p>
      <span className="principle-note">CONTEXT</span>
    </article>

    <article className="principle">
      <span className="principle-number">04</span>
      <h3>Persistence</h3>
      <p>
        Some artifacts remain recognizable over time,
        even as their meaning or original context changes.
      </p>
      <span className="principle-note">CONTINUITY</span>
    </article>
  </div>

  <div className="thesis-caveat">
    <span className="caveat-mark">NOTE</span>
    <p>
      This framework is exploratory, not a universal law.
      The principles are research lenses, not proof that
      every meme follows the same process.
    </p>
  </div>
</section>

<section className="methodology-section" id="methodology">
  <div className="section-label">
    <span>01B / RESEARCH METHOD</span>
    <span>OBSERVE → CLASSIFY → REASSESS</span>
  </div>

  <div className="methodology-heading">
    <div>
      <p className="eyebrow">HOW THE RESEARCH WORKS</p>
      <h2>From observation to interpretation.</h2>
    </div>
    <p className="methodology-intro">
      A transparent process for documenting digital culture
      without confusing visible patterns with proven explanations.
    </p>
  </div>

  <div className="methodology-principles">
    <div>
      <span className="method-stat">01</span>
      <span className="method-stat-label">START WITH EVIDENCE</span>
    </div>
    <div>
      <span className="method-stat">02</span>
      <span className="method-stat-label">SEPARATE CLAIMS</span>
    </div>
    <div>
      <span className="method-stat">03</span>
      <span className="method-stat-label">RECORD UNCERTAINTY</span>
    </div>
  </div>

  <div className="methodology-list">
    {methodologySteps.map((step) => (
      <article className="methodology-card" key={step.number}>
        <div className="methodology-number">{step.number}</div>

        <div className="methodology-content">
          <span className="methodology-label">{step.label}</span>
          <h3>{step.title}</h3>
          <p>{step.description}</p>
          <div className="methodology-output">
            <span>RESEARCH OUTPUT</span>
            <strong>{step.output}</strong>
          </div>
        </div>

        <span className="methodology-arrow" aria-hidden="true">
          ↗
        </span>
      </article>
    ))}
  </div>

  <div className="methodology-note">
    <span>METHOD NOTE</span>
    <p>
      SPECIMEN is an exploratory research framework.
      Observations may support a hypothesis, challenge it,
      or leave a question unresolved. Conclusions remain
      provisional unless supported by appropriate evidence.
    </p>
  </div>
</section>



      
<section className="research-section" id="research">
  <div className="section-label">
    <span>02 / FIELD NOTES</span>
    <span>SPECIMEN ARCHIVE · 001—006</span>
  </div>

  <div className="research-heading">
    <div>
      <p className="eyebrow">DOCUMENTING DIGITAL CULTURE</p>
      <h2>The research log.</h2>
    </div>
    <p className="research-intro">
      Six entries. One evolving ecosystem.
      <br />
      A record of patterns, questions, and possible explanations.
    </p>
  </div>

  <div className="archive-summary">
    <div>
      <span className="summary-label">TOTAL ENTRIES</span>
      <strong>06</strong>
    </div>
    <div>
      <span className="summary-label">RESEARCH MODE</span>
      <strong>ONGOING</strong>
    </div>
    <div>
      <span className="summary-label">CLASSIFICATION</span>
      <strong>PRELIMINARY</strong>
    </div>
  </div>

<div className="classification-key">
  <span className="classification-title">READING KEY</span>

  <div className="classification-item">
    <span className="classification-dot observation-dot" />
    <span>OBSERVATION</span>
    <span className="classification-description">
      Recorded pattern
    </span>
  </div>

  <div className="classification-item">
    <span className="classification-dot hypothesis-dot" />
    <span>HYPOTHESIS</span>
    <span className="classification-description">
      Provisional explanation
    </span>
  </div>

  <div className="classification-item">
    <span className="classification-dot question-dot" />
    <span>OPEN QUESTION</span>
    <span className="classification-description">
      Unresolved inquiry
    </span>
  </div>
</div>
<div className="evidence-key">
  <span className="evidence-key-title">
    EVIDENCE CLASSIFICATION
  </span>

  <div className="evidence-key-item">
    <strong>NOT EMPIRICALLY VERIFIED</strong>
    <p>A claim has not yet been empirically tested.</p>
  </div>

  <div className="evidence-key-item">
    <strong>OPEN QUESTION</strong>
    <p>A research question remains unanswered.</p>
  </div>

  <div className="evidence-key-item">
    <strong>EMPIRICALLY SUPPORTED</strong>
    <p>A claim is supported by documented empirical evidence.</p>
  </div>
</div>

<div className="research-search">
  <label htmlFor="research-search-input">
    SEARCH THE ARCHIVE
  </label>
  <input
    id="research-search-input"
    type="search"
    placeholder="Search titles, concepts, sources..."
    value={searchQuery}
    onChange={(event) => setSearchQuery(event.target.value)}
  />
</div>

<div className="research-filters" aria-label="Filter research notes">
  {['ALL NOTES', 'OBSERVATION', 'HYPOTHESIS', 'OPEN QUESTION'].map(
    (filter) => (
      <button
        key={filter}
        type="button"
        className={`research-filter ${
          activeFilter === filter ? 'is-active' : ''
        }`}
        aria-pressed={activeFilter === filter}
        onClick={() => setActiveFilter(filter)}
      >
        {filter}
      </button>
    )
  )}
</div>

<p className="research-filter-count" aria-live="polite">
  SHOWING {filteredResearchNotes.length} OF {researchNotes.length} RECORDS
</p>

<div className="research-guidance">
  <p className="research-guidance-title">
    READING THE ARCHIVE
  </p>
  <p>
    Research notes are classified by their role in the inquiry.
    A cited publication provides context or evidence for a
    specific claim; it does not automatically validate every
    interpretation in a note.
  </p>
</div>

  <div className="research-list">
    {filteredResearchNotes.map((note) => (
      <article className="research-card" key={note.number}>
        <div className="note-index">
          <span className="note-number">{note.number}</span>
          <span className="note-index-line" />
        </div>

        <div className="note-main">
          <div className="note-topline">
            <span className="note-category">{note.category}</span>
            <span className="note-status">{note.status}</span>
          </div>

          <h3>{note.title}</h3>
          <p className="note-description">{note.description}</p>

<div className="note-metadata">
  <div>
    <span>RECORD TYPE</span>
    <strong>CONCEPTUAL NOTE</strong>
  </div>
  <div>
    <span>OBSERVATION DATE</span>
    <strong>
  {note.observationDate || 'NOT RECORDED'}
</strong>
  </div>
  <div>
    <span>SOURCE</span>
    <strong>
  {note.sourceUrl ? 'ATTACHED' : 'NOT ATTACHED'}
</strong>
  </div>
<div className="evidence-status-field">
  <span>EVIDENCE STATUS</span>
  <strong className="evidence-status-value">
    {note.evidenceStatus || 'NOT EMPIRICALLY VERIFIED'}
  </strong>
</div>

</div>
{note.sourceUrl && (
  <div className="note-source">
    <span className="note-source-label">
      REFERENCE / {note.sourceYear}
    </span>

    <p>
      {note.sourceAuthor}. {note.sourceTitle}.
    </p>

    <p className="note-source-description">
      {note.sourceNote}
    </p>

    <a
      href={note.sourceUrl}
      target="_blank"
      rel="noreferrer"
    >
      READ SOURCE <span aria-hidden="true">↗</span>
    </a>
  </div>
)}


          <div className="note-question">
            <span>RESEARCH QUESTION</span>
            <p>{note.question}</p>
          </div>

          <div className="note-tags">
            {note.tags.map((tag) => (
              <span key={tag} className="note-tag">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <span className="note-arrow" aria-hidden="true">↗</span>
      </article>
    ))}
  </div>

  <div className="archive-footer">
    <span>END OF CURRENT ARCHIVE</span>
    <span>FURTHER OBSERVATIONS MAY FOLLOW</span>
  </div>
</section>


      <section className="protocol-section" id="protocol">
        <div className="section-label">
          <span>03 / PROJECT PROTOCOL</span>
          <span>TRANSPARENCY FIRST</span>
        </div>

        
<div className="protocol-content">
  <p className="eyebrow">A NOTE ON THE PROJECT</p>
  <h2>
    Observe first.
    <br />
    <em>Claim carefully.</em>
  </h2>
  <p>
    SPECIMEN is an independent cultural research project
    exploring internet-native ideas, memetic behavior, and
    the communities through which cultural artifacts evolve.
    Its purpose is to document patterns, develop hypotheses,
    and examine how internet culture changes over time.
  </p>

  <div className="protocol-principles">
    <div className="protocol-principle">
      <span>01 / SOURCE INTEGRITY</span>
      <p>
        Research claims should be traceable to identifiable
        sources. References are provided where available,
        and source material should be evaluated in context.
      </p>
    </div>

    <div className="protocol-principle">
      <span>02 / EVIDENCE CLASSIFICATION</span>
      <p>
        Observations, hypotheses, and open questions are
        treated as distinct categories. An interpretation
        is not presented as an established finding.
      </p>
    </div>

    <div className="protocol-principle">
      <span>03 / CULTURAL CONTEXT</span>
      <p>
        Memes and narratives are examined in relation to
        their origins, communities, and surrounding context.
        Meaning may change as content moves between groups.
      </p>
    </div>

    <div className="protocol-principle">
      <span>04 / CULTURE IS NOT A MARKET SIGNAL</span>
      <p>
        Cultural attention does not establish token demand,
        financial value, or future performance. Cultural
        analysis should not be interpreted as investment advice.
      </p>
    </div>

    <div className="protocol-principle">
      <span>05 / UNCERTAINTY & LIMITATIONS</span>
      <p>
        Available evidence may be incomplete or inconclusive.
        Limitations, unresolved questions, and alternative
        explanations should remain visible in the research.
      </p>
    </div>
  </div>

  <p className="protocol-disclaimer">
    Any token-related information must be independently
    verified. No contract address, token supply, or market
    claim is published here until it has been confirmed.
  </p>
</div>

      </section>

      <footer className="footer">
        <a className="wordmark" href="#home">
          <span className="brand-mark">S.</span>
          SPECIMEN
        </a>
        <span>AN OPEN-ENDED STUDY OF INTERNET CULTURE.</span>
        <a href="#home">BACK TO TOP ↑</a>
        <span className="copyright">© 2026 SPECIMEN PROJECT</span>
      </footer>
    </main>
  )
}

export default App
