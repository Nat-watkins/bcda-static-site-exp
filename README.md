> [!NOTE]
> This fork of the public, open-source repository for BCDA's static HTML website. This effort is for personal and experimental purposes only.

## Figma Code Connect

This repository uses [Figma Code Connect](https://help.figma.com/hc/en-us/articles/23920389749655-Code-Connect) to link USWDS design components in Figma to their HTML/Jekyll implementations. When developers inspect a component in Figma Dev Mode, they see the corresponding USWDS markup instead of auto-generated code.

### Figma Resources

| Resource | Link |
|----------|------|
| USWDS Design Kit Beta (Community) | [figma.com/design/iz9g2sNw1VyeHgtKs37l6I](https://www.figma.com/design/iz9g2sNw1VyeHgtKs37l6I/USWDS-Design-Kit-Beta--Community-) |
| BCDA Site AI Exploration | [figma.com/design/jdvb5dvPzSELRmhmgtPir8](https://www.figma.com/design/jdvb5dvPzSELRmhmgtPir8/BCDA-Site-AI-Exploration) |
| Figma Code Connect Docs | [help.figma.com](https://help.figma.com/hc/en-us/articles/23920389749655-Code-Connect) |
| USWDS Component Reference | [designsystem.digital.gov/components](https://designsystem.digital.gov/components/) |

### Connected Components

Code Connect mappings live in `src/_figma/*.figma.ts` and use the HTML parser. Each file maps a published USWDS component to its Jekyll/HTML code snippet.

| Component | File | Variants |
|-----------|------|----------|
| Button | `usa-button.figma.ts` | primary, secondary, accent-cool, accent-warm, base, outline |
| Accordion Item | `usa-accordion-item.figma.ts` | default/bordered × open/closed |
| Process List Item | `usa-process-list-item.figma.ts` | default, last item |
| Process List Counter | `usa-process-list-counter.figma.ts` | — |
| Card | `usa-card.figma.ts` | — |
| Table Cell | `usa-table-cell.figma.ts` | header, body |
| Header | `usa-header.figma.ts` | — |
| Footer | `usa-footer.figma.ts` | — |
| Banner | `usa-banner-desktop.figma.ts` | — |
| Identifier | `usa-identifier-desktop.figma.ts` | — |

### Configuration

Code Connect is configured in `figma.config.json`:

```json
{
  "codeConnect": {
    "parser": "html",
    "include": ["src/**/*.figma.ts"]
  }
}
```

### Publishing Code Connect

To validate and publish mappings to Figma:

```sh
# Validate mappings locally
npx figma connect parse

# Publish to Figma (requires FIGMA_ACCESS_TOKEN)
npx figma connect publish
```

### Design System Rules

`CLAUDE.md` contains design system rules that map Figma design tokens to USWDS utility classes — including spacing, color, and typography tokens. These rules ensure consistent translation when implementing Figma designs in code.
