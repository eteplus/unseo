# unseo

[![npm](https://img.shields.io/npm/v/unseo.svg)](https://www.npmjs.com/package/unseo)

> Easily add SEO-boosting tags and metadata to your app

## Usage

Install package:

```sh
# npm
npm install unseo

# yarn
yarn add unseo

# pnpm
pnpm install unseo

# bun
bun install unseo
```

### Astro

In any of your Astro pages, import Astro SEO and then use the component inside the <head> section of your HTML:

```astro
---
import type { SEOProps } from 'unseo/types';
import { SEOTags } from 'unseo/astro';
---

<html lang="en">
  <head>
    <SEOTags
      title="unseo"
      defaultTitle="Sets the default title used when no title is set on a page"
      description="Easily add SEO-boosting tags and metadata to your app"
      openGraph={{
        title: "unseo",
        description: "Easily add SEO-boosting tags and metadata to your app",
        type: 'article',
        url: 'https://github.com/eteplus/unseo',
        article: {
          title: "Easily add SEO-boosting tags and metadata to your app",
          authors: ['Eleven'],
          tags: ['seo', 'astro']
        }
      }}
      twitter={{
        creator: "@eteplus"
        ...
      }}
      meta={[
        { name: "twitter:title", content: "unseo" },
        { name: "twitter:description", content: "Easily add SEO-boosting tags and metadata to your app" },
        { name: "twitter:card", content: "summary_large_image" }
        { name: "twitter:site", content: "@eteplus" }
      ]},
      link={[
        { rel: "icon", href: "/favicon.ico" }
      ]}
    />
    ...
  </head>
  <body>
    ....
  </body>
</html>
```


## License

Made with Eleven

Published under [MIT License](./LICENSE).
