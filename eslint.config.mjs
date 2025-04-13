import globals from 'globals';
import pluginJs from '@eslint/js';


export default [
  {
    languageOptions: {
      globals: globals.node
    }
  },
  {
    rules: {
      "@typescript-eslint/no-unused-vars": "off"
    }
  }
];

