import { defineBuildConfig } from 'unbuild';

export default defineBuildConfig([
  {
    entries: [
      './src/index',
      {
        builder: 'mkdist',
        input: './src',
        outDir: './dist',
        format: 'esm',
        ext: 'mjs',
      },
      {
        builder: 'mkdist',
        input: './src',
        outDir: './dist',
        format: 'cjs',
        ext: 'cjs',
      },
    ],
    clean: true,
    declaration: true,
  },
]);
