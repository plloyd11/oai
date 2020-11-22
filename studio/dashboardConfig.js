export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5fbaa230f6523641b48836aa',
                  title: 'Sanity Studio',
                  name: 'oai-studio',
                  apiId: '62773e5c-2ad5-4f7b-a823-7910c700ca3a'
                },
                {
                  buildHookId: '5fbaa2308ed60c0c554ef277',
                  title: 'Blog Website',
                  name: 'oai-web',
                  apiId: '24fad3bf-b279-4efd-a92f-7d30b25b16f4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/plloyd11/oai',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://oai-web.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
