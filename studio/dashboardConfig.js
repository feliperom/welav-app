export default {
  widgets: [
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
                  buildHookId: '5fb824323cb92e01602c79c1',
                  title: 'Sanity Studio',
                  name: 'welav-app-studio',
                  apiId: '2f32cbc6-8a5d-4d31-8710-7a53dd76b056'
                },
                {
                  buildHookId: '5fb8243238d31600c8b09b1e',
                  title: 'Blog Website',
                  name: 'welav-app',
                  apiId: '69525af7-b680-4303-a473-c60e146506dd'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/feliperom/welav-app',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://welav-app.netlify.app', category: 'apps'}
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
