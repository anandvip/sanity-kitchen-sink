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
                  buildHookId: '6016337b13fd1780063eed68',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-876xg8n5',
                  apiId: '3193bf64-be8b-4d36-8c1c-9ada4f42d887'
                },
                {
                  buildHookId: '6016337b34cec9cec2e0908c',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-9s6xjs78',
                  apiId: '3bed8754-f426-48d1-8fb9-0b6e20955124'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/anandvip/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-9s6xjs78.netlify.app', category: 'apps'}
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
