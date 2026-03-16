import figma, { html } from "@figma/code-connect/html"

figma.connect(
  "https://www.figma.com/design/qb6gYgys3iMWhBkxU0w9li/USWDS-Design-Kit-Exp?node-id=1733-3292",
  {
    props: {
      sitetitle: figma.string("site-title"),
      type: figma.enum("type", {
        "basic": "usa-header--basic",
        "extended": "usa-header--extended",
      }),
    },
    example: (props) => html`
<!-- See: src/_includes/header.html -->
<header class="usa-header ${props.type}">
  <div class="usa-nav-container">
    <div class="usa-navbar">
      <div class="usa-logo">
        <a href="{{ '/index.html' | relative_url }}" title="${props.sitetitle}">
          <img src="{{ '/assets/img/logo-bcda.svg' | relative_url }}" alt="" />
          <span class="font-sans-md text-bold">${props.sitetitle}</span>
        </a>
      </div>
      <button type="button" class="usa-menu-btn">Menu</button>
    </div>
    <nav aria-label="Primary navigation" class="usa-nav">
      <ul class="usa-nav__primary usa-accordion">
        {% for item in site.data.nav-primary %}
        <li class="usa-nav__primary-item">
          <a href="{{ item.url | relative_url }}" class="usa-nav-link">
            <span>{{ item.name }}</span>
          </a>
        </li>
        {% endfor %}
      </ul>
    </nav>
  </div>
</header>
`,
  },
)
