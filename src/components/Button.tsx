type Select = {
  onClick: () => void;
  disabled: boolean;
};

function Button({ onClick, disabled }: Select) {
  return (
    <button
      className="bg-Orange rounded-3xl w-full p-2 uppercase text-black font-bold hover:bg-White transition-all duration-200"
      onClick={onClick}
      disabled={disabled}
    >
      submit
    </button>
  );
}

export default Button;
