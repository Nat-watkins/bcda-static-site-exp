import figma, { html } from "@figma/code-connect/html"

figma.connect(
  "https://www.figma.com/design/qb6gYgys3iMWhBkxU0w9li/USWDS-Design-Kit-Exp?node-id=467-5282",
  {
    props: {
      domainaddress: figma.string("domain-address"),
      mastheadtext: figma.string("masthead-text"),
    },
    example: (props) => html`
<!-- See: src/_includes/identifier.html -->
<div class="usa-identifier">
  <section class="usa-identifier__section usa-identifier__section--masthead"
           aria-label="Agency identifier">
    <div class="usa-identifier__container">
      <div class="usa-identifier__logos">
        <a href="https://www.hhs.gov/" class="usa-identifier__logo">
          <img class="usa-identifier__logo-img"
               src="{{ '/assets/img/HHS-logo.svg' | relative_url }}" alt="HHS logo" />
        </a>
        <a href="https://www.cms.gov/" class="usa-identifier__logo">
          <img class="usa-identifier__logo-img"
               src="{{ '/assets/img/CMS-logo.svg' | relative_url }}" alt="CMS logo" />
        </a>
      </div>
      <section class="usa-identifier__identity">
        <p class="usa-identifier__identity-domain">${props.domainaddress}</p>
        <p class="usa-identifier__identity-disclaimer">${props.mastheadtext}</p>
      </section>
    </div>
  </section>
  <nav class="usa-identifier__section usa-identifier__section--required-links">
    <div class="usa-identifier__container">
      <ul class="usa-identifier__required-links-list">
        {% for item in site.data.identifier-links %}
        <li class="usa-identifier__required-links-item">
          <a href="{{ item.url }}" class="usa-identifier__required-link usa-link">
            {{ item.text }}
          </a>
        </li>
        {% endfor %}
      </ul>
    </div>
  </nav>
</div>
`,
  },
)
