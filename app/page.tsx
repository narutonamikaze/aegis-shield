
export default function Home() {
  // Example NGO center data (You can fetch this from an API or database later)
  const ngoCenters = [
    {
      name: "Centre 1",
      address: "123 Main Street, City A",
      contact: "0123456789",
      description: "This center focuses on education and youth empowerment.",
    },
    {
      name: "Centre 2",
      address: "456 Oak Avenue, City B",
      contact: "0987654321",
      description: "This center provides healthcare services and free medical camps.",
    },
    {
      name: "Centre 3",
      address: "789 Pine Road, City C",
      contact: "01122334455",
      description: "This center offers vocational training and skill development.",
    },
  ];

  return (
    <main className="flex flex-col items-center justify-center py-8 px-4">
      <h1 className="text-5xl font-bold text-gray-800 mb-8 text-center">
        Welcome to AEGIS SYSTEMS
      </h1>
      <p className="text-lg text-gray-600 mb-12 text-center">
        We collaborate with various NGOs across multiple locations. Below are some of the centers we work with.
      </p>

      {/* NGO Centers */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {ngoCenters.map((center, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">{center.name}</h2>
            <p className="text-gray-600 mb-2">
              <strong>Address:</strong> {center.address}
            </p>
            <p className="text-gray-600 mb-2">
              <strong>Contact:</strong> {center.contact}
            </p>
            <p className="text-gray-600">
              <strong>Description:</strong> {center.description}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
}

