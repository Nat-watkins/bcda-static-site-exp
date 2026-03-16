import figma, { html } from "@figma/code-connect/html"

/**
 * USA Process List Item
 * @see https://designsystem.digital.gov/components/process-list/
 *
 * A process list displays the steps or stages of important
 * instructions or processes. Use <ol> for the wrapper.
 */

// Default variant: item with heading and body text
figma.connect(
  "https://www.figma.com/design/qb6gYgys3iMWhBkxU0w9li/USWDS-Design-Kit-Exp?node-id=964-6601",
  {
    variant: { "last": "false" },
    props: {
      headertext: figma.string("header-text"),
      text: figma.string("text"),
      stepText: figma.boolean("step text?"),
    },
    example: (props) => html`
<!-- Process list wrapper: <ol class="usa-process-list"> -->
<li class="usa-process-list__item">
  <h4 class="usa-process-list__heading">${props.headertext}</h4>
  <p class="margin-top-05">${props.text}</p>
  <ul>
    <li>Supporting detail or sub-step</li>
  </ul>
</li>
`,
  },
)

// Last item variant: no connector rail below
figma.connect(
  "https://www.figma.com/design/qb6gYgys3iMWhBkxU0w9li/USWDS-Design-Kit-Exp?node-id=964-6601",
  {
    variant: { "last": "true" },
    props: {
      headertext: figma.string("header-text"),
      text: figma.string("text"),
      stepText: figma.boolean("step text?"),
    },
    example: (props) => html`
<!-- Last item in the process list -->
<li class="usa-process-list__item">
  <h4 class="usa-process-list__heading">${props.headertext}</h4>
  <p class="margin-top-05">${props.text}</p>
</li>
<!-- Close wrapper: </ol> -->
`,
  },
)
