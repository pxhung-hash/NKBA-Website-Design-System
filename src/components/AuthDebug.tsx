import React, { useState, useEffect } from 'react';
import { projectId } from '../utils/supabase/info';

export function AuthDebug() {
  const [healthStatus, setHealthStatus] = useState<string>('Checking...');
  const [serverUrl, setServerUrl] = useState<string>('');

  useEffect(() => {
    const url = `https://${projectId}.supabase.co/functions/v1/make-server-f61d8c0d/health`;
    setServerUrl(url);
    
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setHealthStatus(JSON.stringify(data));
      })
      .catch(err => {
        setHealthStatus(`Error: ${err.message}`);
      });
  }, []);

  return (
    <div className="fixed bottom-4 right-4 bg-white p-4 shadow-lg border border-gray-300 text-xs max-w-md">
      <h3 className="font-bold mb-2">Auth Debug Info</h3>
      <p><strong>Server URL:</strong> {serverUrl}</p>
      <p><strong>Health Check:</strong> {healthStatus}</p>
      <p><strong>Project ID:</strong> {projectId}</p>
    </div>
  );
}
