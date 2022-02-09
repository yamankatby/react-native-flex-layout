/** @type {import('next').NextConfig} */
import remarkFrontmatter from 'remark-frontmatter';
import { remarkMdxFrontmatter } from 'remark-mdx-frontmatter';
import MDX from '@next/mdx';
import remarkGfm from 'remark-gfm';
import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';
import remarkPrism from 'remark-prism';

const withVanillaExtract = createVanillaExtractPlugin();


/**
 * AST transformer adds `getStaticProps` to the tree based on provided mapping.
 * See https://github.com/mdx-js/mdx/discussions/1896#discussioncomment-1951093
 */
// export function remarkExportMeta() {
//   return function transformer(tree) {
//     tree.children.push({
//       type: 'mdxjsEsm',
//       data: {
//         estree: parse(
//           `
//           export const getStaticProps = async () => {
//             return {
//               props: {
//                 meta: {
//                   title,
//                   description: typeof description === "undefined" ? null : description
//                 }
//               },
//             }
//           }`,
//           {
//             sourceType: 'module',
//             ecmaVersion: 'latest',
//           },
//         ),
//       },
//     });
//   };
// }

const withMDX = MDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter, remarkGfm, remarkPrism]
  }
});
export default withVanillaExtract(withMDX({
  pageExtensions: ['tsx', 'ts', 'js', 'jsx', 'md', 'mdx'],
  reactStrictMode: true,
  experimental: {
    scrollRestoration: true
  }
}));
