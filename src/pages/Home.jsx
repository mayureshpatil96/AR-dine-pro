export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center text-center h-[80vh] px-4">
      <h2 className="text-5xl font-bold mb-4 text-gray-800">
        Welcome to <span className="text-red-500">AR Dine Pro</span>
      </h2>
      <p className="text-gray-600 max-w-xl mb-6">
        Scan your table QR, explore dishes in 3D, and order your favorite meal seamlessly — experience the future of dining!
      </p>
      <a
        href="/menu"
        className="px-6 py-3 bg-red-500 text-white font-semibold rounded-xl hover:bg-red-600 transition"
      >
        View Menu
      </a>
    </section>
  );
}
