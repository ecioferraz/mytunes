import TextInputProps from './TextInput.props';

export default function TextInput({
  className,
  handleChange,
  minLength,
  name,
  placeholder,
  type,
  value,
}: TextInputProps) {
  return (
    <label htmlFor={name}>
      <input
        className={className}
        id={name}
        min={minLength}
        name={name}
        onChange={handleChange}
        placeholder={placeholder}
        type={type}
        value={value}
      />
    </label>
  );
}
