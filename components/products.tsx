import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";

export type Product = {
	outcome: "Success" | "FAIL" | "--";
	product: string;
	date: string;
	description: string;
};

export function Products(props: { products: Product[] }) {
	return (
		<Table className="table-auto border-collapse w-full border border-dashed border-gray-500">
			<TableHeader>
				<TableRow className="text-left border-b border-dashed border-gray-500">
					<TableHead className="px-4 py-3">Outcome</TableHead>
					<TableHead className="px-4 py-3">Product</TableHead>
					<TableHead className="px-4 py-3">Date</TableHead>
					<TableHead className="px-4 py-3">Description</TableHead>
				</TableRow>
			</TableHeader>
			<TableBody>
				{props.products.map((product) => (
					<TableRow
						key={product.product}
						className="border-b border-dashed border-gray-400"
					>
						<TableCell className="px-4 py-3">{product.outcome}</TableCell>
						<TableCell className="px-4 py-3">{product.product}</TableCell>
						<TableCell className="px-4 py-3">{product.date}</TableCell>
						<TableCell className="px-4 py-3">{product.description}</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	);
}
