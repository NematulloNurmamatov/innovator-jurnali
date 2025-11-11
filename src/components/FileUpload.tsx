import React, { useState, useRef } from 'react';
import { Upload, File, Download, Eye, X } from 'lucide-react';

interface UploadedFile {
  id: string;
  name: string;
  size: number;
  type: string;
  date: Date;
  url?: string;
}

interface FileUploadProps {
  title: string;
  files: UploadedFile[];
  onFileAdd: (file: File) => void;
  onFileRemove: (id: string) => void;
  onFileView: (file: UploadedFile) => void;
  onFileDownload: (file: UploadedFile) => void;
  maxFiles?: number;
  acceptedTypes?: string[];
}

const FileUpload: React.FC<FileUploadProps> = ({
  title,
  files,
  onFileAdd,
  onFileRemove,
  onFileView,
  onFileDownload,
  maxFiles = 10,
  acceptedTypes = ['.pdf', '.docx', '.doc', '.jpg', '.jpeg', '.png']
}) => {
  const [isDragOver, setIsDragOver] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const getFileTypeIcon = (type: string) => {
    const fileType = type.toLowerCase();
    if (fileType.includes('pdf')) {
      return { bg: 'bg-red-500', text: 'PDF' };
    } else if (fileType.includes('docx') || fileType.includes('doc')) {
      return { bg: 'bg-blue-500', text: 'DOCX' };
    } else if (fileType.includes('jpg') || fileType.includes('jpeg')) {
      return { bg: 'bg-orange-500', text: 'JPG' };
    } else if (fileType.includes('png')) {
      return { bg: 'bg-green-500', text: 'PNG' };
    } else {
      return { bg: 'bg-gray-500', text: 'FILE' };
    }
  };

  const handleFileSelect = (selectedFiles: FileList | null) => {
    if (!selectedFiles) return;

    Array.from(selectedFiles).forEach(file => {
      if (files.length >= maxFiles) {
        alert(`Maksimal ${maxFiles} ta fayl yuklashingiz mumkin`);
        return;
      }

      const fileExtension = '.' + file.name.split('.').pop()?.toLowerCase();
      if (!acceptedTypes.includes(fileExtension)) {
        alert(`${fileExtension} format qo'llab-quvvatlanmaydi`);
        return;
      }

      onFileAdd(file);
    });
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    handleFileSelect(e.dataTransfer.files);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
        {title}
      </h3>

      {/* Upload Area */}
      <div
        className={`border-2 border-dashed rounded-xl p-8 text-center transition-colors ${
          isDragOver
            ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
            : 'border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500'
        }`}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onClick={handleClick}
      >
        <Upload className="mx-auto h-12 w-12 text-gray-400 dark:text-gray-500 mb-4" />
        <p className="text-gray-600 dark:text-gray-400 mb-2">
          Fayllarni bu yerga sudrab tashlang yoki{' '}
          <span className="text-blue-600 dark:text-blue-400 font-medium">
            yuklash uchun bosing
          </span>
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-500">
          {acceptedTypes.join(', ')} formatlari qo'llab-quvvatlanadi
        </p>
        <input
          ref={fileInputRef}
          type="file"
          multiple
          accept={acceptedTypes.join(',')}
          onChange={(e) => handleFileSelect(e.target.files)}
          className="hidden"
        />
      </div>

      {/* Files List */}
      {files.length > 0 && (
        <div className="mt-6 space-y-3">
          {files.map((file) => {
            const fileType = getFileTypeIcon(file.type);
            return (
              <div
                key={file.id}
                className="flex items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600"
              >
                {/* File Type Icon */}
                <div className={`w-12 h-12 ${fileType.bg} rounded-lg flex items-center justify-center text-white font-bold text-sm mr-4`}>
                  {fileType.text}
                </div>

                {/* File Details */}
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                    {file.name}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {formatFileSize(file.size)}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {file.date.toLocaleDateString('uz-UZ', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => onFileView(file)}
                    className="p-2 text-blue-600 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/20 rounded-lg transition-colors"
                    title="Ko'rish"
                  >
                    <Eye className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => onFileDownload(file)}
                    className="p-2 text-green-600 dark:text-green-400 hover:bg-green-100 dark:hover:bg-green-900/20 rounded-lg transition-colors"
                    title="Yuklab olish"
                  >
                    <Download className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => onFileRemove(file.id)}
                    className="p-2 text-red-600 dark:text-red-400 hover:bg-red-100 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                    title="O'chirish"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Files Count */}
      <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">
        {files.length} / {maxFiles} fayl
      </div>
    </div>
  );
};

export default FileUpload;
