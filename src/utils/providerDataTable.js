// pagionación del datatable
export const providerPaginationDataTable = {
  rowsPerPageText: "Filas por página",
  rangeSeparatorText: "de",
};

// filtro para el dataTable
export const providerFilter = ({ data, filter }) => {
  const filteredData = data.filter((row) => {
    const values = Object.values(row).join(" ").toLowerCase();
    return values.includes(filter.toLowerCase());
  });

  return filteredData;
};

export const styleDataTable = {
  headRow: {
    style: {
      fontSize: ".9rem",
      "font-weight": "600",
      color: "#124C60",
    },
  },
  rows: {
    style: {
      fontSize: ".8rem",
      "font-weight": "600",
    },
  },
  pagination: {
    style: {
      "border-bottom-right-radius": "0.375rem",
      "border-bottom-left-radius": "0.375rem",
      fontSize: "1rem",
    },
  },
};
