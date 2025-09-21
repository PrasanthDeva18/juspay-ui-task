import { useMemo, useState } from "react";
import { MantineReactTable, useMantineReactTable } from "mantine-react-table";
import { Box, Text, Avatar, Group, ActionIcon, Title } from "@mantine/core";
import {
  IconCalendar,
  IconCopy,
  IconDotsVertical,
  IconPlus,
  IconFilter,
  IconArrowsSort,
  IconSearch,
} from "@tabler/icons-react";
import { data } from "./data"; // Mock data from the next step
import "./table.css"; // CSS styles from the final step

// Custom component for the Status cell to match the design
const StatusBadge = ({ status }) => {
  // Generates a CSS-friendly class name (e.g., "In Progress" -> "in-progress")
  const statusClass = status.toLowerCase().replace(" ", "-");
  return (
    <div className={`status-cell ${statusClass}`}>
      <span className="status-dot"></span>
      <Text fz="sm">{status}</Text>
    </div>
  );
};

const TableComponent = () => {
  const [zoomY, setZoomY] = useState(1);
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
        Cell: ({ row }) => (
          <Group gap="sm">
            <Avatar src={row.original.user.avatar} size={36} radius="xl" />
            <Text fz="sm" fw={500}>
              {row.original.user.name}
            </Text>
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
          <Group gap="xs" justify="space-between" wrap="nowrap">
            <Text fz="sm">{cell.getValue()}</Text>
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
          <Group gap="xs" wrap="nowrap">
            <IconCalendar size={18} style={{ color: "#6B7281" }} />
            <Text fz="sm">{cell.getValue()}</Text>
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
        <Group gap="xs">
          <ActionIcon variant="default" size="lg">
            <IconPlus size={18} />
          </ActionIcon>
          <ActionIcon variant="default" size="lg">
            <IconFilter size={18} />
          </ActionIcon>
          <ActionIcon variant="default" size="lg">
            <IconArrowsSort size={18} />
          </ActionIcon>
        </Group>
      </Box>
    ),

    // Search/Filter configuration
    initialState: { showGlobalFilter: true },
    positionGlobalFilter: "right",
    mantineSearchTextInputProps: {
      placeholder: "Search",
      leftSection: <IconSearch size={16} />,
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
    mantineTableContainerProps: {
      className: "table-container",
    },
    mantineTableHeadRowProps: {
      className: "table-header-row",
    },
    mantineTableBodyRowProps: ({ row }) => ({
      className: `table-body-row ${row.getIsSelected() && "selected-row"}`,
    }),
    mantinePaperProps: {
      className: "table-paper",
      shadow: "sm",
      withBorder: false,
    },
    mantinePaginationProps: {
      className: "table-pagination",
    },
  });

  return (
    <div
      className="table-wrapper"
      style={{ transform: `scaleY(${zoomY})`, transformOrigin: "top" }}
    >
      <MantineReactTable table={table} />
    </div>
  );
};

export default TableComponent;
