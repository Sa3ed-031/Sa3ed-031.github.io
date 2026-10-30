export default function RecordResponse({ isVisible, message }) {
  return isVisible ? (
    <span
      className={`fixed top-0 left-0 z-9999 flex h-full w-full items-center justify-center px-8 text-center text-3xl font-bold backdrop-blur-xl ${message !== "Message sent successfully!" ? "text-red-600" : "text-signal"}`}
    >
      {message}
    </span>
  ) : (
    <></>
  );
}
