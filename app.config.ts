export default defineAppConfig({
  docus: {
    title: 'Cobalt',
    description: 'The better language that we all need.',
    image: '',
    socials: {
      github: 'cobalt-lang/cobalt'
    },
    github: {
      dir: 'content',
      branch: 'main',
      repo: 'cobalt-docs',
      owner: 'cobalt-lang',
      edit: true
    },
    aside: {
      level: 0,
      collapsed: false,
      exclude: []
    },
    main: {
      padded: true,
      fluid: true
    },
    header: {
      logo: true,
      showLinkIcon: true,
      exclude: [],
      fluid: true
    }
  }
})
