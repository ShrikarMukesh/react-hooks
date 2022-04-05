import React, { useState } from "react";

function HookCounter3() {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  return (
    <form>
      <input
        type="text"
        value={name.firstName}
        onChange={(e) => setName({ ...name, firstName: e.target.value })}
      />
      <input
        type="text"
        value={name.lastName}
        onChange={(e) => setName({ ...name, lastName: e.target.value })}
      />
      <h3>firstName: {name.firstName}</h3>
      <h3>lastName: {name.lastName}</h3>
      <h3>{JSON.stringify(name)}</h3>
    </form>
  );
}

export default HookCounter3;
