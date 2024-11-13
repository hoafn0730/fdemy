const routes = {
    home: '/',
    search: '/search',
    detail: '/courses/:slug',
    watch: '/watch/:slug',
    roadMap: '/road-map',
    roadMapDetail: '/road-map/:slug',
    blog: '/blogs',
    blogDetail: '/blogs/:slug',
    profile: '/:username',
    post: {
        path: '/me/posts',
        drafts: 'drafts',
        published: 'published',
    },
    newPost: '/new-post',
    setting: {
        path: '/settings',
        personal: 'personal',
        security: 'security',
    },
    checkout: '/checkout/:slug',
    bookmark: { path: '/me/bookmarks', posts: 'posts' },
    message: '/messages',
    notFound: '/not-found',
};

export default routes;
