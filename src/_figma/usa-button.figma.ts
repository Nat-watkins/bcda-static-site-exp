import figma, { html } from "@figma/code-connect/html"

figma.connect(
  "https://www.figma.com/design/qb6gYgys3iMWhBkxU0w9li/USWDS-Design-Kit-Exp?node-id=807-6835",
  {
    props: {
      text: figma.string("text"),
      type: figma.enum("type", {
        "primary": "",
        "secondary": "usa-button--secondary",
        "accent-cool": "usa-button--accent-cool",
        "accent-warm": "usa-button--accent-warm",
        "base": "usa-button--base",
        "outline": "usa-button--outline",
        "outline-inverse": "usa-button--outline usa-button--inverse",
      }),
      state: figma.enum("state", {
        "default": "",
        "hover": "usa-button--hover",
        "active": "usa-button--active",
        "focus": "usa-focus",
        "disabled": 'aria-disabled="true"',
        "unstyled": "usa-button--unstyled",
      }),
    },
    example: (props) => html`
<a href="{{url}}" class="usa-button ${props.type}" ${props.state}>
  ${props.text}
</a>
`,
  },
)
