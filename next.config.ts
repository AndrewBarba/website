import type { NextConfig } from "next";

export default {
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
} satisfies NextConfig;
