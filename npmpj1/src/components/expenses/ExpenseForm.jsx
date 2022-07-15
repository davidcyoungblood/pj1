<form>
  <tr>
    {/* In React, we should NOT use document.getElementById to access
    a DOM element.
    
    Doing so, bypasses React and all of its optimaztions, instead, we should
    this React's way
*/}

    {/* This is a "controlled component". React is in charge of it */}
    <td>
      <input
        name="name"
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Please enter Name"
      />
    </td>

    {/* This is an "uncontrolled component". React doesn't manage it, it just uses
    the native DOM to manage state */}
    {/* When input updates, my ref will also update since it "points" to that input */}
    <td>
      <input name="title" ref={titleRef} placeholder="Please enter Title" />
    </td>
    <td>
      <input name="salary" ref={salaryRef} placeholder="Please enter Salary" />
    </td>
    <button>Create new Developer!</button>
  </tr>
</form>;
