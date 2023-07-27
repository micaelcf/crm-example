// uno.config.ts
import {
	defineConfig,
	presetAttributify,
	presetIcons,
	presetTypography,
	presetUno,
	presetWebFonts,
	transformerDirectives,
	transformerVariantGroup
} from 'unocss';

export default defineConfig({
	// shortcuts: [
	// 	// ...
	// ],
	// theme: {
	// 	colors: {
	// 		// ...
	// 	}
	// },
	presets: [
		presetUno(),
		presetAttributify(),
		presetIcons(),
		presetTypography(),
		presetWebFonts({
			fonts: {
				// these will extend the default theme
				// sans: 'Roboto',
				mono: ['Fira Code', 'Fira Mono:400,700']
			}
		})
	],
	transformers: [transformerDirectives(), transformerVariantGroup()]
});
