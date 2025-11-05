import React, { useState } from 'react';
import { Modal, Select } from 'antd';
import { User, Download, Upload, Printer, FileText, Plus, Filter } from 'lucide-react';
import UserPreviewDashboard from './UserPreviewDashboard';

const SelectUserModal = ({ selectUser, setSelectUser }) => {
  const [selectedUser, setSelectedUser] = useState('');
  const [showPreview, setShowPreview] = useState(false);
  const [showDashboard, setShowDashboard] = useState(false);
  const [previewUser, setPreviewUser] = useState('');

  const handleCancel = () => {
    setSelectUser(false);
    setShowPreview(false);
    setShowDashboard(false);
    setSelectedUser('');
    setPreviewUser('');
  };

  const handleSave = () => {
    if (selectedUser) {
      setPreviewUser(selectedUser);
      setShowPreview(true);
    }
  };

  const handleOpenPreview = () => {
    setShowDashboard(true);
  };

  // Sample sales data


  if (showDashboard) {
    return (
        <UserPreviewDashboard selectUser={selectUser} handleCancel={handleCancel}/>

    );
  }

  return (
    <Modal
      open={selectUser}
      onCancel={handleCancel}
      footer={null}
      closable={false}
      width={400}
      styles={{
        body: { padding: 0 },
      }}
    >
      {/* Header */}
      <div className="text-white px-4 py-3 flex items-center justify-between" style={{background:"linear-gradient(90deg, #03071A 0%, #1D4FD7 50%, #137BA4 75%, #0D9389 100%)"}}>
        <div className="flex items-center gap-2">
          <div className="bg-teal-700 rounded-full p-1.5">
            <User size={16} />
          </div>
          <div>
            <h3 className="font-semibold text-sm">User Interface preview</h3>
            <p className="text-xs text-teal-100">Configure Permision Or View Biilon</p>
          </div>
        </div>
        <button 
          onClick={handleCancel}
          className="text-white hover:bg-teal-700 rounded-full p-1 transition-colors"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>

      {/* Body */}
      <div className="p-6">
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Select User
          </label>
          <p className="text-xs text-gray-500 mb-3">
            Choose A Use To Preview their Interface
          </p>
          <Select
            value={selectedUser || undefined}
            onChange={(value) => setSelectedUser(value)}
            placeholder="Choose a User To Preview"
            className="w-full"
            size="large"
            options={[
              { value: 'user1', label: 'Ashikuzzaman', email: 'ashikuzzaman23@gamil.com' },
              { value: 'user2', label: 'User 2', email: 'user2@gmail.com' },
              { value: 'user3', label: 'User 3', email: 'user3@gmail.com' },
            ]}
          />
        </div>

        {/* Preview Section - Shows after Save Changes */}
        {showPreview && previewUser && (
          <>
            {/* Selected User Display */}
            <div className="mb-4 border rounded-lg p-3 bg-white">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                  <span className="text-orange-600 font-semibold text-sm">A</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium text-gray-800 text-sm">Ashikuzzaman</h4>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </div>
                  <p className="text-xs text-gray-500">ashikuzzaman23@gamil.com</p>
                </div>
              </div>
            </div>

            {/* Ready to Preview Section */}
            <div className="mb-4 border border-green-200 rounded-lg p-4 bg-green-50">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-1">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-green-800 text-sm mb-1">Ready To Preview</h4>
                  <p className="text-xs text-green-700">You're Interface As Ashikuzzaman</p>
                </div>
              </div>
            </div>

            {/* Preview User Display */}
            <div className="mb-4 border rounded-lg p-3 bg-white">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                  <span className="text-orange-600 font-semibold text-sm">A</span>
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium text-gray-800 text-sm">Ashikuzzaman</h4>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </div>
                  <p className="text-xs text-gray-500">ashikuzzaman23@gamil.com</p>
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Footer */}
      <div className="px-6 pb-6 flex justify-end gap-3">
        <button
          onClick={handleCancel}
          className="px-4 py-2 text-sm text-gray-700 bg-white border border-gray-300 rounded hover:bg-gray-50 transition-colors"
        >
          Cancel
        </button>
        <button
          onClick={showPreview ? handleOpenPreview : handleSave}
          className="px-4 py-2 text-sm !text-white bg-blue-600 rounded hover:bg-blue-700 transition-colors"
        >
          {showPreview ? 'Open Preview' : 'Save Changes'}
        </button>
      </div>
    </Modal>
  );
};

export default SelectUserModal;