import { render, screen, fireEvent } from "@testing-library/react";
import { expect, test } from "vitest";
import AddTransactionForm from "../../components/AddTransactionForm";
import userEvent from "@testing-library/user-event";

test('New transactions are added to the frontend', () => {
    render(<AddTransactionForm />);
    const dateinput = screen.getByTestId('dateinput');
})