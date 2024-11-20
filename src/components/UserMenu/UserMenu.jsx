import React from 'react';
import { X, User, LogIn, UserPlus, Settings, LogOut } from 'lucide-react';
import './UserMenu.css';

function UserMenu({ isOpen, onClose }) {
  return (
    <div className={`user-menu-overlay ${isOpen ? 'active' : ''}`} onClick={onClose}>
      <div className={`user-menu ${isOpen ? 'active' : ''}`} onClick={e => e.stopPropagation()}>
        <div className="user-menu-header">
          <h2>Account</h2>
          <button onClick={onClose} className="close-button">
            <X size={20} />
          </button>
        </div>

        <div className="user-menu-content">
          <div className="user-menu-section">
            <button className="user-menu-item">
              <LogIn className="icon" />
              <span>Sign In</span>
            </button>
            <button className="user-menu-item">
              <UserPlus className="icon" />
              <span>Create Account</span>
            </button>
          </div>

          <div className="user-menu-section">
            <button className="user-menu-item">
              <Settings className="icon" />
              <span>Settings</span>
            </button>
            <button className="user-menu-item">
              <LogOut className="icon" />
              <span>Sign Out</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserMenu; 