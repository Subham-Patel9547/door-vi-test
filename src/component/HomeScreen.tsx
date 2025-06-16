import React, { useState } from 'react';
import { FaBuilding } from 'react-icons/fa';
import { FiGlobe } from 'react-icons/fi';
import { IoArrowBack } from 'react-icons/io5';
import { FaPhoneAlt, FaUserCircle } from 'react-icons/fa';
import logo from '../assets/logo.webp'
// Towers and Rooms
const towerData: Record<string, string[]> = {
  'Tower A': ['A - 101', 'A - 102', 'A - 103', 'A - 104', 'A - 105'],
  'Tower B': ['B - 201', 'B - 202'],
  'Tower C': ['C - 301', 'C - 302'],
  'Tower E': ['E - 401', 'E - 402']
};

// Room Members
const memberData: Record<string, string[]> = {
  'A - 102': ['Charu', 'Sachin', 'Sparsh A', 'Sparsh Agrawal'],
  'A - 101': ['User 1', 'User 2'],
  'B - 201': ['B_User'],
};

const HomeScreen: React.FC = () => {
  const [search, setSearch] = useState('');
  const [selectedTower, setSelectedTower] = useState<string | null>(null);
  const [selectedRoom, setSelectedRoom] = useState<string | null>(null);

  const towers = Object.keys(towerData);
  const filteredTowers = towers.filter((tower) =>
    tower.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white p-6 md:p-12 font-sans">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <img src={logo} alt="DoorVi" className="h-10 w-10" />
          <div>
            <div className="text-xl font-semibold">codeplay</div>
            <div className="text-sm text-gray-500">Noida</div>
          </div>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <FiGlobe />
          <span>EN</span>
        </div>
      </div>

      {/* Member List  */}
      {selectedRoom ? (
        <>
          <div className="flex items-center text-gray-600 cursor-pointer mb-4" onClick={() => setSelectedRoom(null)}>
            <IoArrowBack className="mr-2" />
            <span>codeplay / {selectedTower} / {selectedRoom}</span>
          </div>

          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Members List</h2>
            <button className="text-green-600 font-medium">Call to all members</button>
          </div>

          <div className="space-y-3">
            {memberData[selectedRoom]?.map((member, idx) => (
              <div key={idx} className="flex items-center justify-between bg-gray-100 p-4 rounded-md">
                <div className="flex items-center gap-3">
                  <FaUserCircle className="text-2xl text-gray-500" />
                  <span className="font-medium">{member}</span>
                </div>
                <button className="bg-green-500 p-2 rounded-full text-white">
                  <FaPhoneAlt />
                </button>
              </div>
            ))}
          </div>
        </>
      ) : selectedTower ? (
        <>
          {/* Room List */}
          <div className="flex items-center text-gray-600 cursor-pointer mb-4" onClick={() => setSelectedTower(null)}>
            <IoArrowBack className="mr-2" />
            <span>codeplay / {selectedTower}</span>
          </div>

          <div className="space-y-3">
            {towerData[selectedTower].map((room, index) => (
              <div
                key={index}
                onClick={() => setSelectedRoom(room)}
                className="flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 rounded-md cursor-pointer shadow-inner"
              >
                <span>{room}</span>
                <span className="text-xl text-gray-500">{'>'}</span>
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          {/* Tower List  */}
          <input
            type="text"
            placeholder="Search building name"
            className="w-full p-3 border rounded-md shadow-sm mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <h2 className="text-lg font-semibold mb-4">Select who you want to visit</h2>

          <div className="space-y-3">
            {filteredTowers.map((tower, index) => (
              <div
                key={index}
                onClick={() => setSelectedTower(tower)}
                className="flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 rounded-md cursor-pointer shadow-inner"
              >
                <div className="flex items-center gap-3">
                  <FaBuilding className="text-xl text-gray-600" />
                  <span className="font-medium">{tower}</span>
                </div>
                <span className="text-xl text-gray-500">{'>'}</span>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default HomeScreen;
