export default function RecordResponse({ isVisible, message }) {
  return isVisible ? (
    <span
      className={`
            w-full h-full fixed top-0 left-0 z-9999 
            flex items-center justify-center text-3xl 
            font-bold px-8 text-center backdrop-blur-xl
            ${message !== "Message sent successfully!" ? "text-red-600" : "text-green-500"}`}
    >
      {message}
    </span>
  ) : (
    <></>
  );
}
