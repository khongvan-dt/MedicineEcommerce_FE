import { sendPost } from '@/services/axios';
import localStorage from '@/services/localStorage';
import { defineStore, getActivePinia } from 'pinia';
import { useAppStore } from './app';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isLoading: false,
    isSuccess: false,
    message: '',
    errors: [],
    isAuthenticated: false,
    user: {},
    token: {
      accessToken: null,
      expiredTime: null,
      refreshToken: null,
    },
    registerState: {
      isSuccess: false,
    },
    credential: {
      email: 'tiennd.ninasoft@gmail.com',
      password: 'Tienhau@79'
    },

    verifySuccess: false,
    verificationStatus: null,
    redirectUrl: '',
  }),
  getters: {
    getUser: (state) => state.user,
  },
  actions: {
    login(credential) {
      const appStore = useAppStore();
      this.isLoading = true;
      appStore.$patch({ loading: true });

      sendPost('auth/login', credential)
        .then((response) => {
          localStorage.saveToken(response.data.token);
          localStorage.setUser(response.data.user);
          this.isAuthenticated = true;
          appStore.$patch({
            toast: { detail: response.message, severity: response.status == 200 ? 'success' : 'error' },
            loading: false,
            selectedCompany: response.data.user.companies.length ? response.data.user.companies[0] : 0
          })
        })
        .catch((error) => {
          this.errors = error.data?.errors;
          appStore.$patch({ toast: { detail: error.message, severity: 'error', visible: true } });
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
    logout() {
      const appStore = useAppStore();
      sendPost('auth/logout')
        .then((response) => {
          const activePinia = getActivePinia();
          appStore.$patch({ toast: { detail: response.message, severity: 'success' } });
          localStorage.destroy();
          activePinia._s.forEach((store) => store.$reset());
        })
        .catch((error) => {
          appStore.$patch({ toast: { detail: error.message, severity: 'error' } });
        });
    },
  },
});
