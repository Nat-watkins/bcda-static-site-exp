import figma, { html } from "@figma/code-connect/html"

figma.connect(
  "https://www.figma.com/design/qb6gYgys3iMWhBkxU0w9li/USWDS-Design-Kit-Exp?node-id=1140-10229",
  {
    props: {
      mediaInset: figma.enum("media-inset", {
        "true": "usa-card__media--inset",
        "false": "",
      }),
    },
    example: (props) => html`
<li class="usa-card tablet:grid-col-6 desktop:grid-col-4">
  <div class="usa-card__container">
    <div class="usa-card__header">
      <h3 class="usa-card__heading">{Card Title}</h3>
    </div>
    <div class="usa-card__media ${props.mediaInset}">
      <div class="usa-card__img text-center">
        <img src="{{imageSrc}}" alt="" class="maxw-15 margin-x-auto" />
      </div>
    </div>
    <div class="usa-card__body">
      <p>{Card description}</p>
    </div>
    <div class="usa-card__footer">
      <a href="{{url}}" class="usa-button">{Action}</a>
    </div>
  </div>
</li>
`,
  },
)
