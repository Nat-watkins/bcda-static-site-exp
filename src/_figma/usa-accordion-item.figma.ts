import figma, { html } from "@figma/code-connect/html"

/**
 * USA Accordion Item
 * @see https://designsystem.digital.gov/components/accordion/
 *
 * An accordion is a list of headers that hide or reveal additional
 * content when selected. Wrap items in a <div class="usa-accordion">
 * (or usa-accordion--bordered) container.
 */

// Default variant, closed
figma.connect(
  "https://www.figma.com/design/qb6gYgys3iMWhBkxU0w9li/USWDS-Design-Kit-Exp?node-id=1184-2734",
  {
    variant: { "type": "default", "open": "false" },
    props: {
      summary: figma.string("summary"),
      details: figma.string("details"),
    },
    example: (props) => html`
<!-- Accordion wrapper: <div class="usa-accordion"> -->
<h4 class="usa-accordion__heading">
  <button
    type="button"
    class="usa-accordion__button"
    aria-expanded="false"
    aria-controls="a1"
  >
    ${props.summary}
  </button>
</h4>
<div id="a1" class="usa-accordion__content usa-prose" hidden>
  <p>${props.details}</p>
</div>
`,
  },
)

// Default variant, open
figma.connect(
  "https://www.figma.com/design/qb6gYgys3iMWhBkxU0w9li/USWDS-Design-Kit-Exp?node-id=1184-2734",
  {
    variant: { "type": "default", "open": "true" },
    props: {
      summary: figma.string("summary"),
      details: figma.string("details"),
    },
    example: (props) => html`
<!-- Accordion wrapper: <div class="usa-accordion"> -->
<h4 class="usa-accordion__heading">
  <button
    type="button"
    class="usa-accordion__button"
    aria-expanded="true"
    aria-controls="a1"
  >
    ${props.summary}
  </button>
</h4>
<div id="a1" class="usa-accordion__content usa-prose">
  <p>${props.details}</p>
</div>
`,
  },
)

// Bordered variant, closed
figma.connect(
  "https://www.figma.com/design/qb6gYgys3iMWhBkxU0w9li/USWDS-Design-Kit-Exp?node-id=1184-2734",
  {
    variant: { "type": "bordered", "open": "false" },
    props: {
      summary: figma.string("summary"),
      details: figma.string("details"),
    },
    example: (props) => html`
<!-- Accordion wrapper: <div class="usa-accordion usa-accordion--bordered"> -->
<h4 class="usa-accordion__heading">
  <button
    type="button"
    class="usa-accordion__button"
    aria-expanded="false"
    aria-controls="b-a1"
  >
    ${props.summary}
  </button>
</h4>
<div id="b-a1" class="usa-accordion__content usa-prose" hidden>
  <p>${props.details}</p>
</div>
`,
  },
)

// Bordered variant, open
figma.connect(
  "https://www.figma.com/design/qb6gYgys3iMWhBkxU0w9li/USWDS-Design-Kit-Exp?node-id=1184-2734",
  {
    variant: { "type": "bordered", "open": "true" },
    props: {
      summary: figma.string("summary"),
      details: figma.string("details"),
    },
    example: (props) => html`
<!-- Accordion wrapper: <div class="usa-accordion usa-accordion--bordered"> -->
<h4 class="usa-accordion__heading">
  <button
    type="button"
    class="usa-accordion__button"
    aria-expanded="true"
    aria-controls="b-a1"
  >
    ${props.summary}
  </button>
</h4>
<div id="b-a1" class="usa-accordion__content usa-prose">
  <p>${props.details}</p>
</div>
`,
  },
)
