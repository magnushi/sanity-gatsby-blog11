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
                  buildHookId: '5df85dc19109d347bd9b4c85',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog11-studio-nsihx71e',
                  apiId: 'dad2ffc7-ce46-4a48-8b15-072f276237db'
                },
                {
                  buildHookId: '5df85dc11f9fa5ffc9684954',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog11-web',
                  apiId: '7e056841-1bfc-4d6b-86ac-6deef50f2b1d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/magnushi/sanity-gatsby-blog11',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog11-web.netlify.com', category: 'apps' }
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
