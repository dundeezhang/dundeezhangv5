export function Footer() {
  const currYear = new Date().getFullYear();
  return (
    <>
      <footer className="max-w-xl mx-auto my-4 px-4">
        <p className="border-t-2 pt-2">{currYear} All Rights Reserved.</p>
      </footer>
    </>
  );
}
