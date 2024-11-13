import config from '~/config';
import HeaderOnly from '~/layouts/HeaderOnly';

import Home from '~/pages/Home';
import CourseDetail from '~/pages/CourseDetail';
import Watch from '~/pages/Watch';
import Blog from '~/pages/Blog';
import BlogDetail from '~/pages/BlogDetail';
import RoadMap from '~/pages/RoadMap';
import RoadMapDetail from '~/pages/RoadMapDetail';
import Search from '~/pages/Search/Search';
import Message from '~/pages/Message';
import Profile from '~/pages/Profile';
import Setting from '~/pages/Setting';
import SettingPage from '~/pages/Setting/SettingPage';
import NotFound from '~/pages/NotFound';
import MyPosts from '~/pages/Post/MyPosts';
import Post from '~/pages/Post';
import NewPost from '~/pages/NewPost';
import Checkout from '~/pages/Checkout';
import Bookmark from '~/pages/Bookmark';
import MyBookmarks from '~/pages/Bookmark/MyBookmarks';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.search, component: Search, layout: HeaderOnly },
    { path: config.routes.detail, component: CourseDetail },
    { path: config.routes.roadMap, component: RoadMap },
    { path: config.routes.roadMapDetail, component: RoadMapDetail },
    { path: config.routes.blog, component: Blog },
    { path: config.routes.blogDetail, component: BlogDetail },
    {
        path: config.routes.setting.path,
        component: Setting,
        layout: HeaderOnly,
        children: [
            { path: config.routes.setting.personal, component: SettingPage },
            { path: config.routes.setting.security, component: SettingPage },
        ],
    },
    { path: config.routes.notFound, component: NotFound, layout: null },
    { path: '*', component: NotFound, layout: null },
];

const privateRoutes = [
    { path: config.routes.profile, component: Profile, layout: HeaderOnly },
    {
        path: config.routes.bookmark.path,
        component: Bookmark,
        children: [
            {
                path: config.routes.bookmark.posts,
                component: MyBookmarks,
            },
        ],
    },
    { path: config.routes.watch, component: Watch, layout: null },
    { path: config.routes.message, component: Message },
    { path: config.routes.newPost, component: NewPost, layout: HeaderOnly },
    { path: config.routes.checkout, component: Checkout },
    {
        path: config.routes.post.path,
        component: Post,
        children: [
            { path: config.routes.post.drafts, component: MyPosts },
            { path: config.routes.post.published, component: MyPosts },
        ],
    },
];

export { publicRoutes, privateRoutes };
