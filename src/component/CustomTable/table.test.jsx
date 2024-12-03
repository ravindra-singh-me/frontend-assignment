import CustomTable from "./index";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

export const columnData = [
  { field: "s.no", headerName: "Sr.No" },
  { field: "percentage.funded", headerName: "Percentage funded" },
  {
    field: "amt.pledged",
    headerName: "Amount pledged",
  },
];

const mocData = [
  {
    "s.no": 1,
    "amt.pledged": 1000,
    "percentage.funded": 200,
  },
];

describe("Data Table Component", () => {
  test("Rendering Table", async () => {
    render(<CustomTable columnData={columnData} rows={mocData} />);
    const rowSelector = screen.getByRole("table");
    expect(rowSelector).toBeInTheDocument();
  });

  test("Rendering column data", async () => {
    render(<CustomTable columnData={columnData} rows={mocData} />);
    const column = screen.getByText("1000");
    expect(column).toBeInTheDocument();
  });
});
