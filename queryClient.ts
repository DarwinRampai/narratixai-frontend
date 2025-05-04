import { QueryClient } from "@tanstack/react-query";

interface ApiError extends Error {
  status?: number;
  info?: any;
}

// Create API error with details
const createApiError = (status: number, message: string, info?: any): ApiError => {
  const error: ApiError = new Error(message);
  error.status = status;
  error.info = info;
  return error;
};

// Generic function to handle API responses
const handleApiResponse = async (response: Response) => {
  if (!response.ok) {
    const errorText = await response.text();
    let errorInfo;
    
    try {
      errorInfo = JSON.parse(errorText);
    } catch (e) {
      errorInfo = { message: errorText };
    }
    
    const errorMessage = errorInfo.message || `API Error: ${response.status}`;
    throw createApiError(response.status, errorMessage, errorInfo);
  }
  
  // Handle empty responses (like for DELETE requests)
  const contentType = response.headers.get("content-type");
  if (contentType && contentType.includes("application/json")) {
    return response.json();
  }
  
  return response.text();
};

// API request function that configures fetch with appropriate options
export const apiRequest = async (
  url: string,
  method: string = "GET",
  data?: any,
  options: RequestInit = {}
) => {
  const headers = {
    "Content-Type": "application/json",
    ...(options.headers || {}),
  };
  
  const config: RequestInit = {
    method,
    headers,
    ...options,
  };
  
  // Add body for non-GET requests if data is provided
  if (method !== "GET" && data) {
    config.body = JSON.stringify(data);
  }
  
  try {
    const response = await fetch(url, config);
    return await handleApiResponse(response);
  } catch (error) {
    // Rethrow fetch errors (network errors, etc.)
    if (!(error instanceof Response)) {
      throw error;
    }
    return handleApiResponse(error);
  }
};

// Default fetcher function for useQuery
const defaultFetcher = async <T>(url: string): Promise<T> => {
  return apiRequest(url) as Promise<T>;
};

// Create and configure QueryClient
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      retry: 1,
      queryFn: defaultFetcher,
    },
  },
});