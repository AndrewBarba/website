import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Handlee } from "next/font/google";
import "./globals.css";

const handlee = Handlee({
	weight: "400",
	style: ["normal"],
	subsets: ["latin"],
	display: "swap",
	variable: "--font-handlee",
});

export const metadata: Metadata = {
	title: "Andrew Barba",
	description: "Software Engineer",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={handlee.variable}>
			<body className="font-sans">
				{children}
				<Analytics />
			</body>
		</html>
	);
}
