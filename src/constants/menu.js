export const adminMenu = [
  {
    label: 'Quản lý',
    icon: 'pi pi-fw pi-compass',
    items: [
      {
        label: 'Doctor',
        icon: 'pi pi-fw pi-users',
        to: '/admin/manage',
        permission: 'admin.manage.index',
      },
      {
        label: 'Người dùng demo',
        icon: 'pi pi-fw pi-users',
        to: '/admin/nguoidung',
        permission: 'admin.users.index',
      }
      
    ],
  },
];

export const clientMenu = [
  {
    label: 'Medicine Ecommerce App',
    items: [
      {
        label: 'Tổng quan',
        icon: 'pi pi-globe',
        to: '/',
      },
      {
        label: 'Công việc',
        icon: 'pi pi-check-square',
        to: '/',
      },
    ],
  },
];
