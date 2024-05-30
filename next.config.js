/** @type {import('next').NextConfig} */
const nextConfig = {
	async headers() {
		return [
			{
				source: "/",
				headers: [
					{
						key: "x-custom-header",
						value: "foobar",
					},
				],
			},
		];
	},
	async redirects() {
		return [
			{
				source: "/",
				destination: "/somewhere-else",
				permanent: false,
				has: [
					{
						type: "header",
						key: "x-custom-header",
						value: "a",
					},
				],
			},
		];
	},
};

module.exports = nextConfig;
