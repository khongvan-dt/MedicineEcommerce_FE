import AppLayout from '@/layout/AppLayout.vue';

const admin = {
  path: '/admin',
  component: AppLayout,
  children: [
    {
      path: 'customers',
      name: 'admin-customer',
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
      path: 'listmedications',
      name: 'admin-listmedications',
      meta: {
        breadcrumb: ['List of medications'], 
       },
      component: () => import('@/views/admin/medications/Index.vue')
    },  
    {
      path: 'medicinebatches',
      name: 'admin-medicinebatches',
      meta: {
        breadcrumb: ['Medicine batches'], 
       },
      component: () => import('@/views/admin/medicineBatches/Index.vue')
    },   
    {
      path: 'medicinecategories',
      name: 'admin-medicinecategories',
      meta: {
        breadcrumb: ['Medicine categories'], 
       },
      component: () => import('@/views/admin/medicineCategories/Index.vue')
    },   
    {
      path: 'medicinemedias',
      name: 'admin-medicinemedias',
      meta: {
        breadcrumb: ['Medicine medias'], 
       },
      component: () => import('@/views/admin/medicinemedias/Index.vue')
    },
    {
      path: 'doctorprofiles',
      name: 'admin-doctorprofiles',
      meta: {
        breadcrumb: ['Doctor profiles'], 
       },
      component: () => import('@/views/admin/doctorprofiles/Index.vue')
    }, 
    {
      path: 'doctorservices',
      name: 'admin-doctorservices',
      meta: {
        breadcrumb: ['Doctor services'], 
       },
      component: () => import('@/views/admin/doctorservices/Index.vue')
    },      
    {
      path: 'attributes',
      name: 'admin-attributes',
      meta: {
        breadcrumb: ['Attributes'], 
       },
      component: () => import('@/views/admin/attributes/Index.vue')
    },     

    {
      path: 'brands',
      name: 'admin-brands',
      meta: {
        breadcrumb: ['Brands'], 
       },
      component: () => import('@/views/admin/brands/Index.vue')
    },  

    {
      path: 'categories',
      name: 'admin-categories',
      meta: {
        breadcrumb: ['Categories'], 
       },
      component: () => import('@/views/admin/categories/Index.vue')
    }, 
    {
      path: 'consultations',
      name: 'admin-consultations',
      meta: {
        breadcrumb: ['Consultations'], 
       },
      component: () => import('@/views/admin/consultations/Index.vue')
    }, 
    {
      path: 'listservice',
      name: 'admin-listservice',
      meta: {
        breadcrumb: ['List of service'], 
       },
      component: () => import('@/views/admin/listservice/Index.vue')
    }, 
    {
      path: 'servicebookings',
      name: 'admin-servicebookings',
      meta: {
        breadcrumb: ['Service bookings'], 
       },
      component: () => import('@/views/admin/servicebookings/Index.vue')
    }, 
    {
      path: 'servicetypes',
      name: 'admin-servicetypes',
      meta: {
        breadcrumb: ['Service types'], 
       },
      component: () => import('@/views/admin/servicetypes/Index.vue')
    }, 
    {
      path: 'vouchers',
      name: 'admin-vouchers',
      meta: {
        breadcrumb: ['Vouchers'], 
       },
      component: () => import('@/views/admin/vouchers/Index.vue')
    }, 
    {
      path: 'discounts',
      name: 'admin-discounts',
      meta: {
        breadcrumb: ['Discounts'], 
       },
      component: () => import('@/views/admin/discounts/Index.vue')
    } 
  ]
};

export default admin;