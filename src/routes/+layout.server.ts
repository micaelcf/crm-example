import data from '$lib/structs/sidebar.json';
import type { LayoutServerLoad } from './$types';

export const load = (async () => {
    return {
        struct: data
    };
}) satisfies LayoutServerLoad;