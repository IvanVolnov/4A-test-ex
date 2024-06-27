export function handleSubmit(event) {
  event.preventDefault();

  //   const getAllCheckboxValues = (name) => {
  //     const checkboxes = Array.from(
  //       document.querySelectorAll(`input[name="${name}"]:checked`)
  //     );
  //     return checkboxes.map((checkbox) => checkbox.value);
  //   };

  const fd = new FormData(event.target);
  //   const checkboxData = getAllCheckboxValues('checkbox');
  const data = Object.fromEntries(fd.entries());
  //   data.checkbox = checkboxData;
  console.log(data);
}
