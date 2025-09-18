function AppleSupport() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-6">
      <div className="w-full max-w-2xl">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">Support for Apple Review</h1>
        <p className="text-gray-300 mb-8">If you are reviewing our app and need assistance, please contact us:</p>

        <div className="space-y-4">
          <div className="bg-zinc-900 rounded-lg p-4 border border-zinc-800">
            <h2 className="text-xl font-semibold">User Support</h2>
            <a href="mailto:support@viberank.xyz" className="text-indigo-400 underline break-all">support@viberank.xyz</a>
          </div>

          <div className="bg-zinc-900 rounded-lg p-4 border border-zinc-800">
            <h2 className="text-xl font-semibold">Business Contact</h2>
            <a href="mailto:ninja.gene@ninja666.com" className="text-indigo-400 underline break-all">ninja.gene@ninja666.com</a>
          </div>
        </div>

        <div className="mt-10">
          <a href="/" className="text-gray-400 hover:text-white underline">Back to Home</a>
        </div>
      </div>
    </div>
  );
}

export default AppleSupport;


