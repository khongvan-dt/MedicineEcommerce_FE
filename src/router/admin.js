import AppLayout from '@/layout/AppLayout.vue';

const admin = {
  path: '/admin',
  component: AppLayout,
  children: [
    {
      path: 'users',
      name: 'admin-user',
      meta: {
        breadcrumb: ['Users']
      },
      component: () => import('@/views/admin/user/Index.vue')
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