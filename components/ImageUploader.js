"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { Close } from "@mui/icons-material";

export default function ImageUploader({
  multiple = false,
  maxSizeMB = 5,
  onChange,
}) {
  const fileInputRef = useRef(null);
  const [previews, setPreviews] = useState([]); // For UI
  const [error, setError] = useState(null);

  const fileToBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (err) => reject(err);
    });

  const handleFileSelect = async (newFiles) => {
    if (!newFiles) return;

    const base64Array = [];
    const previewArray = [];

    for (let i = 0; i < newFiles.length; i++) {
      const file = newFiles[i];

      if (!file.type.startsWith("image/")) {
        setError("Only image files are allowed.");
        continue;
      }

      if (file.size > maxSizeMB * 1024 * 1024) {
        setError(`File size must be under ${maxSizeMB}MB.`);
        continue;
      }

      const base64 = await fileToBase64(file);
      base64Array.push(base64);
      previewArray.push(URL.createObjectURL(file));
    }

    if (base64Array.length > 0) {
      setPreviews(multiple ? [...previews, ...previewArray] : [previewArray[0]]);
      onChange?.(multiple ? [...(previews || []), ...base64Array] : [base64Array[0]]);
      setError(null);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    handleFileSelect(e.dataTransfer.files);
  };

  const handleRemove = (index) => {
    const updatedPreviews = previews.filter((_, i) => i !== index);
    setPreviews(updatedPreviews);

    if (onChange) {
      const newBase64Array = updatedPreviews.map((previewUrl) => previewUrl);
      onChange(newBase64Array);
    }
  };

  return (
    <div>
      <div
        className="border-2 border-dashed border-orangeColor rounded-lg p-6 text-center cursor-pointer hover:bg-orangeColor/10 transition"
        onClick={() => fileInputRef.current?.click()}
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDrop}
      >
        <p className="text-white font-inter">
          Drag & drop images here, or{" "}
          <span className="font-semibold">browse</span>
        </p>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          multiple={multiple}
          className="hidden"
          onChange={(e) => handleFileSelect(e.target.files)}
        />
      </div>

      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

      {previews.length > 0 && (
        <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-4">
          {previews.map((src, index) => (
            <div key={index} className="relative group">
              <Image
                src={src}
                alt={`Preview ${index}`}
                width={200}
                height={200}
                className="rounded-lg object-cover h-40 w-full"
              />
              <button
                type="button"
                className="absolute top-2 right-2 bg-blackColor/70 p-1 rounded-full text-white opacity-0 group-hover:opacity-100 transition"
                onClick={() => handleRemove(index)}
              >
                <Close size={16} />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
