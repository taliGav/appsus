// APPSUS
import appsusApp from './pages/appsus-app.cmp.js';
import homePage from './pages/home-page.cmp.js';
// ABOUT
import aboutPage from './pages/about-page.cmp.js';
// EMAIL
import emailApp from './apps/misterEmail/pages/email-app.cmp.js';
import emailCompose from './apps/misterEmail/pages/email-compose.cmp.js';
import emailDetails from './apps/misterEmail/pages/email-details.cmp.js';
import emailInbox from './apps/misterEmail/cmps/email-inbox.cmp.js';
import emailSent from './apps/misterEmail/cmps/email-sent.cmp.js';
import emaildDrafts from './apps/misterEmail/cmps/email-drafts.cmp.js';
import emailTrash from './apps/misterEmail/cmps/email-trash.cmp.js';

// KEEP
import keepApp from './apps/missKeep/pages/keep-app.cmp.js';
// BOOKS
import bookApp from './apps/missBook/pages/book-app.cmp.js';
import bookDetails from './apps/missBook/pages/book-details.cmp.js';

const routes = [
    {
        path: '/',
        component: homePage
    },
    {
        path: '/about',
        component: aboutPage
    },
    {
        path: '/appsusMain',
        component: appsusApp
    },
    {
        path: '/keep',
        component: keepApp
    },
    {
        path: '/email',
        component: emailApp,
        children: [
            {
                path: 'inbox',
                component: emailInbox
            },
            {
                path: 'sent',
                component: emailSent
            },
            {
                path: 'drafts',
                component: emaildDrafts
            },
            {
                path: 'trash',
                component: emailTrash
            },
        ]
    },
    {
        path: '/email/compose',
        component: emailCompose
    },
    {
        path: '/email/:emailId',
        component: emailDetails,
    },
    {
        path: '/book',
        component: bookApp
    },
    {
        path: '/book/:bookId',
        component: bookDetails
    }
];

export const router = VueRouter.createRouter({
    routes,
    history: VueRouter.createWebHashHistory()
});