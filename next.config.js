/** @type {import('next').NextConfig} */
const nextConfig = {
  // async headers() {
  //   return [
  //     {
  //       // source: '/(.*)',
  //       source: '/:path*',
  //       headers: [ 
  //         // {
  //         //   key: 'Set-Cookie',
  //         //   // value: 'key=value; SameSite=None; Secure;',
  //         //   value: 'SameSite=None',
  //         // },{
  //         //   key: 'Set-Cookie',
  //         //   value: 'Secure',
  //         // },
  //         {key:'Set-Cookie',value:'cross-site-cookie=whatever; SameSite=None; Secure'}
  //       ],
  //     },
  //   ];
  // },
  // async rewrites() {
  //   return [
  //     {
  //       source: '/api/:path*',
  //       destination: 'https://practicaltrivia.com/:path*',
  //     },
  //   ]
  // },
}

module.exports = nextConfig
