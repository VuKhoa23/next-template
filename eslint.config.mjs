import path from "node:path";
import { fileURLToPath } from "node:url";

import { fixupConfigRules, fixupPluginRules } from "@eslint/compat";
import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import testingLibrary from "eslint-plugin-testing-library";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default [{
    ignores: ["jest.setup.js", "*.config.js"],
}, ...fixupConfigRules(compat.extends(
    "eslint:recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:jsx-a11y/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@next/next/recommended",
    "plugin:jest-dom/recommended",
)), {
    plugins: {
        "testing-library": testingLibrary,
        "@typescript-eslint": fixupPluginRules(typescriptEslint),
        "simple-import-sort": simpleImportSort,
    },

    settings: {
        "import/parsers": {
            "@typescript-eslint/parser": [".ts", ".tsx"],
        },

        "import/resolver": {
            typescript: {
                node: true,
                typescript: true,
                alwaysTryTypes: true,
                project: ["tsconfig.json"],
            },
        },

        react: {
            version: "detect",
        },
    },

    rules: {
        "max-lines": ["error", 300],
        "simple-import-sort/imports": "error",
        "simple-import-sort/exports": "error",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/ban-types": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "no-negated-condition": "error",
        'no-restricted-imports': [
            'error',
            {
                patterns: [
                    {
                        group: ['../*'],
                        message: 'Usage of relative parent imports is not allowed.',
                    },
                ],
            },
        ],
        "import/first": ["error"],

        "import/newline-after-import": ["error", {
            count: 1,
        }],

        "react/prop-types": ["error", {
            skipUndeclared: true,
        }],

        "react/no-unknown-property": ["error", {
            ignore: ["jsx"],
        }],

        "jsx-a11y/click-events-have-key-events": "off",
        "jsx-a11y/no-static-element-interactions": "off",

        "@typescript-eslint/no-unused-vars": ["error", {
            argsIgnorePattern: "^_",
            varsIgnorePattern: "^_",
            caughtErrorsIgnorePattern: "^_",
        }],
    },
}, {
    files: ["**/*.[jt]s?(x)"],

    rules: {
        "simple-import-sort/imports": ["error", {
            groups: [
                ["^\\u0000"],
                ["^next", "^react", "^"],
                ["^@(?!(testing|ant|reduxjs)).+"],
                ["^\\.", "^\\.\\."],
            ],
        }],
    },
}];