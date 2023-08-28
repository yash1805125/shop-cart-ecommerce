import React, { useState } from "react";

export const Contact = () => {
  const [data, setData] = useState([]);
  const handleshopify = () => {
    fetch(
      "https://{bd168410bde551171dbeddbbc2567f8d}{81435412f04ed81dcf10203b47054471}@{Tech-Shop-App}.myshopify.com/admin/api/{api-version}/{resource}.json"
    );
  };
  return (
    <div>
      <button type="button" onClick={handleshopify}>
        GetData
      </button>
    </div>
  );
};

// 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
