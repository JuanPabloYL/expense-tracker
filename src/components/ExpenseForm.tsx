import { categories } from "../data/categories";
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

export const ExpenseForm = () => {
  return (
    <form className="space-y-5">
      <legend className="uppercase text-center font-black text-2xl border-b-4 py-2 border-blue-500 py-2">
        New Expense
      </legend>

      <div className="flex flex-col gap-2">
        <label htmlFor="expenseName" className="text-xl">
          Name of Expense:
        </label>
        <input
          type="text"
          id="expenseName"
          placeholder="Add name of the expense"
          className="bg-slate-100 p-2"
          name="expenseName"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="amount" className="text-xl">
          Amount:
        </label>
        <input
          type="number"
          id="amount"
          placeholder="Add amount of the expense"
          className="bg-slate-100 p-2"
          name="amount"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="amount" className="text-xl">
          Category:
        </label>
        <select id="category" className="bg-slate-100 p-2" name="category">
          <option value="">-- Select --</option>

          {categories.map((category) => (
            <option value={category.id} key={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="amount" className="text-xl">
          Date:
        </label>
        <DatePicker className="bg-slate-100" />
      </div>

      <input
        type="submit"
        className="bg-blue-600 w-full p-2 text-white uppercase font-bold rounded-lg"
        value={"Save"}
      />
    </form>
  );
};
