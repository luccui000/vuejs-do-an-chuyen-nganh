import { ref, computed, reactive } from 'vue';
import apis from '@/services/api.service';

export const useFetch = (url, config = { method: 'GET '}) => {
    const data = ref(null);
    const response = ref(null);
    const error = ref(null);
    const loading = ref(false);

    const fetch =  async  () => {
        try {
            const result = await apis.request({
                url,
                ...config
            });
            response.value = result;
            data.value = result.data;
            loading.value = true;
        } catch (exception) {
            error.value = exception;
        } finally {
            loading.value = false;
        }

    }
    !config.skip && fetch();
    return { response, data, loading, error, fetch };
}

const cacheMap = reactive(new Map());

export const useFetchCache = (key, url, config) => {
    const info = useFetch(url, { skip: true, ...config });

    const update = computed(() => cacheMap.set(key, info.response.value));
    const clear = computed(() => cacheMap.set(key, undefined));

    const fetch = async () => {
        try {
            await info.fetch();
            update();
        } catch (exception) {
            clear();
        }
    }
    const response = computed(() => cacheMap.get(key));
    const data = computed(() => response.value?.data);

    if(response.value == null)
        fetch()
    return {
        ...info,
        fetch,
        data,
        response,
        clear
    }
}