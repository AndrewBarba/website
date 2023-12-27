import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"

export type Product = {
  profit: 'Success' | 'FAIL' | '--'
  product: string
  date: string
  description: string
}

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
        {props.products.map((product, index) => (
          <TableRow key={index} className="border-b border-dashed border-gray-400">
            <TableCell className="px-4 py-3">{product.profit}</TableCell>
            <TableCell className="px-4 py-3">{product.product}</TableCell>
            <TableCell className="px-4 py-3">{product.date}</TableCell>
            <TableCell className="px-4 py-3">{product.description}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
