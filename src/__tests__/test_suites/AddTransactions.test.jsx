import { render, screen, fireEvent } from "@testing-library/react";
import { expect, test } from "vitest";
import AddTransactionForm from "../../components/AddTransactionForm";
import userEvent from "@testing-library/user-event";

test('New transactions are added to the frontend', async () => {
    const mockPostTransaction = vi.fn();
    render(<AddTransactionForm postTransaction={mockPostTransaction}/>);
    const dateinput = screen.getByTestId('dateinput');
    const descriptioninput = screen.getByPlaceholderText('Description');
    const categoryinput = screen.getByPlaceholderText('Category');
    const amountinput = screen.getByPlaceholderText('Amount');
    const transactionbutton = screen.getByTestId('submitbutton')
    await userEvent.type(dateinput, '1998-09-09');
    await userEvent.type(descriptioninput, 'My Birth');
    await userEvent.type(categoryinput, 'Gift');
    await userEvent.type(amountinput, '-49');
    await userEvent.click(transactionbutton);
    expect(mockPostTransaction).toHaveBeenCalledTimes(1)
    expect(mockPostTransaction).toHaveBeenCalledWith({
        date: '1998-09-09',
        description: 'My Birth',
        category: 'Gift',
        amount: '-49'
    })
})