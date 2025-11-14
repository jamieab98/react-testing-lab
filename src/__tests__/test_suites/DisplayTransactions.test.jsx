import { render, screen } from "@testing-library/react";
import TransactionsList from "../../components/TransactionsList";
import { expect, test } from "vitest";


test('Transactions are displayed on startup', () => {
    render(<TransactionsList transactions={global.baseTransactions}/>);
    expect(screen.getByText("Venmo, Alice Pays you for Burrito")).toBeInTheDocument();
    expect(screen.getByText("Birthday Check from Grandma")).toBeInTheDocument();
})