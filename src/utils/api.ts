const API_BASE_URL = import.meta.env.VITE_API_URL || `${window.location.protocol}//localhost:3001/api`;

interface ApiResponse {
  success: boolean;
  message?: string;
  error?: string;
}

interface SubscriptionData {
  email: string;
}

interface ContactData {
  name: string;
  email: string;
  subject: string;
  category?: string;
  message: string;
}

interface PartnershipData {
  name: string;
  email: string;
  company?: string;
  partnershipType: string;
  experience?: string;
  message: string;
}

const handleApiResponse = async (response: Response): Promise<ApiResponse> => {
  const data = await response.json();
  
  if (!response.ok) {
    throw new Error(data.error || 'An error occurred');
  }
  
  return data;
};

export const subscribeToNewsletter = async (data: SubscriptionData): Promise<ApiResponse> => {
  try {
    const response = await fetch(`${API_BASE_URL}/subscribe`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    return await handleApiResponse(response);
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    throw error;
  }
};

export const submitContactForm = async (data: ContactData): Promise<ApiResponse> => {
  try {
    const response = await fetch(`${API_BASE_URL}/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    return await handleApiResponse(response);
  } catch (error) {
    console.error('Contact form error:', error);
    throw error;
  }
};

export const submitPartnershipForm = async (data: PartnershipData): Promise<ApiResponse> => {
  try {
    const response = await fetch(`${API_BASE_URL}/partnership`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    return await handleApiResponse(response);
  } catch (error) {
    console.error('Partnership form error:', error);
    throw error;
  }
};