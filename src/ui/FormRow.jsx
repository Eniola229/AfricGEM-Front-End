function FormRow({ children, label }) {
  return (
    <div>
      <label
        class="text-gray-800 font-semibold block my-3 text-md"
        for="username"
      >
        {label}
      </label>
      <input
        class="w-full bg-gray-100 px-4 py-2 rounded-lg focus:outline-none"
        type="text"
        name="username"
        id="username"
        placeholder="username"
      />
    </div>
  );
}

export default FormRow;
