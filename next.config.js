/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,

    env: {
        APP_NAME: "Bansos Ku"
    },

    async rewrites() {
        return [
            {
                source: '/verifikasi',
                destination: '/verification',
            }
        ]
    },
}
