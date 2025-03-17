import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export', 
  basePath: '',
  assetPrefix: '/', 
  images: {
    unoptimized:true,
    loader: 'imgix',
    path: '',
  },
};

export default nextConfig;


