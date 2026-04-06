import globals from 'globals';
import pluginJs from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginUnicorn from 'eslint-plugin-unicorn';

/** @type {import('eslint').Linter.Config[]} */
export default [
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  // pluginJs.configs.recommended,

  // 1. Рекомендуемая настройка eslint в таске по AsyncRace
  eslintPluginUnicorn.configs.recommended,

  // 2. Рекомендуемая настройка Prettier (включает плагин и отключает конфликты)
  eslintConfigPrettier,
];
