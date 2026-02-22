import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SEO = ({ title, description }) => {
    const location = useLocation();

    useEffect(() => {
        const baseTitle = 'Uganda Showcase | Professional Digital Architecture';
        const pageTitle = title ? `${title} | Uganda Showcase` : baseTitle;

        document.title = pageTitle;

        // Update meta description if provided
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', description || 'Explore the royal heritage and technical biological wonders of Uganda.');
        }

        // Potential for OpenGraph tags here for high-end link sharing
    }, [location, title, description]);

    return null; // This component doesn't render anything visually
};

export default SEO;
