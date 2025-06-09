import React from "react";
import { Pagination as MuiPagination } from "@mui/material";

type Props = {
  total: number;
  page: number;
  onPageChange: (value: number) => void;
  itemsPerPage?: number;
};

const Pagination: React.FC<Props> = ({
  total,
  page,
  onPageChange,
  itemsPerPage = 9,
}) => (
  <div className="flex justify-center mt-4">
    <MuiPagination
      count={Math.ceil(total / itemsPerPage)}
      page={page}
      onChange={(_, value) => onPageChange(value)}
    />
  </div>
);

export default Pagination;
