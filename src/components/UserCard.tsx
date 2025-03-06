import { memo } from "react";
import { CiEdit } from "react-icons/ci";
import { TbTrashFilled } from "react-icons/tb";

const UserCard = memo(({ user, onEdit, onDelete, onClick }: {
  user: ComponentProps.Users;
  onEdit: () => void;
  onDelete: () => void;
  onClick: () => void;
}) => {
  return (
    <li
      key={user.id}
      className="flex items-center justify-between p-2 border rounded-md cursor-pointer hover:bg-gray-100"
      onClick={onClick}
    >
      <div className="flex items-center space-x-4">
        <img src={user.avatar} alt={user.first_name} className="w-10 h-10 rounded-full" />
        <span className="text-sm font-bold">
          {user.first_name} {user.last_name}
        <p className="text-gray-500 text-xs">{user.email}</p>
        </span>
      </div>

      <div className="flex space-x-2">
        <CiEdit className="text-blue-500 cursor-pointer" onClick={(e) => { e.stopPropagation(); onEdit(); }} />
        <TbTrashFilled className="text-red-500 cursor-pointer" onClick={(e) => { e.stopPropagation(); onDelete(); }} />
      </div>
    </li>
  );
});

export default UserCard;
