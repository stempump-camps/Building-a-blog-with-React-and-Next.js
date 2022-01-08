export default function Container({ children }) {
  return (
    <div className="max-w-prose mx-auto px-4 sm:px-6 lg:px-8 pb-4 md:pb-8">
      {children}
    </div>
  );
}
