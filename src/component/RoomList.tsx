import React from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

type RoomListProps = {
  towerName: string;
  rooms: string[];
  onBack: () => void;
};

const RoomList: React.FC<RoomListProps> = ({ towerName, rooms, onBack }) => {
  return (
    <div>
      {/* Back Navigation */}
      <div
        className="flex items-center gap-2 text-sm text-gray-700 cursor-pointer mb-4"
        onClick={onBack}
      >
        <HiChevronLeft className="text-xl" />
        <span>codeplay / {towerName}</span>
      </div>

      {/* Rooms */}
      <div className="space-y-3">
        {rooms.map((room, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 rounded-md cursor-pointer shadow-inner"
          >
            <span>{room}</span>
            <HiChevronRight className="text-xl text-gray-500" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoomList;
