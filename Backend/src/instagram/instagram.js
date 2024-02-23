import React, { useEffect, useState } from 'react';
import axios from 'axios';

const InstagramFeed = () => {
  const [media, setMedia] = useState([]);

  useEffect(() => {
    const fetchInstagramMedia = async () => {
      try {
        const accessToken = 'IGQWRQOHo3ZAzYyWG4wSHl1bWRkdVhjaktHU0RKY0Q4STJYLXZA3T1hlbjN4eUJJbjlqaVFlRHpkMHlTVE9na2tJT0xXUmd0eVVQYkN1RU1VZAVNLZAjBQOERyZAkx4MHJRczhGUmNyckFTX3JDdHQzTS02bTNMTmEwSEkZD';
        const response = await axios.get(
          `http://localhost:5454/instagram/media`
        );

        const mediaData = response.data;

        setMedia(mediaData);
      } catch (error) {
        console.error('Error fetching Instagram media:', error);
      }
    };

    fetchInstagramMedia();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {media.map((item) => (
          <div key={item.id} className="overflow-hidden rounded-lg shadow-lg">
            <img
              src={item.media_url}
              alt="Instagram Post"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstagramFeed;
