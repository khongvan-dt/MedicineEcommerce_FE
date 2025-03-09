<script>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useOrganizationStore } from '@/stores/organization';
import { useConfirm } from 'primevue/useconfirm';  // Import PrimeVue Confirm
import CreateForm from './Create.vue';
import { Medicines } from '@/services/admin/Medicines';

export default {
    components: { CreateForm },
    setup() {
        const medicines = ref([]);
        const form = ref({ visible: false });
        const router = useRouter();
        const organizationStore = useOrganizationStore();
        const selectedMedicines = ref([]);
        const confirm = useConfirm();  

        const columns = ref([
            { field: 'name', label: 'Medicines Name', visible: true },
            { field: 'created_at', label: 'Created At', visible: true },
            { field: 'code', label: 'Code', visible: false },
            { field: 'origin', label: 'Origin', visible: false },
            { field: 'manufacturer', label: 'Manufacturer', visible: false }
        ]);

        onMounted(async () => {
            try {
                const response = await Medicines.getMedicines();
                medicines.value = response.data;
            } catch (error) {
                console.error('Lỗi khi lấy dữ liệu medicines:', error);
            }
        });

        // 🛠 Hiển thị hộp thoại xác nhận trước khi xóa nhiều mục
        const confirmDeleteSelected = () => {
            if (!selectedMedicines.value.length) {
                alert('Vui lòng chọn ít nhất một mục để xóa.');
                return;
            }

            confirm.require({
                message: `Bạn có chắc chắn muốn xóa ${selectedMedicines.value.length > 1 ? 'các bản ghi đã chọn' : 'bản ghi này'} không?`,
                header: 'Xác nhận',
                icon: 'pi pi-info-circle',
                rejectLabel: 'Huỷ',
                acceptLabel: 'Đồng ý',
                rejectClass: 'p-button-secondary p-button-outlined',
                acceptClass: 'p-button-danger',
                accept: async () => {
                    try {
                        const idsToDelete = selectedMedicines.value.map((med) => med.id);
                        await Medicines.deleteMedicines(idsToDelete);
                        medicines.value = medicines.value.filter((med) => !idsToDelete.includes(med.id));
                        selectedMedicines.value = [];
                    } catch (error) {
                        console.error('Lỗi khi xóa thuốc:', error);
                    }
                }
            });
        };

        // 🛠 Hiển thị hộp thoại xác nhận trước khi xóa từng mục
        const confirmDelete = (id) => {
            confirm.require({
                message: `Bạn có chắc chắn muốn xóa bản ghi này không?`,
                header: 'Xác nhận',
                icon: 'pi pi-info-circle',
                rejectLabel: 'Huỷ',
                acceptLabel: 'Đồng ý',
                rejectClass: 'p-button-secondary p-button-outlined',
                acceptClass: 'p-button-danger',
                accept: async () => {
                    try {
                        await Medicines.deleteMedicines([id]);
                        medicines.value = medicines.value.filter((med) => med.id !== id);
                    } catch (error) {
                        console.error('Lỗi khi xóa thuốc:', error);
                    }
                }
            });
        };

        return { 
            medicines, columns, form, selectedMedicines, 
            confirmDeleteSelected, confirmDelete, 
        };
    }
};


</script>

<template>
    <div class="card">
        <ConfirmDialog />
        <DataTable v-model:selection="selectedMedicines" :value="medicines" dataKey="id" :paginator="true" :rows="5" showCurrentPageReport scrollable>
            <template #header>
                <div class="flex flex-wrap gap-2 items-center justify-between">
                    <span class="font-semibold text-xl">Medicines Table</span>
                    <div class="flex gap-2 mx-auto">
                        <IconField class="w-full sm:w-80 order-1 sm:order-none">
                            <InputIcon class="pi pi-search" />
                            <InputText placeholder="Tìm kiếm..." class="w-full" />
                        </IconField>
                        <Button icon="pi pi-filter-slash" severity="secondary" outlined @click="" />
                    </div>
                    <Button type="button" icon="pi pi-trash" label="Xóa các mục đã chọn" 
                    class="w-full sm:w-auto order-none sm:order-1 p-button-danger" 
                    @click="confirmDeleteSelected()" />
                                    <Button type="button" icon="pi pi-user-plus" label="Thêm mới" outlined @click="openForm()" />
                </div>
            </template>
            <Column selectionMode="multiple" style="width: 3rem"></Column>

            <Column v-for="col in columns" :key="col.field" :field="col.field" :header="col.label" sortable>
                <template #body="{ data }">{{ data[col.field] }}</template>
            </Column>

            <Column header="Tác vụ">
                <template #body="{ data }">
                    <Button icon="pi pi-pencil" outlined class="mr-2" @click="openForm(data.id)" />
                    <Button icon="pi pi-trash" outlined severity="danger" @click="confirmDelete(data.id)" />
                </template>
            </Column>
        </DataTable>

        <Menu :model="menuItems" popup />
        <CreateForm v-model:visible="form.visible" />
    </div>
</template>
