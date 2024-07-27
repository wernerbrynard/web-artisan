/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Output' specifies the type of output, not the directory.
  distDir: 'out',    // Specify the directory where the static files should be placed.
};

export default nextConfig;