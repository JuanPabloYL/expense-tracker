import { PlusCircleIcon } from "@heroicons/react/24/solid";
import { Dialog, Transition } from "@headlessui/react";
import { useBudget } from "../hooks/useBudget";
import { Fragment } from "react/jsx-runtime";
import { ExpenseForm } from "./ExpenseForm";

const ExpenseModal = () => {
  const { state, dispatch } = useBudget();

  return (
    <>
      <div className="fixed right-5 bottom-5 flex items-center justify-center">
        <button
          type="button"
          onClick={() => dispatch({ type: "show-modal" })}
          aria-label="Add Expense"
        >
          <PlusCircleIcon className="w-16 h-16 text-blue-600 rounded-full" />
        </button>
      </div>

      <Transition appear show={state.modal} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => {
            dispatch({ type: "close-modal" });
          }}
        >
          {/* Overlay */}
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-75" />
          </Transition.Child>

          {/* Modal Content */}
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-lg transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <ExpenseForm />
                  {/* <Dialog.Title className="text-lg font-medium leading-6 text-gray-900">
                    Add Expense
                  </Dialog.Title>
                  <div className="mt-4">
                    <input
                      type="text"
                      placeholder="Expense Name"
                      className="w-full border border-gray-300 rounded-lg p-2"
                    />
                    <input
                      type="number"
                      placeholder="Amount"
                      className="w-full mt-2 border border-gray-300 rounded-lg p-2"
                    />
                  </div>
                  <div className="mt-4 flex justify-end gap-2">
                    <button className="px-4 py-2 bg-gray-300 rounded-lg">
                      Cancel
                    </button>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">
                      Save
                    </button>
                  </div> */}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default ExpenseModal;
