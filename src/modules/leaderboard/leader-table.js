import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
  SortingState,
  getSortedRowModel,
} from "@tanstack/react-table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState } from "react";

// Define our column structure
const columns = [
  {
    accessorKey: "name",
    header: "User",
    cell: ({ row }) => {
      return (
        <div className="flex items-center space-x-3 gap-2">
          <Avatar>
            <AvatarImage
              src={"/nft.jpg"}
              //   src={`https://avatar.vercel.sh/${row.original.name}.png`}
            />
            <AvatarFallback>{row.original.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <div className="font-medium text-base">{row.original.name}</div>
            <div className="text-sm text-gray-500">{row.original.address}</div>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "proposals",
    header: "Proposals",
    cell: ({ row }) => (
      <div>
        <div>{row.original.proposals}</div>
        <div className="text-sm text-gray-500">0%</div>
      </div>
    ),
  },
  {
    accessorKey: "votes",
    header: ({ column }) => {
      return (
        <div
          className="text-right cursor-pointer"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Votes {column.getIsSorted() === "asc" ? "↑" : "↓"}
        </div>
      );
    },
    cell: ({ row }) => (
      <div className="text-right">
        <div>{row.original.votes}</div>
        <div className="text-sm text-gray-500">
          {row.original.votesPercentage.toFixed(2)}%
        </div>
      </div>
    ),
  },
];

const LeaderTable = ({ data }) => {
  const [sorting, setSorting] = useState([]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting,
    },
  });

  return (
    <div className="h-full overflow-y-auto p-32">
      <div className="rounded-md border h-full overflow-y-auto pb-8">
        <Table>
          <TableHeader className="sticky top-0 bg-background z-50">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead key={header.id} className='px-6'>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  className="cursor-pointer"
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id} className="px-6 py-4">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default LeaderTable;
