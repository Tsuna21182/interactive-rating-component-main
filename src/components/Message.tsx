type MessageProps = {
  selectedRating: number;
};

function Message({ selectedRating }: MessageProps) {
  return (
    <div className="text-center p-6 rounded-lg">
      <img
        src="/images/illustration-thank-you.svg"
        alt="Thank You"
        className="mx-auto mb-4"
      />
      <p className="bg-Orange text-white py-1 px-4 rounded-full inline-block">
        You selected {selectedRating} out of 5
      </p>
      <h2 className="text-2xl font-bold my-4">Thank You!</h2>
      <p className="text-Light-Grey">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
}

export default Message;
