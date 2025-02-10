<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { dataTablePagination, filterTypes } from '@/constants';
import { getPerPage, setPerPage } from "@/services/localStorage";
import { useOrganizationStore } from '@/stores/organization';
import { mapState } from 'pinia';
import { Toolbar } from 'primevue';

export default {
    setup() {   

    },
    data() {

    },
    computed: {

    },
    watch: {

    }
}
</script>
<template>
<div class="card">
    <Toolbar>
        <template #start>
            <Button label="Thêm mới" icon="pi pi-plus" severity="secondary"/>
        </template>
    </Toolbar>
</div>
</template>