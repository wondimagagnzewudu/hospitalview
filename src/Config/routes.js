import React from 'react';


import NotFound from '../Pages/NotFound';
import Createuser from '../User/Createuser';
import UserList from '../User/UserList';
import Edituser from '../User/Edituser';
import AdminList from '../User/AdminList';
import ControllerList from '../User/ControllerList';
import NurseList from '../User/NurseList';
import EditPassword from '../User/EditPassword';
import Createfolder from '../folder/Createfolder';
import FolderList from '../folder/FolderList';
import Search_folder from '../folder/Search_folder';
import Createtracer from '../tracer/Createtracer';
import TracerList from '../tracer/TracerList';
import Home from '../Home/Home';
import Login from '../Login';
const routes = [
    {
        path: '/login',
        component: Login,
        isPrivate: false,
    },
    {
        path: '/Home',
        component: Home,
        isPrivate: true,
        isPriviladge: 'all',
    },
    {
        path: '/NotFound',
        component: NotFound,
        isPrivate: true,
        isPriviladge: 'all',
    },
    {
        path: '/ UserList',
        component: UserList,
        isPrivate: true,
        isPriviladge: 'all',
    }, {
        path: '/Createuser',
        component: Createuser,
        isPrivate: true,
        isPriviladge: 'all',
    }, {
        path: '/Edituser',
        component: Edituser,
        isPrivate: true,
        isPriviladge: 'all',
    }, {
        path: '/AdminList',
        component: AdminList,
        isPrivate: true,
        isPriviladge: 'all',
    }, {
        path: '/ControllerList',
        component: ControllerList,
        isPrivate: true,
        isPriviladge: 'all',
    }, {
        path: '/NurseList',
        component: NurseList,
        isPrivate: true,
        isPriviladge: 'all',
    }, {
        path: '/EditPassword',
        component: EditPassword,
        isPrivate: true,
        isPriviladge: 'all',
    }, {
        path: '/Createfolder',
        component: Createfolder,
        isPrivate: true,
        isPriviladge: 'all',
    }, {
        path: '/FolderList',
        component: FolderList,
        isPrivate: true,
        isPriviladge: 'all',
    }, {
        path: '/Search_folder',
        component: Search_folder,
        isPrivate: true,
        isPriviladge: 'all',
    }, {
        path: '/Createtracer',
        component: Createtracer,
        isPrivate: true,
        isPriviladge: 'all',
    }, {
        path: '/TracerList',
        component: TracerList,
        isPrivate: true,
        isPriviladge: 'all',
    },
    {
        path: '/*',
        component: NotFound,
        isPrivate: true,
    },
];

export default routes;