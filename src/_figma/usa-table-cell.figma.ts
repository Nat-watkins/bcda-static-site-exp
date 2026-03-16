import figma, { html } from "@figma/code-connect/html"

figma.connect(
  "https://www.figma.com/design/qb6gYgys3iMWhBkxU0w9li/USWDS-Design-Kit-Exp?node-id=957-5407",
  {
    props: {
      bordered: figma.enum("bordered", {
        "true": "",
        "false": "usa-table--borderless",
      }),
      striped: figma.enum("striped", {
        "true": "usa-table--striped",
        "false": "",
      }),
      compact: figma.enum("compact", {
        "true": "usa-table--compact",
        "false": "",
      }),
    },
    example: (props) => html`
<!-- See: src/_includes/table.html -->
<table class="usa-table ${props.bordered} ${props.striped} ${props.compact}">
  <thead>
    <tr>
      <th scope="col">Column 1</th>
      <th scope="col">Column 2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{Cell data}</td>
      <td>{Cell data}</td>
    </tr>
  </tbody>
</table>
`,
  },
)
