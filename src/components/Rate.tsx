type RateProperties = {
  name: number;
  isSelected: boolean;
  onClick: (name: number) => void;
};

function Rate({ name, isSelected, onClick }: RateProperties) {
  return (
    <div
      className={`rounded-full h-15 w-15 flex justify-center items-center my-8 text-Light-Grey font-bold text-2xl ${
        isSelected ? "bg-Orange text-black" : "bg-Bg-Grey"
      } hover:bg-White hover:text-black transition-all cursor-pointer`}
      onClick={() => onClick(name)}
    >
      {name}
    </div>
  );
}

export default Rate;
