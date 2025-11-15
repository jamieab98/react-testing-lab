import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { expect, test } from "vitest";
import AccountContainer from "../../components/AccountContainer"

test('When the filter changes, the list of transactions changes', () => {

    global.fetch = vi.fn(() =>
  Promise.resolve({
    json: () =>
      Promise.resolve([
        {
          id: 1,
          description: "Venmo",
          category: "Transfer",
          amount: "-50",
          date: "2025-11-14",
        },
        {
          id: 2,
          description: "Paycheck from Bob's Burgers",
          category: "Income",
          amount: "500",
          date: "2025-11-10",
        },
      ]),
  })
);

    render(<AccountContainer/>)
    //fireEvent.change(screen.getByRole("combobox"), {
    //    target: {value: "category"}
    //});
    waitFor(() => 
    expect(screen.getByText((content) => content.includes("Paycheck from Bob's Burgers")).toBeInTheDocument())
)
})