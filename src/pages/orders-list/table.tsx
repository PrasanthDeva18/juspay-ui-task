import { useMemo, useState } from "react";
import { MantineReactTable, useMantineReactTable } from "mantine-react-table";

import {
  IconCalendar,
  IconCopy,
  IconDotsVertical,
  IconPlus,
} from "@tabler/icons-react";
import { data } from "./data";
import "./table.css";
import { Group, Avatar, Box, Title, ActionIcon } from "@mantine/core";

const StatusBadge = ({ status }: any) => {
  const statusClass = status.toLowerCase().replace(" ", "-");

  return (
    <div className={`status-cell ${statusClass}`}>
      <span className="status-dot"></span>
      <p>{status}</p>
    </div>
  );
};

const TableComponent = () => {
  const columns = useMemo(
    () => [
      {
        accessorKey: "orderId",
        header: "Order ID",
        size: 100,
      },
      {
        accessorKey: "user.name",
        header: "User",
        Cell: ({ row }: any) => (
          <Group>
            <Avatar src={row.original.user.avatar} size={36} radius="xl" />
            <p>{row.original.user.name}</p>
          </Group>
        ),
      },
      {
        accessorKey: "project",
        header: "Project",
      },
      {
        accessorKey: "address",
        header: "Address",
        Cell: ({ cell, row }) => (
          <Group>
            <p>{cell.getValue()}</p>
            {row.getIsSelected() && (
              <IconCopy size={16} className="action-icon" />
            )}
          </Group>
        ),
      },
      {
        accessorKey: "date",
        header: "Date",
        Cell: ({ cell }) => (
          <Group>
            <IconCalendar size={18} style={{ color: "#6B7281" }} />
            <p>{cell.getValue()}</p>
          </Group>
        ),
      },
      {
        accessorKey: "status",
        header: "Status",
        Cell: ({ cell }) => <StatusBadge status={cell.getValue()} />,
      },
    ],
    []
  );

  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 5,
  });

  const table = useMantineReactTable({
    columns,
    data,
    enableRowSelection: true,
    enableColumnActions: false,
    enableSorting: false,

    // Custom Top Toolbar
    enableTopToolbar: true,
    renderTopToolbarCustomActions: () => (
      <Box className="toolbar-left-actions">
        <Title order={4}>Order List</Title>
        <Group>
          <ActionIcon variant="default" size="lg">
            <IconPlus size={18} />
          </ActionIcon>
          {/* <ActionIcon variant="default" size="lg">
            <IconFilter size={18} />
          </ActionIcon>
          <ActionIcon variant="default" size="lg">
            <IconArrowsSort size={18} />
          </ActionIcon> */}
        </Group>
      </Box>
    ),

    state: {
      pagination,
    },

    initialState: { showGlobalFilter: true },
    onPaginationChange: setPagination,
    positionGlobalFilter: "right",
    mantineSearchTextInputProps: {
      placeholder: "Search",
      // rightSection: <IconSearch />,
      variant: "filled",
      radius: "md",
    },

    // Row Actions (three-dots menu)
    enableRowActions: true,
    positionActionsColumn: "last",
    displayColumnDefOptions: {
      "mrt-row-actions": {
        header: "", // No title for the actions column
        size: 40,
        Cell: ({ row }) =>
          row.getIsSelected() ? (
            <IconDotsVertical size={18} className="action-icon" />
          ) : null,
      },
    },

    // Styling Props
    // mantineTableContainerProps: {
    //   className: "table-container",
    // },
    paginationDisplayMode: "pages",

    mantineTableHeadRowProps: {
      className: "table-header-row",
    },
    mantineTableBodyRowProps: ({ row }: any) => ({
      className: `table-body-row ${row.getIsSelected() && "selected-row"}`,
    }),
    mantinePaperProps: {
      className: "table-paper",
      shadow: "sm",
      withBorder: false,
    },

    mantinePaginationProps: {
      className: "table-pagination",
      showRowsPerPage: false,
    },
  });

  return (
    <div className="table-wrapper">
      <MantineReactTable table={table} />
    </div>
  );
};

export default TableComponent;
