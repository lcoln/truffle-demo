/// <reference types="next" />
/// <reference types="next/image-types/global" />

// NOTE: This file should not be edited
// see https://nextjs.org/docs/basic-features/typescript for more information.

declare interface Window {
  ethereum: any
  web3: any
}

declare namespace JSX {
  interface IntrinsicElements {
    'tree-wc': any;
  }
}