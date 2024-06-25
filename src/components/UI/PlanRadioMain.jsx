export default function PlanRadioMain(data) {
  const { id, name, price, isPopular } = data.data;
  console.log(data);
  return (
    <label>
      <input type='radio' name='plan' value='free' />
      <span>{name}</span>
      <span>{price}</span>
    </label>
  );
}
