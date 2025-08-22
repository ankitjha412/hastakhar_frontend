export default function TaskToggle({ task, setTask }) {
  return (
    <div className="flex justify-center mb-6 space-x-6">
      {["signature", "handwriting"].map((t) => (
        <label key={t} className="cursor-pointer">
          <input
            type="radio"
            checked={task === t}
            onChange={() => setTask(t)}
          />{" "}
          {t.charAt(0).toUpperCase() + t.slice(1)}
        </label>
      ))}
    </div>
  );
}
