export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f70e616a28201b24bb1e8b2',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-15prr28d',
                  apiId: '498e6cda-29a3-4906-9267-32e3721791f1'
                },
                {
                  buildHookId: '5f70e616879ac70226d43a51',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-qgpw2mh5',
                  apiId: '88474d3b-f2a8-447f-8f57-67230fe1ffb4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/margaiwangara/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-qgpw2mh5.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
