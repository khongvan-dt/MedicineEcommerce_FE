<script setup>
import { ref } from 'vue';

import AppSubMenu from './AppSubMenu.vue';

const model = ref([
  {
    label: 'Manage',
    icon: 'pi pi-fw pi-compass',
    items: [
      {
        label: 'Medicine',
        icon: 'pi pi-fw pi-users',
        items: [
          {
            label: 'List of medications',
            icon: 'pi pi-fw pi-list',
            to: '/admin/listmedications'
          },
          {
            label: 'Medicine batches',
            icon: 'pi pi-fw pi-list',
            to: '/admin/medicinebatches'
          },
          {
            label: 'Medicine categories',
            icon: 'pi pi-fw pi-list',
            to: '/admin/medicinecategories'
          },
          {
            label: 'Medicine medias',
            icon: 'pi pi-fw pi-list',
            to: '/admin/medicinemedias'
          }
           
        ]
      },
    ],
  },
  {
    label: 'Doctor',
    icon: 'pi pi-fw pi-compass',
    items:[
    {
            label: 'Doctor profiles',
            icon: 'pi pi-fw pi-list',
            to: '/admin/doctorprofiles'
           },
          {
            label: 'Doctor services',
            icon: 'pi pi-fw pi-list',
            to: '/admin/doctorservices'
          },
    ]
  },
  {
    label: 'Sevices',
    icon: 'pi pi-fw pi-compass',
    items:[
    {
            label: 'Consultations',
            icon: 'pi pi-fw pi-list',
            to: '/admin/consultations'
           },
          {
            label: 'List of service',
            icon: 'pi pi-fw pi-list',
            to: '/admin/listservice'
          },
          {
            label: 'Service bookings',
            icon: 'pi pi-fw pi-list',
            to: '/admin/servicebookings'
          },
          {
            label: 'Service types',
            icon: 'pi pi-fw pi-list',
            to: '/admin/servicetypes'
          },
    ]
  },
  {
    label: 'Setting Layout User',
    icon: 'pi pi-fw pi-compass',
    items:[
    {
            label: 'Attributes',
            icon: 'pi pi-fw pi-list',
            to: '/admin/attributes'
           },
          {
            label: 'Brands',
            icon: 'pi pi-fw pi-list',
            to: '/admin/brands'
          },
          {
            label: 'Categories',
            icon: 'pi pi-fw pi-list',
            to: '/admin/categories'
          },
    ]
  },

  {
    label: 'Endow',
    icon: 'pi pi-fw pi-compass',
    items:[
    {
            label: 'Vouchers',
            icon: 'pi pi-fw pi-list',
            to: '/admin/vouchers'
           },
          {
            label: 'Discounts',
            icon: 'pi pi-fw pi-list',
            to: '/admin/discounts'
          }
         
    ]
  }











]);
</script>

<template>
  <AppSubMenu :model="model" />
</template>

<style lang="scss" scoped></style>
