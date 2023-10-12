import Counter from "./Counter";
import "./styles.css";

export default function App() {
  return (
    <div>
      <h1>Compound Component Pattern</h1>
      <Counter
        iconIncrease="+"
        iconDecrease="-"
        label="My NOT so flexible counter"
        hideLabel={false}
        hideIncrease={false}
        hideDecrease={false}
        positionCount="top"
      />

      <Counter>
        <Counter.Label>my super flexible counter</Counter.Label>
        <Counter.Increase icon="+" />
        <Counter.Count />
        <Counter.Decrease icon="-" />
      </Counter>

      <div>
        <Counter>
          <Counter.Label>my super flexible counter</Counter.Label>
          <div>
            <Counter.Decrease icon="⬅️" />
            <Counter.Count />
            <Counter.Increase icon="➡️" />
          </div>
        </Counter>
      </div>
    </div>
  );
}
