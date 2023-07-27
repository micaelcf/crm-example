// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
import type { AttributifyAttributes } from '@unocss/preset-attributify';

declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}
	declare namespace svelteHTML {
		// eslint-disable-next-line @typescript-eslint/no-empty-interface
		interface HTMLAttributes<any> extends AttributifyAttributes {}
	}
}

export {};
