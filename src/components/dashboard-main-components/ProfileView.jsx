import { Plus } from "lucide-react";

const ProfileView = () => {
  return (
    <div className="profile-section">
      <div className="profile-icons">
        <div className="user-profile">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face&auto=format"
            alt="User"
            className="user-avatar"
          />
        </div>
        <button className="add-button">
          <Plus size={18} />
        </button>
      </div>
    </div>
  );
};

export default ProfileView;