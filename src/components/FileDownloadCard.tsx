import React from 'react';
import { Download, Eye } from 'lucide-react';

interface FileDownloadCardProps {
  fileName: string;
  fileSize: string;
  fileType: 'PDF' | 'DOCX' | 'JPG' | 'PNG' | 'FILE';
  uploadDate: string;
  onDownload: () => void;
  onView?: () => void;
  accessType?: number; // 👈 qo'shildi
  className?: string;
}

const FileDownloadCard: React.FC<FileDownloadCardProps> = ({
  fileName,
  fileSize,
  fileType,
  uploadDate,
  onDownload,
  onView,
  accessType = 10,
  className = ''
}) => {
  const getFileTypeStyle = (type: string) => {
    switch (type) {
      case 'PDF':
        return 'bg-red-500';
      case 'DOCX':
        return 'bg-blue-500';
      case 'JPG':
        return 'bg-orange-500';
      case 'PNG':
        return 'bg-green-500';
      default:
        return 'bg-gray-500';
    }
  };

  const isDisabled = accessType === -10;

  return (
    <div
      className={`flex items-center p-1 max-w-md bg-gray-50 dark:bg-gray-700 rounded border border-gray-200 dark:border-gray-600 ${className} ${isDisabled ? 'opacity-60 cursor-not-allowed' : ''
        }`}
    >
      {/* File Type Icon */}
      <div
        className={`w-12 h-12 ${getFileTypeStyle(fileType)} rounded flex items-center justify-center text-white font-bold text-sm mr-4 flex-shrink-0`}
      >
        {fileType}
      </div>

      {/* File Details */}
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
          {fileName}
        </p>
        <p className="text-xs text-gray-500 dark:text-gray-400">{fileSize}</p>
        <p className="text-xs text-gray-500 dark:text-gray-400">{uploadDate}</p>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center space-x-2 flex-shrink-0">
        {onView && (
          <button
            onClick={!isDisabled ? onView : undefined}
            disabled={isDisabled}
            className={`p-2 rounded transition-colors ${isDisabled
                ? 'text-gray-400 dark:text-gray-500 cursor-not-allowed'
                : 'text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/20'
              }`}
            title={isDisabled ? "Ko‘rish taqiqlangan" : "Ko‘rish"}
          >
            <Eye className="h-4 w-4" />
          </button>
        )}
        <button
          onClick={!isDisabled ? onDownload : undefined}
          disabled={isDisabled}
          className={`p-2 rounded-lg transition-colors ${isDisabled
              ? 'text-gray-400 dark:text-gray-500 cursor-not-allowed'
              : 'text-green-600 dark:text-green-400 hover:bg-green-100 dark:hover:bg-green-900/20'
            }`}
          title={isDisabled ? "Yuklab olish taqiqlangan" : "Yuklab olish"}
        >
          <Download className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default FileDownloadCard;
