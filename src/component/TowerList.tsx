import React from 'react';
import { FaBuilding } from 'react-icons/fa';
import { HiChevronRight } from 'react-icons/hi';

type TowerListProps = {
  towers: string[];
  onSelect: (tower: string) => void;
};

const TowerList: React.FC<TowerListProps> = ({ towers, onSelect }) => {
  return (
    <div className="space-y-3">
      {towers.map((tower, idx) => (
        <div
          key={idx}
          onClick={() => onSelect(tower)}
          className="flex items-center justify-between p-4 bg-gray-50 hover:bg-gray-100 rounded-md cursor-pointer shadow-inner"
        >
          <div className="flex items-center gap-3">
            <FaBuilding className="text-xl text-gray-600" />
            <span className="font-medium">{tower}</span>
          </div>
          <HiChevronRight className="text-xl text-gray-500" />
        </div>
      ))}
    </div>
  );
};

export default TowerList;
