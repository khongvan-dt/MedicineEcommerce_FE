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
  ]
};

export default admin;