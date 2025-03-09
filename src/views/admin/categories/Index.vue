<script>
    import { ref, onMounted, computed } from 'vue';
    import { Categories } from '@/services/admin/Categories';
    import { useCategoryStore } from '@/stores/admin/categoryStore'; 
    import { mapState } from 'pinia';
    
    export default {
        setup() {
            const categoryStore = useCategoryStore();
    
            onMounted(async () => {
                await categoryStore.fetchCategories();
            });
    
            const deleteCategorie = async (id) => {
                try {
                    await Categories.deleteCategory(id);
                    await categoryStore.fetchCategories(); 
                } catch (error) {
                    console.error("Error deleting category:", error);
                }
            };
    
            return {
                categoryStore,
                deleteCategorie
            };
        },
        computed: {
            ...mapState(useCategoryStore, ['categories', 'isLoading', 'form']) 
        }
    };
    </script>
    
    
    <template>
        <div class="card">
            <ConfirmDialog></ConfirmDialog>
            <DataTable :value="categories" dataKey="id" :paginator="true" :rows="5" showCurrentPageReport scrollable responsiveLayout>
                <template #header>
                    <div class="flex justify-between items-center">
                        <span class="font-semibold text-xl">Categories Table</span>
                        <Button type="button" icon="pi pi-user-plus" label="Thêm mới" outlined @click="openForm(null)" />
                    </div>
                </template>
    
                <Column field="name" header="Category Name" sortable>
                    <template #body="{ data }">
                        <span class="text-primary cursor-pointer">{{ data.name }}</span>
                    </template>
                </Column>
    
                <Column field="createdAt" header="Ngày tạo" sortable>
                    <template #body="{ data }">
                        {{ new Date(data.createdAt).toLocaleString() }}
                    </template>
                </Column>
    
                <Column field="parent" header="Parent Category">
                    <template #body="{ data }">
                        {{ data.parent || 'None' }}
                    </template>
                </Column>
    
                <Column field="action" header="Actions">
                    <template #body="{ data }">
                        <Button icon="pi pi-pencil" outlined class="mr-2" @click="openForm(data.id)" />
                        <Button icon="pi pi-trash" outlined severity="danger" @click="deleteCategorie(data.id)" />
                    </template>
                </Column>
            </DataTable>
    
            <Menu :model="menuItems" ref="menuRef" popup class="w-20rem" />
            <CreateForm v-model:visible="form.visible" />
        </div>
    </template>
    