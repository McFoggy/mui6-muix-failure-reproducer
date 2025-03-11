import commonjs from "@rollup/plugin-commonjs"
import json from "@rollup/plugin-json"
import resolve from "@rollup/plugin-node-resolve"
import url from "@rollup/plugin-url"
import peerDepsExternal from "rollup-plugin-peer-deps-external"
import typescript from "rollup-plugin-typescript2"

/**
 * @type {import('rollup').RollupOptions}
 */
const config = {
    input: "src/index.ts",
    strictDeprecations: true,
    output: [
        {
            dir: "build/esm",
            format: "esm",
            sourcemap: true,
        },
        {
            dir: "build/cjs",
            format: "cjs",
            sourcemap: true,
        },
    ],
    plugins: [
        peerDepsExternal(),
        resolve(),
        commonjs(),
        typescript({
            tsconfig: "tsconfig-build.json",
            useTsconfigDeclarationDir: true,
        }),
        json({
            exclude: ["node_modules/@format-js/ecma402-abstract/**"],
        }),
        url(),
    ],
}

export default config
