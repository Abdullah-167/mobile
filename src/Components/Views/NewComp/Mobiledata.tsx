import React, { useState, useEffect, useMemo } from "react";
import FilterComponent from "./FilterComponent";

const MobileData = () => {
  const mobileData = [
    // Samsung
    {
      name: "Samsung Galaxy S21",
      price: 69999,
      make: "Samsung",
      displaySize: 6.2,
      ram: 8,
      battery: 4000,
      os: "android",
      camera: 64,
      imageUrl:
        "/mobiles/DALL·E 2025-03-16 23.29.59 - A high-quality image of a Samsung Galaxy S21 smartphone from the front, showcasing its elegant design, 6.2-inch display, and modern features with the.webp",
    },
    {
      name: "Samsung Galaxy Note 20",
      price: 77999,
      make: "Samsung",
      displaySize: 6.9,
      ram: 8,
      battery: 4300,
      os: "android",
      camera: 108,
      imageUrl:
        "/mobiles/DALL·E 2025-03-16 23.30.11 - A high-quality image of the Samsung Galaxy Note 20 smartphone from the front, highlighting its 6.9-inch display and premium design. The phone should s.webp",
    },
    {
      name: "Samsung Galaxy A72",
      price: 34999,
      make: "Samsung",
      displaySize: 6.7,
      ram: 6,
      battery: 5000,
      os: "android",
      camera: 64,
      imageUrl:
        "/mobiles/DALL·E 2025-03-16 23.32.14 - A high-quality image of the Samsung Galaxy A72 smartphone, showcasing its 6.7-inch display and modern design. The phone should feature a sleek and sty.webp",
    },
    {
      name: "Samsung Galaxy M32",
      price: 14999,
      make: "Samsung",
      displaySize: 6.4,
      ram: 6,
      battery: 6000,
      os: "android",
      camera: 64,
      imageUrl:
        "/mobiles/DALL·E 2025-03-16 23.32.19 - A high-quality image of the Samsung Galaxy M32 smartphone, featuring its 6.4-inch display and modern design. The phone should have a sleek, stylish ap.webp",
    },
    {
      name: "Samsung Galaxy Z Flip3",
      price: 84999,
      make: "Samsung",
      displaySize: 6.7,
      ram: 8,
      battery: 3300,
      os: "android",
      camera: 12,
      imageUrl:
        "/mobiles/DALL·E 2025-03-16 23.32.38 - A high-quality image of the Samsung Galaxy Z Flip3 smartphone, showcasing its 6.7-inch foldable display and modern design. The phone should be shown i.webp",
    },
    {
      name: "Samsung Galaxy A52",
      price: 25999,
      make: "Samsung",
      displaySize: 6.5,
      ram: 6,
      battery: 4500,
      os: "android",
      camera: 64,
      imageUrl:
        "/mobiles/DALL·E 2025-03-16 23.33.10 - A high-quality image of the Samsung Galaxy A52 smartphone, showcasing its 6.5-inch display and modern design. The phone should have a sleek, stylish a.webp",
    },
    {
      name: "Samsung Galaxy A51",
      price: 22999,
      make: "Samsung",
      displaySize: 6.5,
      ram: 4,
      battery: 4000,
      os: "android",
      camera: 48,
      imageUrl:
        "/mobiles/DALL·E 2025-03-16 23.33.14 - A high-quality image of the Samsung Galaxy A51 smartphone, showcasing its 6.5-inch display and sleek design. The phone should feature a modern and sty.webp",
    },
    {
      name: "Samsung Galaxy M21",
      price: 13999,
      make: "Samsung",
      displaySize: 6.4,
      ram: 4,
      battery: 6000,
      os: "android",
      camera: 48,
      imageUrl:
        "/mobiles/DALL·E 2025-03-16 23.33.22 - A high-quality image of the Samsung Galaxy M21 smartphone, showcasing its 6.4-inch display and modern design. The phone should have a sleek, stylish a.webp",
    },
    {
      name: "Samsung Galaxy A31",
      price: 22999,
      make: "Samsung",
      displaySize: 6.4,
      ram: 6,
      battery: 5000,
      os: "android",
      camera: 48,
      imageUrl:
        "/mobiles/DALL·E 2025-03-16 23.33.34 - A high-quality image of the Samsung Galaxy A31 smartphone, featuring its 6.4-inch display and modern design. The phone should have a sleek, stylish ap.webp",
    },
    {
      name: "Samsung Galaxy Z Fold3",
      price: 184999,
      make: "Samsung",
      displaySize: 7.6,
      ram: 12,
      battery: 4400,
      os: "android",
      camera: 12,
      imageUrl:
        "/mobiles/DALL·E 2025-03-16 23.33.38 - A high-quality image of the Samsung Galaxy Z Fold3 smartphone, showcasing its 7.6-inch foldable display and premium design. The phone should be shown .webp",
    },

    // iPhone
    {
      name: "iPhone 13 Pro",
      price: 119900,
      make: "iPhone",
      displaySize: 6.1,
      ram: 6,
      battery: 3095,
      os: "ios",
      camera: 12,
      imageUrl:
        "/mobiles/DALL·E 2025-03-16 23.34.19 - A high-quality image of the iPhone 13 Pro, showcasing its 6.1-inch display and sleek, premium design. The phone should have the Apple logo visible on .webp",
    },
    {
      name: "iPhone 13",
      price: 79900,
      make: "iPhone",
      displaySize: 6.1,
      ram: 4,
      battery: 3240,
      os: "ios",
      camera: 12,
      imageUrl:
        "/mobiles/DALL·E 2025-03-16 23.34.22 - A high-quality image of the iPhone 13, featuring its 6.1-inch display and sleek, modern design. The phone should have the Apple logo visible on the ba.webp",
    },
    {
      name: "iPhone 12 Pro Max",
      price: 119900,
      make: "iPhone",
      displaySize: 6.7,
      ram: 6,
      battery: 3687,
      os: "ios",
      camera: 12,
      imageUrl:
        "/mobiles/DALL·E 2025-03-16 23.34.24 - A high-quality image of the iPhone 12 Pro Max, showcasing its 6.7-inch display and sleek design. The phone should have the Apple logo visible on the b.webp",
    },
    {
      name: "iPhone 12",
      price: 79900,
      make: "iPhone",
      displaySize: 6.1,
      ram: 4,
      battery: 2815,
      os: "ios",
      camera: 12,
      imageUrl:
        "/mobiles/DALL·E 2025-03-16 23.34.27 - A high-quality image of the iPhone 12, featuring its 6.1-inch display and sleek design. The phone should have the Apple logo visible on the back, with.webp",
    },
    {
      name: "iPhone SE (2020)",
      price: 42900,
      make: "iPhone",
      displaySize: 4.7,
      ram: 3,
      battery: 1821,
      os: "ios",
      camera: 12,
      imageUrl:
        "/mobiles/DALL·E 2025-03-16 23.34.33 - A high-quality image of the iPhone SE (2020) smartphone, featuring its 4.7-inch display and sleek design. The phone should have the Apple logo visible.webp",
    },
    {
      name: "iPhone 11 Pro",
      price: 99900,
      make: "iPhone",
      displaySize: 5.8,
      ram: 4,
      battery: 3046,
      os: "ios",
      camera: 12,
      imageUrl:
        "/mobiles/DALL·E 2025-03-16 23.34.39 - A high-quality image of the iPhone 11 Pro smartphone, showcasing its 5.8-inch display and premium design. The phone should have the Apple logo visible.webp",
    },
    {
      name: "iPhone XS Max",
      price: 109900,
      make: "iPhone",
      displaySize: 6.5,
      ram: 4,
      battery: 3174,
      os: "ios",
      camera: 12,
      imageUrl: "/mobiles/xsmax.jpg",
    },
    {
      name: "iPhone 7",
      price: 29900,
      make: "iPhone",
      displaySize: 4.7,
      ram: 2,
      battery: 1960,
      os: "ios",
      camera: 12,
      imageUrl: "/mobiles/iphone7.jpg",
    },
    {
      name: "iPhone 8 Plus",
      price: 35900,
      make: "iPhone",
      displaySize: 5.5,
      ram: 3,
      battery: 2691,
      os: "ios",
      camera: 12,
      imageUrl: "/mobiles/iphone8.jpg",
    },
    {
      name: "iPhone 6s",
      price: 24900,
      make: "iPhone",
      displaySize: 4.7,
      ram: 2,
      battery: 1715,
      os: "ios",
      camera: 12,
      imageUrl: "/mobiles/iphone6s.jpg",
    },

    // Xiaomi
    {
      name: "Xiaomi Mi 11 Ultra",
      price: 69999,
      make: "Xiaomi",
      displaySize: 6.81,
      ram: 12,
      battery: 5000,
      os: "android",
      camera: 50,
      imageUrl: "/mobiles/Xiaomi Mi 11 Ultra.jpg",
    },
    {
      name: "Xiaomi Mi 10",
      price: 49999,
      make: "Xiaomi",
      displaySize: 6.67,
      ram: 8,
      battery: 4780,
      os: "android",
      camera: 108,
      imageUrl: "/mobiles/Xiaomi Mi 11 Ultra.jpg",
    },
    {
      name: "Xiaomi Redmi Note 10 Pro",
      price: 17999,
      make: "Xiaomi",
      displaySize: 6.67,
      ram: 6,
      battery: 5020,
      os: "android",
      camera: 108,
      imageUrl: "/mobiles/Xiaomi Redmi Note 10 Pro.jpg",
    },
    {
      name: "Xiaomi Redmi Note 9",
      price: 12999,
      make: "Xiaomi",
      displaySize: 6.53,
      ram: 4,
      battery: 5020,
      os: "android",
      camera: 48,
      imageUrl: "/mobiles/Xiaomi Redmi Note 9.jpg",
    },
    {
      name: "Xiaomi Mi 9T Pro",
      price: 24999,
      make: "Xiaomi",
      displaySize: 6.39,
      ram: 6,
      battery: 4000,
      os: "android",
      camera: 48,
      imageUrl:
        "/mobiles/DALL·E 2025-03-17 00.01.03 - A high-quality image of the Xiaomi Mi 9T Pro smartphone, showcasing its 6.39-inch display and modern design. The phone should have a sleek, stylish ap.webp",
    },

    // Add other brands (Vivo, OnePlus, Realme, Motorola, Huawei, Asus) in the same manner...
  ];

  const [filteredData, setFilteredData] = useState(mobileData);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [loading, setLoading] = useState(false);
  const [sortOption, setSortOption] = useState("priceAsc");

  useEffect(() => {
    setCurrentPage(1); // Reset page when filtered data changes
  }, [filteredData]);

  // Handling filters with a 2-second loading spinner
  const handleFilter = (filters: any) => {
    if (Object.values(filters).every((value) => !value)) {
      setFilteredData(mobileData); // Show all products when no filters are applied
    } else {
      setLoading(true); // Show loading spinner immediately

      // Simulate a delay (2 seconds) before showing the filtered data
      setTimeout(() => {
        const filteredResults = mobileData.filter((mobile) => {
          let priceFilter = true;
          if (filters.priceRange) {
            const [minPrice, maxPrice] = filters.priceRange
              .split("-")
              .map(Number);
            priceFilter = mobile.price >= minPrice && mobile.price <= maxPrice;
          }

          let makeFilter = true;
          if (filters.make)
            makeFilter =
              mobile.make.toLowerCase() === filters.make.toLowerCase();

          let displaySizeFilter = true;
          if (filters.displaySize)
            displaySizeFilter =
              mobile.displaySize >= Number(filters.displaySize);

          let ramFilter = true;
          if (filters.ram) ramFilter = mobile.ram >= Number(filters.ram);

          let batteryFilter = true;
          if (filters.battery)
            batteryFilter = mobile.battery >= Number(filters.battery);

          let osFilter = true;
          if (filters.os)
            osFilter = mobile.os.toLowerCase() === filters.os.toLowerCase();

          let cameraFilter = true;
          if (filters.camera)
            cameraFilter = mobile.camera >= Number(filters.camera);

          return (
            priceFilter &&
            makeFilter &&
            displaySizeFilter &&
            ramFilter &&
            batteryFilter &&
            osFilter &&
            cameraFilter
          );
        });

        setFilteredData(filteredResults);
        setLoading(false); // Hide loading spinner after 2 seconds
      }, 1000); // 2 seconds delay
    }
  };

  // Sorting mobile data
  const sortedData = useMemo(() => {
    const sorted = [...filteredData];
    if (sortOption === "priceAsc") {
      sorted.sort((a, b) => a.price - b.price);
    } else if (sortOption === "priceDesc") {
      sorted.sort((a, b) => b.price - a.price);
    }
    return sorted;
  }, [filteredData, sortOption]);

  // Pagination logic
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  const currentItems = sortedData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (pageNumber: number) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const handleItemsPerPageChange = (event: any) => {
    setItemsPerPage(Number(event.target.value));
  };

  const handleSortChange = (event: any) => {
    setSortOption(event.target.value);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-8">
        {/* Sidebar - Filters */}
        <div className="md:col-span-1 lg:col-span-2 bg-white p-6 rounded-lg shadow-md py-6">
          <FilterComponent onFilter={handleFilter} />
        </div>

        {/* Mobile Cards Display */}
        <div className="md:col-span-3 lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 py-6">
          {loading ? (
            <div role="status" className="md:fixed left-[50%] top-[50%]" >
              <svg
                aria-hidden="true"
                className="w-20 h-20 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
          ) : currentItems.length > 0 ? (
            currentItems.map((mobile, index) => (
              <div
                key={index}
                className="result-card rounded-lg shadow-lg bg-white p-6"
              >
                <img
                  src={mobile.imageUrl}
                  alt={mobile.name}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h4 className="text-lg font-semibold text-gray-900 truncate">
                  {mobile.name}
                </h4>
                <p className="text-gray-500 mt-2">Price: ${mobile.price}</p>
                <p className="text-gray-500">Make: {mobile.make}</p>
                <p className="text-gray-500">
                  Display Size: {mobile.displaySize} inches
                </p>
                <p className="text-gray-500">RAM: {mobile.ram}GB</p>
                <p className="text-gray-500">Battery: {mobile.battery}mAh</p>
                <p className="text-gray-500">Camera: {mobile.camera} MP</p>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-center">
              No results found. Try adjusting your filters.
            </p>
          )}
        </div>
      </div>

      {/* Sorting and Pagination */}
      <div className="flex justify-between mt-8">
        <select
          value={itemsPerPage}
          onChange={handleItemsPerPageChange}
          className="border p-2 rounded-md"
        >
          <option value={10}>10 Items</option>
          <option value={20}>20 Items</option>
          <option value={50}>50 Items</option>
        </select>
        <select
          value={sortOption}
          onChange={handleSortChange}
          className="border p-2 rounded-md"
        >
          <option value="priceAsc">Price: Low to High</option>
          <option value="priceDesc">Price: High to Low</option>
        </select>
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-8">
        <nav aria-label="Pagination">
          <ul className="inline-flex items-center">
            <li>
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-4 py-2 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 disabled:opacity-50"
              >
                Previous
              </button>
            </li>
            {[...Array(totalPages)].map((_, index) => (
              <li key={index}>
                <button
                  onClick={() => handlePageChange(index + 1)}
                  className={`px-4 py-2 border border-gray-300 hover:bg-gray-100 ${
                    currentPage === index + 1 ? "bg-gray-200" : ""
                  }`}
                >
                  {index + 1}
                </button>
              </li>
            ))}
            <li>
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-4 py-2 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 disabled:opacity-50"
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MobileData;
