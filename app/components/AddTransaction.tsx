"use client";
import { useRef } from "react";
import addTransaction from "../actions/AddTransaction";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const AddTransaction = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const router = useRouter();
  const clientAction = async (formData: FormData) => {
    const { error, data } = await addTransaction(formData);

    if (error) {
      toast.error(error);
    } else {
      toast.success("Transaction Added");
      formRef.current?.reset();
      router.refresh();
    }
  };

  return (
    <>
      <h3 className="add-transaction">Add Transaction</h3>
      <form ref={formRef} action={clientAction}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            id="text"
            name="text"
            placeholder="Enter text..."
          />
        </div>

        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            <small>(negative - expense, positive - income)</small>
          </label>
          <input
            type="number"
            name="amount"
            id="amount"
            placeholder="Enter amount..."
            step="0.01"
          />
        </div>

        <button className="btn">Add Transaction</button>
      </form>
    </>
  );
};

export default AddTransaction;
