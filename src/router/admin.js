import AppLayout from '@/layout/AppLayout.vue';

const admin = {
  path: '/admin',
  component: AppLayout,
  children: [
    {
      path: 'users',
      name: 'admin-user',
      meta: {
        breadcrumb: ['Users'],
        permission: 'admin.users.index'
      },
      component: () => import('@/views/admin/user/Index.vue')
    },
    {
      path: 'roles',
      name: 'admin-roles',
      meta: {
        breadcrumb: ['roles'],
        permission: 'admin.roles.index'
      },
      component: () => import('@/views/admin/user-management/roles/Index.vue')
    },
    {
      path: 'nguoidung',
      name: 'admin-nguoidung',
      meta: {
        breadcrumb: ['Quản lý người dùng']
      },
      component: () => import('@/views/users/Index.vue')
    },
  ]
};

export default admin;