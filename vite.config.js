import { defineConfig } from 'vite'

export default defineConfig({
	// Основные параметры конфигурации
	build: {
		outDir: 'dist', // Путь к папке вывода
		cssCodeSplit: true,
	},
})
