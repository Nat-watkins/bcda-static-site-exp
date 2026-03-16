import figma, { html } from "@figma/code-connect/html"

figma.connect(
  "https://www.figma.com/design/qb6gYgys3iMWhBkxU0w9li/USWDS-Design-Kit-Exp?node-id=1080-2787",
  {
    props: {
      projectname: figma.string("project-name"),
      size: figma.enum("size", {
        "slim": "usa-footer--slim",
        "medium": "",
        "big": "usa-footer--big",
      }),
    },
    example: (props) => html`
<!-- See: src/_includes/footer.html -->
<footer class="usa-footer ${props.size}">
  <div class="grid-container usa-footer__return-to-top padding-top-6">
    <a href="#">Return to top</a>
  </div>
  <div class="usa-footer__primary-section">
    <div class="grid-container">
      <div class="grid-row grid-gap">
        <div class="usa-footer__logo desktop:grid-col-auto">
          <a href="https://groups.google.com/g/bc-api"
             class="usa-button" data-tealium="footer">
            Join the Google Group
          </a>
        </div>
      </div>
    </div>
  </div>
</footer>
`,
  },
)
