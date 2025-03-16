import React, { useState } from "react";

interface SelectedFilters {
  [key: string]: string; // Assumes each filter value is a string
}

const FilterComponent = ({ onFilter }: any) => {
  const [priceRange, setPriceRange] = useState("");
  const [make, setMake] = useState("");
  const [displaySize, setDisplaySize] = useState("");
  const [ram, setRam] = useState("");
  const [battery, setBattery] = useState("");
  const [os, setOs] = useState("");
  const [camera, setCamera] = useState("");

  const [selectedFilters, setSelectedFilters] = useState<SelectedFilters>({});

  const handlePriceChange = (event: any) => {
    setPriceRange(event.target.value);
  };

  const handleMakeChange = (event: any) => {
    setMake(event.target.value);
  };

  const handleDisplaySizeChange = (event: any) => {
    setDisplaySize(event.target.value);
  };

  const handleRamChange = (event: any) => {
    setRam(event.target.value);
  };

  const handleBatteryChange = (event: any) => {
    setBattery(event.target.value);
  };

  const handleOsChange = (event: any) => {
    setOs(event.target.value);
  };

  const handleCameraChange = (event: any) => {
    setCamera(event.target.value);
  };

  const handleFilterApply = () => {
    const filters = { priceRange, make, displaySize, ram, battery, os, camera };
    setSelectedFilters(filters);
    onFilter(filters);
  };

  const handleFilterRemove = (filter: string) => {
    setSelectedFilters((prevFilters: SelectedFilters) => {
      const updatedFilters = { ...prevFilters };
      delete updatedFilters[filter];
      return updatedFilters;
    });

    // Reset the corresponding filter field to empty (or default)
    if (filter === "priceRange") setPriceRange("");
    if (filter === "make") setMake("");
    if (filter === "displaySize") setDisplaySize("");
    if (filter === "ram") setRam("");
    if (filter === "battery") setBattery("");
    if (filter === "os") setOs("");
    if (filter === "camera") setCamera("");

    // After removing the filter, call the onFilter function with the updated filters
    onFilter({ ...selectedFilters }); // Pass the current state, or an empty object if nothing is selected
  };

  return (
    <div className="space-y-6">
      {/* Display Selected Filters */}
      {Object.keys(selectedFilters).length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {Object.entries(selectedFilters).map(
            ([filter, value]) =>
              value && (
                <div
                  key={filter}
                  className="bg-gray-200 px-4 py-2 rounded-full flex items-center"
                >
                  <span className="text-sm">
                    {filter}: {value}
                  </span>
                  <button
                    onClick={() => handleFilterRemove(filter)}
                    className="ml-2 text-red-500 font-bold"
                  >
                    X
                  </button>
                </div>
              )
          )}
        </div>
      )}
      {/* Filter UI Components */}
      <div>
        <label className="block font-medium">Price Range</label>
        <select
          className="w-full px-4 py-2 mt-2 border rounded-md"
          value={priceRange}
          onChange={handlePriceChange}
        >
          <option value="">All Prices</option>
          <option value="1000-5000">$1000 - $5000</option>
          <option value="5000-10000">$5000 - $10000</option>
          <option value="10000-20000">$10000 - $20000</option>
          <option value="20000-50000">$20000 - $50000</option>
          <option value="50000+">$50000+</option>
        </select>
      </div>

      <div>
        <label className="block font-medium">Make</label>
        <select
          className="w-full px-4 py-2 mt-2 border rounded-md"
          value={make}
          onChange={handleMakeChange}
        >
          {" "}
          <option value="">All Makes</option>{" "}
          <option value="samsung">Samsung</option>{" "}
          <option value="iphone">iPhone</option>{" "}
          <option value="vivo">Vivo</option>{" "}
          <option value="xiaomi">Xiaomi</option>{" "}
          <option value="oppo">Oppo</option>{" "}
          <option value="oneplus">OnePlus</option>{" "}
          <option value="asus">Asus</option>{" "}
          <option value="huawei">Huawei</option>{" "}
          <option value="motorola">Motorola</option>{" "}
          <option value="realme">Realme</option>{" "}
        </select>
      </div>

      <div>
        <label className="block font-medium">Display Size</label>
        <select
          className="w-full px-4 py-2 mt-2 border rounded-md"
          value={displaySize}
          onChange={handleDisplaySizeChange}
        >
          <option value="">All Sizes</option>
          <option value="5">5 inches</option>
          <option value="6">6 inches</option>
          <option value="6.5">6.5 inches</option>
          <option value="7">7 inches</option>
        </select>
      </div>

      <div>
        <label className="block font-medium">RAM Size</label>
        <select
          className="w-full px-4 py-2 mt-2 border rounded-md"
          value={ram}
          onChange={handleRamChange}
        >
          <option value="">All RAM</option>
          <option value="4">4GB</option>
          <option value="6">6GB</option>
          <option value="8">8GB</option>
          <option value="12">12GB</option>
        </select>
      </div>

      <div>
        <label className="block font-medium">Battery Capacity</label>
        <select
          className="w-full px-4 py-2 mt-2 border rounded-md"
          value={battery}
          onChange={handleBatteryChange}
        >
          <option value="">All Batteries</option>
          <option value="3000">3000mAh</option>
          <option value="4000">4000mAh</option>
          <option value="5000">5000mAh</option>
          <option value="6000">6000mAh</option>
        </select>
      </div>

      <div>
        <label className="block font-medium">Operating System</label>
        <select
          className="w-full px-4 py-2 mt-2 border rounded-md"
          value={os}
          onChange={handleOsChange}
        >
          <option value="">All OS</option>
          <option value="android">Android</option>
          <option value="ios">iOS</option>
        </select>
      </div>

      <div>
        <label className="block font-medium">Camera (Primary)</label>
        <select
          className="w-full px-4 py-2 mt-2 border rounded-md"
          value={camera}
          onChange={handleCameraChange}
        >
          <option value="">All Cameras</option>
          <option value="12">12 MP</option>
          <option value="16">16 MP</option>
          <option value="48">48 MP</option>
          <option value="64">64 MP</option>
        </select>
      </div>

      <div>
        <button
          className="w-full px-4 py-2 mt-4 bg-blue-600 text-white rounded-md"
          onClick={handleFilterApply}
        >
          Apply Filters
        </button>
      </div>
    </div>
  );
};

export default FilterComponent;
