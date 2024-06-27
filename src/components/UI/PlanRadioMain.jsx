export default function PlanRadioMain(data) {
  const { id, name, price, isPopular } = data.data;
  return (
    <label
      style={{ marginLeft: '2rem', display: 'flex', flexDirection: 'column' }}
    >
      <input
        type='radio'
        name='radioData'
        value={JSON.stringify({ id, name, price, isPopular })}
        required
      />
      <span>{name}</span>
      <span>{price}</span>
      {isPopular && <span>Skidon!!!</span>}
    </label>
  );
}
