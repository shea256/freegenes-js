# FreeGenes UI

### About FreeGenes

FreeGenes is an open registry for genetic parts and a framework for bioengineering.

You can browse the genetic parts on FreeGenes, order genetic part collections, and request that new genes be added to the registry.

Just like the iGEM Parts Registry, the FreeGenes registry makes it easier to engineer organisms through broader availability of genetic parts.

And just like Biobricks, the Freegenes framework simplifies genome building through careful design of the parts available so they can be readily combined with minimal effort.

FreeGenes is different from iGEM in that it further broadens access. While iGEM is difficult for academic institutions and companies to use because it does not include material transfer agreements, FreeGenes provides unambiguous sharing through the Open Material Transfer Agreement (OpenMTA). While iGEM keeps a centralized network that distributes DNA once a year, FreeGenes is designed to continuously distribute DNA globally through a decentralized network of distribution nodes.

FreeGenes is different from the Biobricks framework in its increased efficiency and versatility. While Biobricks only allows you to combine two genetic parts at a time, FreeGenes enables you to combine 10-25 different genetic parts in a single step.

### About this Website

This website is an isomorphic web app built using Node.js, React, Express, and GraphQL.

The app's isomorphic nature means it can be rendered either on the client or on the server, which allows it to get the best of both worlds from server-side rendering (SSR) and single-page apps (SPAs). It is a snappy app with powerful frontend capabilities like SPAs and it has excellent performance and SEO characteristics like traditional SSRs.

The app's use of GraphQL means it can make use of extremely versatile querying capabilities, much more so than with REST APIs. This take a bit getting used to but once you get the hang of it you realize just how powerful GraphQL based querying is.

Development and distribution are facilitated by Webpack, Babel, and Browsersync.

Testing is done using Jest, Enzyme and Puppeteer, with continuous integration on CircleCI.

The main code for this website is located in [the /src folder](/src).

You can find a live version of this website at [freegenes.herokuapp.com](https://freegenes.herokuapp.com).

### About the Team

FreeGenes is a project under the BioBricks Foundation.

Within the BioBricks Foundation, Keoni Gandall is the FreeGenes Project Lead, Linda Kahl is the OpenMTA Advisor and Brian Schulz is the BioBricks Foundation Managing Director.

The FreeGenes board is made up of three members: Drew Endy, David Singh Grewal, and Richard A. Johnson.

To learn more about the BioBricks Foundation team and board, visit the [BioBricks Foundation website](https://biobricks.org/team-and-board/).

### Contributing

There are several ways you can contribute to this project.

First, you can contribute to the website by [submitting an issue](/issues/new). This can be a bug report, a feature request, or a suggestion for improvement.

Second, you can make an improvement yourself by [picking an issue](/issues), posting a comment to tell others you are working on it, writing the code, and then [submitting a pull request](/pulls).

Third, you can contribute to the FreeGenes project itself by submitting genes for inclusion in the registry.

### License

This project is licensed under the [MPL 2.0 License](/LICENSE).
