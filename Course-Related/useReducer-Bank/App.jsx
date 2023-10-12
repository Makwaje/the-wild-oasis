/* eslint-disable no-case-declarations */
/* eslint-disable no-unused-vars */
import { useReducer } from "react";

const initialState = {
  balance: 0,
  loan: 0,
  isActive: false,
};

function reducer(state, action) {
  if (!state.isActive && action.type !== "openAccount") return state;

  switch (action.type) {
    case "openAccount":
      return { ...state, isActive: true };

    case "closeAccount":
      if (state.loan > 0 || state.balance !== 0) return state;
      return initialState;

    case "deposit":
      return { ...state, balance: state.balance + action.payload };

    case "withdraw":
      return {
        ...state,
        balance:
          state.balance > 0 ? state.balance - action.payload : state.balance,
      };

    case "requestLoan":
      if (state.loan > 0) return state;

      return {
        ...state,
        balance: state.balance + action.payload,
        loan: state.loan + action.payload,
      };

    case "payLoan":
      if (state.loan === 0) return state;

      return {
        ...state,
        balance: state.balance - state.loan,
        loan: state.loan - state.loan,
      };

    default:
      throw new Error("Unknown action");
  }
}

export default function App() {
  const [{ balance, loan, isActive }, dispatch] = useReducer(
    reducer,
    initialState
  );
  return (
    <div className="app">
      <h1>useReducer Bank account</h1>
      <p>balance: ${isActive ? balance : "0"}</p>
      <p>Loan: ${isActive ? loan : "0"}</p>

      <button
        disabled={isActive}
        onClick={() => dispatch({ type: "openAccount" })}
      >
        Open account
      </button>

      <button
        disabled={!isActive}
        onClick={() => dispatch({ type: "deposit", payload: 150 })}
      >
        Deposit 150
      </button>
      <button
        disabled={!isActive}
        onClick={() => dispatch({ type: "withdraw", payload: 50 })}
      >
        Withdraw 50
      </button>
      <button
        disabled={!isActive}
        onClick={() => dispatch({ type: "requestLoan", payload: 5000 })}
      >
        Request a loan 5000
      </button>
      <button
        disabled={!isActive}
        onClick={() => dispatch({ type: "payLoan" })}
      >
        Pay loan
      </button>
      <button
        disabled={!isActive}
        onClick={() => dispatch({ type: "closeAccount" })}
      >
        Close account
      </button>
    </div>
  );
}
