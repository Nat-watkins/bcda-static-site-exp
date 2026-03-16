import figma, { html } from "@figma/code-connect/html"

figma.connect(
  "https://www.figma.com/design/qb6gYgys3iMWhBkxU0w9li/USWDS-Design-Kit-Exp?node-id=364-4732",
  {
    props: {
      background: figma.enum("background", {
        "dark": "",
        "light": "usa-banner--light",
      }),
    },
    example: (props) => html`
<!-- See: src/_includes/banner.html -->
<section class="usa-banner ${props.background}"
         aria-label="Official website of the United States government">
  <div class="usa-accordion">
    <header class="usa-banner__header">
      <div class="usa-banner__inner">
        <div class="grid-col-auto">
          <img aria-hidden="true" class="usa-banner__header-flag"
               src="{{ '/assets/uswds/img/us_flag_small.png' | relative_url }}" alt="" />
        </div>
        <div class="grid-col-fill tablet:grid-col-auto">
          <p class="usa-banner__header-text">
            An official website of the United States government
          </p>
          <p class="usa-banner__header-action">Here's how you know</p>
        </div>
        <button type="button" class="usa-accordion__button usa-banner__button"
                aria-expanded="false" aria-controls="gov-banner-default">
          <span class="usa-banner__button-text">Here's how you know</span>
        </button>
      </div>
    </header>
  </div>
</section>
`,
  },
)
