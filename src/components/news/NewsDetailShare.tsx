import React from 'react';
import { Share2 } from 'lucide-react';

const NewsDetailShare: React.FC = () => {
  const handleTelegramShare = () => {
    window.open(
      `https://t.me/share/url?url=${encodeURIComponent(window.location.href)}`,
      "_blank"
    );
  };

  const handleFacebookShare = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`,
      "_blank"
    );
  };

  return (
    <div className="mt-10 border-t border-gray-200 pt-6">
      <h3 className="text-lg font-semibold mb-3 text-gray-800">
        Ulashish
      </h3>
      <div className="flex flex-wrap gap-3">
        <button
          onClick={handleTelegramShare}
          className="flex items-center gap-2 bg-[#229ED9] hover:bg-[#1d8bc1] text-white px-4 py-2 rounded-lg transition"
        >
          <Share2 className="w-4 h-4" /> Telegram
        </button>
        <button
          onClick={handleFacebookShare}
          className="flex items-center gap-2 bg-[#1877F2] hover:bg-[#155ec9] text-white px-4 py-2 rounded-lg transition"
        >
          <Share2 className="w-4 h-4" /> Facebook
        </button>
      </div>
    </div>
  );
};

export default NewsDetailShare;
