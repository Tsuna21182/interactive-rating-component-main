import Button from "./components/Button";
import Rate from "./components/Rate";
import { useState } from "react";
import Message from "./components/Message";

function App() {
  const [selectedRating, setSelectdRating] = useState<number | null>(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleRating = (rating: number) => {
    setSelectdRating(rating);
    setShowConfirmation(false);
  };

  const handleSubmit = () => {
    if (selectedRating !== null) {
      setShowConfirmation(true);
    }
  };

  return (
    <main className="items-center justify-center flex h-screen mx-auto max-w-96">
      <div className="bg-Dark-Blue rounded-2xl p-5 mx-4">
        {showConfirmation ? (
          <Message selectedRating={selectedRating!} />
        ) : (
          <>
            <div className="bg-Bg-Grey h-10 w-10 flex justify-center items-center rounded-full">
              <img src="/images/icon-star.svg" alt="imagen star" />
            </div>

            <h1 className="text-3xl my-5">How did we do?</h1>
            <p className="text-Light-Grey my-5">
              Please let us know how we did with your support request. All
              feedback is appreciated to help us improve our offering!
            </p>

            <div className="flex gap-5">
              {[1, 2, 3, 4, 5].map((rating) => (
                <Rate
                  key={rating}
                  name={rating}
                  isSelected={rating === selectedRating}
                  onClick={handleRating}
                />
              ))}
            </div>
            <Button onClick={handleSubmit} disabled={selectedRating === null} />
          </>
        )}
      </div>
    </main>
  );
}

export default App;
